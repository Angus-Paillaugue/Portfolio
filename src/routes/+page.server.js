import {sendEmail} from "$lib/server/sendEmail";

export const actions = {
	contact: async ({ request }) => {
        try {
            const formData = Object.fromEntries(await request.formData());
            const { email, message } = formData;
            await sendEmail({
                subject: 'Portfolio contact',
                text: `${email} has sent you an e-mail from your portfolio contact form :\n${message}`
            });
    
            return { success: true };
        } catch (error) {
            console.log(error);
            return { success: false, message:error.toString() };
        }
    }
};