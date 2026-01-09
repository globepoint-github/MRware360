import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { cookies } from "next/headers";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const title = formData.get("title")?.toString() || "";
    const name = formData.get("name")?.toString() || "";
    const tel = formData.get("tel")?.toString() || "";
    const email = formData.get("email")?.toString() || "";
    const content = formData.get("content")?.toString() || "";
    const userCaptcha = formData.get("captcha")?.toString() || "";
    const file = formData.get("file") as File | null;

    // 1. Verify svg-captcha
    const captchaCookie = cookies().get("captcha")?.value;

    if (!captchaCookie || !userCaptcha || captchaCookie !== userCaptcha) {
        return NextResponse.json(
            { message: "Invalid CAPTCHA" },
            { status: 400 }
        );
    }
    
    // Invalidate cookie after use (optional but good practice)
    cookies().delete("captcha");

    // 2. Configure Nodemailer
    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;

    if (!emailUser || !emailPass) {
      console.error("EMAIL_USER or EMAIL_PASS is not defined");
      return NextResponse.json(
        { message: "Server configuration error" },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail", // You might need to change this depending on the email provider
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    // 3. Prepare attachments
    const attachments: any[] = [];
    if (file) {
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);
        attachments.push({
            filename: file.name,
            content: buffer,
        });
    }

    // 4. Send Email
    const mailOptions = {
        from: emailUser,
        to: "gpsales@globepoint.co.kr",
        subject: `[MRWARE문의] ${title}`,
        text: `
          Name: ${name}
          Phone: ${tel}
          Email: ${email}
          
          Content:
          ${content}
        `,
        html: `
          <h2>New Inquiry from Website</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone:</strong> ${tel}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Title:</strong> ${title}</p>
          <hr />
          <p><strong>Content:</strong></p>
          <pre style="font-family: inherit; white-space: pre-wrap;">${content}</pre>
        `,
        attachments: attachments,
      };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });

  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Failed to send email" },
      { status: 500 }
    );
  }
}
