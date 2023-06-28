import { SMTPClient, Message } from "emailjs";
const EMAIL_APP_PASSWORD = "gsggtkrataklhqur";
const client = new SMTPClient({
  user: "angus.paillaugue40@gmail.com",
  password: EMAIL_APP_PASSWORD,
  host: `smtp.gmail.com`,
  ssl: true
});
async function sendEmail({ subject, text, attachment }) {
  const msg = new Message({
    text,
    from: "angus.paillaugue40@gmail.com",
    to: "angus.paillaugue40@gmail.com",
    subject,
    attachment: attachment ?? []
  });
  try {
    await client.sendAsync(msg);
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
export {
  POST
};
