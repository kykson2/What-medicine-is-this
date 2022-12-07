import emailjs from "emailjs-com";

interface Formvalues {
  email: string;
  message: string;
}

const sendEmail = async (data: Formvalues) => {
  const { email, message } = data;
  await emailjs.send(
    process.env.NEXT_PUBLIC_YOUR_SERVICE_ID as string,
    process.env.NEXT_PUBLIC_YOUR_TEMPLATE_ID as string,
    { email, message },
    process.env.NEXT_PUBLIC_YOUR_USER_ID as string
  );
};

export default sendEmail;
