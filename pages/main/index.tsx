import type { NextPage } from "next";

import { useRouter } from "next/router";
import StyledMainButtonWrap from "../../styles/main/StyledMainButtonWrap";
import StyledMain from "../../styles/main/StyledMain";
import { StyledNameButton, StyledSymptomButton } from "../../styles/button/StyledMainButton";

const Main: NextPage = () => {
  const router = useRouter();
  return (
    <StyledMain>
      <StyledMainButtonWrap>
        <span>어떻게 찾으실래요?</span>
        <div>
          <StyledNameButton onClick={() => router.push("/search")}>
            <p>이름을 검색해서 찾을래요</p>
          </StyledNameButton>
          <StyledSymptomButton onClick={() => router.push("/symptoms")}>
            <p>아픈 증상으로 찾을래요</p>
          </StyledSymptomButton>
        </div>
      </StyledMainButtonWrap>
    </StyledMain>
  );
};

export default Main;
