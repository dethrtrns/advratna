// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { mailOptions, transporter } from "../../config/nodeMailer";

const handler = async (req, res) => {
  // console.log(req.body);
  if (req.method === "POST") {
    const data = req.body;

    try {
      await transporter.sendMail({
        ...mailOptions,
        subject: "New Lead From Raj",
        text: `${data.phone}`,
        html: `<h1>Client Name:</h1><p><strong>${data.name}</strong></p></br><h1>Client Email:</h1><p><strong>${data.email}</strong></p></br><h1>Client Phone number:</h1><p><strong><a href="tel:${data.phone}">${data.phone}</a></strong></p></br><h1>Client Message:</h1><p><strong>${data.message}</strong></p></br>`,
      });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: error.message });
    }
  }
  return res.status(400).json({ Message: "Bad request" });
};

export default handler;
