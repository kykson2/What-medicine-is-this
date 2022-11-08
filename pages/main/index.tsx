import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import StyledMainButton from "../../styles/StyledMainButton";

const Main: NextPage = () => {
  const router = useRouter();
  return (
    <div>
      <StyledMainButton onClick={() => router.push("/search")}>
        <a>검색해서 찾을래요</a>
      </StyledMainButton>
      <StyledMainButton onClick={() => router.push("/symptoms")}>
        <a>증상으로 찾을래요</a>
      </StyledMainButton>
    </div>
  );
};

export default Main;
