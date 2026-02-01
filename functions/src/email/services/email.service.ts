import {transporter} from "../../config/email";


export const sendEmail = 
  async (email: string, text: string, subject: string) => {
  const data = await transporter.sendMail({
    from: process.env.EMAIL,
    to: email,
    subject: subject,
    text: text,
  });

  return data.response;
};
