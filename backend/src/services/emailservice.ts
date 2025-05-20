import nodemailer from 'nodemailer';
import dotenv from "dotenv"

dotenv.config();

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: true,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

const currentYear = new Date().getFullYear();

export const sendEmail = async (email: string, subject: string, title: string, contents: string) => {
    const username = email.split('@')[0];
    const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${subject}</title>
    </head>
    <body>
    <h1>${title}</h1>
    <p>${contents}</p>
    <p>This email was sent in compliance with the Jean Pierre AKIMANA. Software and Tech Enthusiast. You can contact me at <a href="mailto:akimana.inono@gmail.com">Jean Pierre AKIMANA(InOnO)</a>.</p>
    </body>
    </html>
    `;

    const mailOptions = {
        from: `"Jean Pierre" <${process.env.SMTP_USER}>`,
        to: email,
        subject,
        html,
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Email Sent Successfully:', info.response);
    } catch (error: any) {
        console.error('Error Sending Email:', error.message);
        throw new Error('Failed to send email. Please try again later.');
    }
};
