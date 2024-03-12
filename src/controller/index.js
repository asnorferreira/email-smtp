import { send } from "../services/email.js";
import { compilatorHtml } from "../utils/compilatorHtml.js";
import knex from "../config/conect.js";

export const sendMail = async (req, res) => {
  const { to, subject } = req.body;
  try {
    if (!to || !subject) {
      return res.status(400).json({
        error: "Preencha todos os campos",
      });
    }

    const existingSubscriber = await knex("newsletter").where({ email: to }).first();
    if (!existingSubscriber) {
      return res.status(400).json({
        error: "O e-mail fornecido não está cadastrado para receber a newsletter",
      });
    }

    const html = await compilatorHtml("./src/template/login.html", {
      nameuser: to,
    });

    send(to, subject, html);

    return res.status(200).json({ message: "Email enviado com sucesso!" });
  } catch (error) {
    console.error("Erro interno do servidor:", error);
    return res.status(500).json({
      error: "Internal server error",
    });
  }
};

export const registerMail = async (req, res) => {
  const { email } = req.body;
  try {
    if (!email) {
      return res.status(400).json({
        error: "Preencha todos os campos",
      });
    }

    const existingEmail = await knex("newsletter").where({ email }).first();
    if (existingEmail) {
      return res.status(400).json({
        error: "Este e-mail já está cadastrado na newsletter",
      });
    }

    await knex("newsletter").insert({ email });

    const html = await compilatorHtml("./src/template/register.html", {
      name: email,
    });

    await send(email, "Confirmação de cadastro na newsletter", html);

    return res.status(200).json({ message: "E-mail registrado com sucesso!" });
  } catch (error) {
    console.error("Erro interno do servidor:", error);
    return res.status(500).json({
      error: "Internal server error",
    });
  }
};