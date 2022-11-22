import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import instagram from "../../icon/instagram_icon.svg";
import github from "../../icon/github_icon.svg";
import tistory from "../../icon/tistory_icon.svg";
import StyledFooter from "../../styles/StyledFooter";
import { SubmitHandler, useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import axios from "axios";
import sendEmail from "../sendEmail/sendEmail";

interface Formvalues {
  email: string;
  message: string;
}

const Footer: NextPage = () => {
  const { register, handleSubmit, formState, reset, resetField } =
    useForm<Formvalues>({
      defaultValues: {
        email: "",
        message: "",
      },
    });

  const sendEmailHandler: SubmitHandler<Formvalues> = (data) => {
    sendEmail(data);

    resetField("email");
    resetField("message");
  };

  const link = [
    {
      address: "https://www.instagram.com/gwanwoo_x/",
      src: instagram,
      alt: "instagram",
      width: 25,
      height: 25,
    },
    {
      address: "https://github.com/kykson2/What-medicine-is-this",
      src: github,
      alt: "github",
      width: 25,
      height: 25,
    },
    {
      address: "https://gaanuu.tistory.com/",
      src: tistory,
      alt: "tistory",
      width: 25,
      height: 25,
    },
  ];

  const linkArea = link.map((item) => (
    <p key={item.alt}>
      <Link href={item.address}>
        <Image
          src={item.src}
          alt={item.alt}
          width={item.width}
          height={item.height}
        ></Image>
      </Link>
    </p>
  ));

  return (
    <StyledFooter>
      <div className="footer-distributed">
        <div className="footer-left">
          <h3>e약은 뭐예요</h3>
          <p>김관우의 포트폴리오 © 2022</p>
        </div>
        <div className="footer-right">
          <p>Contact Us</p>

          <form
            onSubmit={handleSubmit((data: Formvalues) =>
              sendEmailHandler(data)
            )}
          >
            <input {...register("email")} placeholder="Email" />
            <textarea {...register("message")} placeholder="Message"></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
      {/* <div className="link">{linkArea}</div> */}
    </StyledFooter>
  );
};

export default Footer;
