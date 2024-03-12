import nodemailer from "nodemailer";
import { config } from "dotenv";

config();

export const transport = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  auth: {
    user: process.env.EMAIL_USER,
    password: process.env.EMAIL_PASS,
  },
});

export const send = (to, subject, body) => {
  transport.sendMail({
    from: `${process.env.EMAIL_NAME} <${process.env.EMAIL_FROM}>`,
    to,
    subject,
    text: body,
  });
};