import Head from "next/head";

interface IHeadProps {
  title: string;
  description: string;
}

const HeadInfo = ({ title, description }: IHeadProps): JSX.Element => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Head>
  );
};

HeadInfo.defaultProps = {
  title: "e약은 뭐예요?",
  description: "약을 안전하게 복용하게 도와드려요",
};

export default HeadInfo;
