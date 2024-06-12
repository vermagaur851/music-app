import { Resend } from "resend";
export async function sendEmail(email: string, message: string) {

  const resend = new Resend(process.env.API_KEY)
  try {
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: "vermagaurav851@gmail.com",
      subject: email,
      text: message
    });
    return { success: true, message: data }
  } catch (error) {
    return { success: false, message: 'Failed to send Email', error }
  }
}