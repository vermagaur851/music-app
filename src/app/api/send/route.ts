import { error } from "console";
import { Resend } from "resend";

export async function POST(request: Request) {
    const resend = new Resend('re_fUMFgCM3_6CKx7PjwsunuZs4YUiHHM1dq')
    try {
        const { email, message } = await request.json()
        const data = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: "vermagaurav851@gmail.com",
            subject: email,
            text: message
        });
        
        if(data.error){
            throw new Error(data.error.message)
        }
        return Response.json({ success: true, message: "Email sent" }, { status: 200 })
    } catch (error) {
        return Response.json({ success: false, message: "Error sending Email" }, { status: 500 })
    }
}

