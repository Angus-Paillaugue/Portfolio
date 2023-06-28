async function sendEmail({ subject, text, attachment }) {
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
