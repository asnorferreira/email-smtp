import { transport } from "../config/email.js";
import { compilatorHtml } from "../utils/compilatorHtml.js";

export const user = {
  name: "Asnor Cubos",
  email: "asnor.ferreira@cubos.academy",
  password: "123Asc",
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (user.email !== email || user.password !== password) {
      return res.status(401).json({
        error: "Email or password do not match",
      });
    }

    const html = await compilatorHtml("./src/templates/login.html", {
      nameuser: user.name,
    });

    transport.sendMail({
      from: `${process.env.EMAIL_NAME} <${process.env.EMAIL_FROM}>`,
      to: `${user.nome} <${user.email}>`,
      subject: "Try to login",
      html,
    });
    return res.status(200).json({
      message: "Login success",
    });
  } catch (error) {
    return res.status(500).json({
      error: "Internal server error",
    });
  }
};
