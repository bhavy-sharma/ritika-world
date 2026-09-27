// app/api/admin/send-email/route.js
import { NextResponse } from 'next/server';
import transporter from '@/lib/nodemailer';

export async function POST(request) {
  try {
    const { to, subject, text } = await request.json();
    
    await transporter.sendMail({
      from: '"E-Store Admin" <admin@estore.com>',
      to,
      subject,
      text,
    });

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}