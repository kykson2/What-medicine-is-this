import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import instagram from "../../icon/instagram_icon.svg";
import github from "../../icon/github_icon.svg";
import tistory from "../../icon/tistory_icon.svg";
import StyledFooter, { StyledFooterButton } from "../../styles/footer/StyledFooter";
import { SubmitHandler, useForm } from "react-hook-form";
import sendEmail from "../sendEmail/sendEmail";

interface Formvalues {
  email: string;
  message: string;
}

const Footer: NextPage = () => {
  const { register, handleSubmit, resetField } = useForm<Formvalues>({
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

  return (
    <StyledFooter>
      <div className="footer-distributed">
        <div className="footer-left">
          <h3>e약은 뭐예요</h3>
          <p>김관우의 포트폴리오 © 2022</p>
        </div>
        <div className="footer-right">
          <form onSubmit={handleSubmit((data: Formvalues) => sendEmailHandler(data))}>
            <p>Contact Us</p>
            <input type="text" className="email" {...register("email")} placeholder="Email" />
            <textarea {...register("message")} placeholder="Message"></textarea>
            <StyledFooterButton type="submit">Send</StyledFooterButton>
          </form>
        </div>
      </div>
      <div className="link">
        {link.map((item) => (
          <p key={item.alt}>
            <Link href={item.address} key={item.alt}>
              <a>
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                ></Image>
              </a>
            </Link>
          </p>
        ))}
      </div>
    </StyledFooter>
  );
};

export default Footer;
