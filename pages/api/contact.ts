// pages/api/contact.ts
import type { NextApiRequest, NextApiResponse } from "next"
import nodemailer from "nodemailer"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).end()

  const { name, email, message } = req.body

  if (!name || !email || !message)
    return res.status(400).json({ error: "Missing required fields" })

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  })

  try {
await transporter.sendMail({
  from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`, // ✅ authenticated sender
  to: process.env.GMAIL_USER, // your inbox
  replyTo: email, // ✅ allows you to hit "Reply" and respond directly to user
  subject: `New Contact Message from ${name}`,
  text: `
Name: ${name}
Email: ${email}

Message:
${message}
  `,
})


    res.status(200).json({ success: true })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: "Failed to send email" })
  }
}
