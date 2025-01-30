import nodemailer from "nodemailer";

const { EMAIL_HOST, EMAIL_PORT, EMAIL_AUTH_USER, EMAIL_AUTH_PASS } =
  process.env;

const validateEnvVariables = () => {
  if (!EMAIL_HOST || !EMAIL_AUTH_USER || !EMAIL_AUTH_PASS) {
    throw new Error("Missing environment variables");
  }
};

const createTransporter = () => {
  validateEnvVariables();

  return nodemailer.createTransport({
    host: EMAIL_HOST,
    port: parseInt(EMAIL_PORT || "465", 10),
    secure: true,
    auth: {
      user: EMAIL_AUTH_USER,
      pass: EMAIL_AUTH_PASS,
    },
  });
};

export const sendEmail = async (subject: string, html: string) => {
  const transporter = createTransporter();

  const mailOptions = {
    from: EMAIL_AUTH_USER,
    to: EMAIL_AUTH_USER,
    subject,
    html,
  };

  await transporter.sendMail(mailOptions);
};
