import { NextSeo } from "next-seo";
import icon from "../../icon/medicine_icon.svg";

interface IHeadProps {
  title: string;
  description: string;
  img: string;
  url: string;
}

const HeadInfo = ({ title, description, url, img }: IHeadProps): JSX.Element => {
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical="https://www.whatmedicineisthis.info/"
        openGraph={{
          locale: "ko_KR",
          type: "website",
          url,
          title: title,
          description: description,
          images: [{ url: img !== "" ? img : icon, width: 800, height: 600 }],
          site_name: "whatmedicineisthis",
        }}
      />
    </>
  );
};

export default HeadInfo;
