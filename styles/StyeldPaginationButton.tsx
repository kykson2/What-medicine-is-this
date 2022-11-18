import styled from "styled-components";

const StyledPaginationButton = styled.ul`
  display: flex;

  width: 200px;

  position: relative;

  justify-content: center;

  margin: 0 auto;
  margin-top: 20px;

  font-size: 20px;

  a {
    color: #849190;
  }

  .active {
    a {
      font-size: 21px;
      color: #000;
    }
  }

  button {
    position: absolute;
    width: 40px;
    padding: 0;
    top: -11px;
  }

  .left {
    position: absolute;
    left: 0;
  }

  .right {
    position: absolute;
    right: 0;
  }

  div {
    width: 88px;
    display: flex;
    gap: 10px;
  }
`;

export default StyledPaginationButton;
