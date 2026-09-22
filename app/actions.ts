"use server";

import { Resend } from "resend";

export type ContactFormState = {
  success: boolean;
  message: string;
};

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const name = formData.get("name")?.toString().trim() ?? "";
  const email = formData.get("email")?.toString().trim() ?? "";
  const message = formData.get("message")?.toString().trim() ?? "";

  if (!name || !email || !message) {
    return {
      success: false,
      message: "Please fill in all fields.",
    };
  }

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return {
      success: false,
      message: "Email service is not configured correctly.",
    };
  }

  try {
    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["favourabalogu.dev@gmail.com"],
      replyTo: email,
      subject: `New portfolio message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #18181b;">
          <h2>New Portfolio Message</h2>

          <p>
            <strong>Name:</strong> ${escapeHtml(name)}
          </p>

          <p>
            <strong>Email:</strong> ${escapeHtml(email)}
          </p>

          <p>
            <strong>Message:</strong>
          </p>

          <p>
            ${escapeHtml(message).replace(/\n/g, "<br />")}
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return {
        success: false,
        message: "Message could not be sent. Please try again.",
      };
    }

    return {
      success: true,
      message: "Message sent successfully! Thank you for reaching out.",
    };
  } catch (error) {
    console.error("Contact form error:", error);

    return {
      success: false,
      message: "Something went wrong. Please try again.",
    };
  }
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}