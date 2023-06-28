import {sendEmail} from "$lib/server/sendEmail"

export async function POST({ request }) {
    const { email, message } = await request.json();

    await sendEmail({
        subject: 'Portfolio contact',
        text: `${email} has sent you an e-mail from your portfolio contact form :\n${message}`
    });

    return new Response(JSON.stringify({ done:true }));
}