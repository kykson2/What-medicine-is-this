import styled from "styled-components";

const StyledMainButtonWrap = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  padding: 0 10px;

  align-items: center;
  justify-content: center;
  gap: 50px;

  div {
    display: flex;
    width: 100%;
    height: 50%;
    gap: 30px;
    justify-content: center;
  }

  @media screen and (max-width: 600px) {
    div {
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
`;

export default StyledMainButtonWrap;
