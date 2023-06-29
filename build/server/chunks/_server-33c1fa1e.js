import nodemailer from 'nodemailer';

const EMAIL_APP_PASSWORD = "gsggtkrataklhqur";
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "angus.paillaugue40@gmail.com",
    pass: EMAIL_APP_PASSWORD
  }
});
async function sendEmail({ subject, text, attachment }) {
  try {
    await transporter.sendMail({
      from: "angus.paillaugue40@gmail.com",
      to: "angus.paillaugue40@gmail.com",
      subject,
      text
    });
  } catch (error) {
    console.log(error);
  }
  return;
}
async function POST({ request }) {
  const { email, message } = await request.json();
  await sendEmail({
    subject: "Portfolio contact",
    text: `${email} has sent you an e-mail from your portfolio contact form :
${message}`
  });
  return new Response(JSON.stringify({ done: true }));
}

export { POST };
//# sourceMappingURL=_server-33c1fa1e.js.map
