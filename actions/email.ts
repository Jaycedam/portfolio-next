"use server";

import { EmailTemplate } from "@/components/email-template";
import { emailSchema } from "@/utils/zod-schema";
import { EmailForm } from "@/utils/types";
import { Resend } from "resend";

export async function sendEmail(data: EmailForm) {
  const result = emailSchema.safeParse(data);

  const resend = new Resend(process.env.RESEND_API_KEY);

  if (!result.success) {
    throw new Error();
  }

  if (result.success) {
    try {
      const { data, error } = await resend.emails.send({
        from: process.env.RESEND_EMAIL as string,
        to: process.env.EMAIL as string,
        subject: result.data.subject,
        react: EmailTemplate({
          email: result.data.email,
          message: result.data.message,
          subject: result.data.subject,
        }) as React.ReactElement,
      });

      if (error) {
        return {
          success: false,
          message: "Error enviando email : " + error.message,
        };
      }

      return {
        success: true,
        message: "Email enviado!",
      };
    } catch (e: any) {
      return {
        success: false,
        message: "Error enviando email. Intenta nuevamente... " + e.message,
      };
    }
  }
}
