import styled from "styled-components";

const StyledNavigation = styled.nav`
  position: fixed;

  display: flex;
  align-items: center;

  padding-left: 10px;

  width: 100%;
  height: 80px;

  background-color: #fff;

  z-index: 9999;

  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.19);

  a {
    display: flex;
    align-items: center;
  }

  p {
    color: #000;
    display: inline;
    font-size: 30px;
    font-weight: bold;
    padding-left: 10px;
  }
`;

export default StyledNavigation;
