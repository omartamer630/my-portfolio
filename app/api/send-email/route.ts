import { NextRequest } from "next/server";
import { sendEmail } from "@/back-end-services";
export const POST = async (req: NextRequest) => {
  try {
    const { firstName, lastName, email, phone, message, service } =
      (await req.json()) as {
        firstName: string;
        lastName: string;
        email: string;
        phone: string;
        message: string;
        service: string;
      };

    if (!firstName || !lastName || !email || !phone || !message) {
      return new Response("Missing required fields", { status: 400 });
    }

    const emailContent = `
  <html>
    <head>
      <style>
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          background-color: #f9f9f9;
          padding: 20px;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          background: #ffffff;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
        }
        h2 {
          color: #333;
        }
        p {
          color: #555;
        }
        .footer {
          margin-top: 20px;
          padding-top: 10px;
          border-top: 1px solid #ddd;
          font-size: 14px;
          color: #777;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h2>New Service Request: ${service}</h2>
        <p><strong>From:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <div class="footer">
          <p>Sent from the contact form.</p>
        </div>
      </div>
    </body>
  </html>
`;

    await sendEmail(`Requesting ${service}`, emailContent);
    return new Response("Message sent successfully", { status: 200 });
  } catch (error: unknown) {
    console.error(error);
    return new Response("Internal Server Error", { status: 500 });
  }
};
