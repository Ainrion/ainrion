import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Gmail
        pass: process.env.EMAIL_PASS, // Gmail App Password
      },
    });

    // Use the provided subject or a default one
    const emailSubject = subject ? subject : "New Business Inquiry";

    // Email details
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      // to: "business@ainrion.com",
      to: "ggcravin@gmail.com",
      subject: emailSubject, // Uses subject if available, otherwise defaults
      text: message,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             ${subject ? `<p><strong>Subject:</strong> ${subject}</p>` : ""}
             <p>${message}</p>`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send email" },
      { status: 500 }
    );
  }
}
