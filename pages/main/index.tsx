import type { NextPage } from "next";

import { useRouter } from "next/router";
import StyledButtonWrap from "../../styles/StyledButtonWrap";
import StyledMain from "../../styles/StyledMain";

const Main: NextPage = () => {
  const router = useRouter();
  return (
    <StyledMain>
      <span>어떻게 찾으실래요?</span>
      <StyledButtonWrap>
        <button onClick={() => router.push("/search")}>
          <a>이름을 검색해서 찾을래요</a>
        </button>
        <button onClick={() => router.push("/symptoms")}>
          <a>아픈 증상으로 찾을래요</a>
        </button>
      </StyledButtonWrap>
    </StyledMain>
  );
};

export default Main;
