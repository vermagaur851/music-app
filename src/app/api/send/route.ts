import { sendEmail } from "@/utils/email";

export async function POST(request: Request) {
    try {
        const data = await request.json()
        const emailResponse = await sendEmail(data.email,data.message)
        return Response.json({ success: true, message: "Email sent" }, { status: 200 })
    } catch (error) {
        console.log(error);
        return Response.json({ success: false, message: "Error sending Email" }, { status: 500 })
    }
}