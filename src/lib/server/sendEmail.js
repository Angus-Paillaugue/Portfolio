import nodemailer from "nodemailer"
import { EMAIL_APP_PASSWORD } from "$env/static/private"

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: 'angus.paillaugue40@gmail.com',
      pass: EMAIL_APP_PASSWORD
    }
});

export async function sendEmail({ subject, text, attachment }) {
    
    try {
        await transporter.sendMail({
            from: 'angus.paillaugue40@gmail.com',
            to: "angus.paillaugue40@gmail.com",
            subject: subject,
            text: text,
        });
    } catch (error) {
        console.log(error)
    }

    return;
}