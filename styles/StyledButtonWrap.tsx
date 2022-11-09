import styled from "styled-components";

const StyledButtonWrap = styled.div`
  box-sizing: border-box;
  display: flex;
  max-width: 700px;
  align-items: center;
  justify-content: center;
  margin: auto;
  gap: 50px;

  button {
    width: 300px;
    height: 300px;

    box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    border: 0;
    border-radius: 30px;

    font-size: 30px;
    font-weight: semi-bold;
    color: #fff;

    cursor: pointer;

    transform: scale(1);
    transition: 0.5s;

    &:hover {
      transform: scale(1.02);
      transition: 0.5s;
    }

    &:first-child {
      background-color: #3ecf52;

      &:hover {
        background-color: #1d8c2c;
      }
    }

    &:last-child {
      background-color: #219fed;

      &:hover {
        background-color: #376cbf;
      }
    }
  }
`;

export default StyledButtonWrap;
