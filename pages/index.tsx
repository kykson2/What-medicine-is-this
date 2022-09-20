import type { NextPage } from "next";
import Nav from "./nav";
import Main from "./main";

const Home: NextPage = () => {
  return (
    <div>
      <Nav></Nav>
      <Main></Main>
    </div>
  );
};

export default Home;
