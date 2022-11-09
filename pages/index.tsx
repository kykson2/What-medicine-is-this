import type { NextPage } from "next";
import StyledHome from "../styles/StyledHome";
import Main from "./main";

const Home: NextPage = () => {
  return (
    <StyledHome>
      <Main></Main>
    </StyledHome>
  );
};

export default Home;
