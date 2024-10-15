import {NextRequest, NextResponse} from 'next/server';
import nodemailer from 'nodemailer';

const from = process.env.NEXT_PUBLIC_FROM_EMAIL_ADDRESS as string;
const user = process.env.NEXT_PUBLIC_EMAIL_ADDRESS as string;
const pass = process.env.NEXT_PUBLIC_EMAIL_PASSWORD as string;

export async function POST(req: NextRequest) {
  const body = await req.json();
  body.body = body.body.replace("&", "&amp").replace("<", "&lt").replace(">", "&gt");

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
      user: user,
      pass: pass,
    },
  });

  const toHostMailData = {
    from: from,
    to: user,
    subject: body.subject,
    text: body.body,
    html: `<p>from: ${body.email}</p></br><p>${body.body}</p>`,
  };

  try {
    const info = await transporter.sendMail(toHostMailData);
    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Error sending email' }, { status: 500 });
  }
}
