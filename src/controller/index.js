import { send } from "../services/email.js";
import { compilatorHtml } from "../utils/compilatorHtml.js";

export const sendMail = async (req, res) => {
  const { to, subject, body } = req.body;
  try {
    if (!to || !subject || !body) {
      return res.status(400).json({
        error: "Preencha todos os campos",
      });
    }

    const html = await compilatorHtml("./src/templates/login.html", {
      nameuser: to,
    });

    send(to, subject, body, html);

    return res.status(200).json({ message: "Email enviado com sucesso!" });
  } catch (error) {
    return res.status(500).json({
      error: "Internal server error",
    });
  }
};
