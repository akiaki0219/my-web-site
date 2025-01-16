import { NextResponse, type NextRequest } from "next/server"
import nodemailer from "nodemailer"
import Mail from "nodemailer/lib/mailer"

export async function POST(request: NextRequest) {
  const {email, subject, body} = await request.json()

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NEXT_PUBLIC_EMAIL_ADDRESS,
      pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD,
    },
  })

  const mailOptions: Mail.Options = {
    from: process.env.NEXT_PUBLIC_EMAIL_ADDRESS,
    to: process.env.NEXT_PUBLIC_EMAIL_ADDRESS,
    subject: subject,
    text: `${body}\n\n---\nfrom: ${email}`,
  }

  try {
    await transport.sendMail(mailOptions)
    return NextResponse.json({message: "Success!", status: 200})
  } catch (err) {
    return NextResponse.json({message: "Failed!", status: 500})
  }
}
