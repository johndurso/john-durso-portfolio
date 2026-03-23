// app/api/contact/route.ts
import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    console.log("📩 Contact form received:", { name, email, subject });
    console.log("🔑 API key present:", !!process.env.RESEND_API_KEY);

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    try {
      const ping = await fetch("https://api.resend.com");
      console.log("🌐 Resend reachable, status:", ping.status);
    } catch (e) {
      console.error("🚫 Cannot reach Resend API:", e);
    }

    const { data, error } = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: ["johnkyrondurso@gmail.com"],
      replyTo: email,
      subject: `[Contact] ${subject}`,
      html: `
        <h2>New message from your contact form</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br/>")}</p>
      `,
    });

    if (error) {
      console.error("❌ Resend error:", JSON.stringify(error, null, 2));
      return NextResponse.json({ error }, { status: 500 });
    }

    console.log("✅ Email sent successfully:", data);
    return NextResponse.json({ data }, { status: 200 });
  } catch (err) {
    console.error("💥 Unexpected error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}