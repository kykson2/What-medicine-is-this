import Head from "next/head";
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
          images: [{ url: img, width: 800, height: 600 }],
          site_name: "whatmedicineisthis",
        }}
      />
    </>
  );
};

HeadInfo.defaultProps = {
  title: "e약은 뭐예요?",
  description: "약을 안전하게 복용할 수 있도록 도와드려요",
  url: `https://www.whatmedicineisthis.info/`,
  img: icon,
};

export default HeadInfo;
