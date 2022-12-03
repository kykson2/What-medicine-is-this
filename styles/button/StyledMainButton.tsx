import styled from "styled-components";

const StyledMainButton = styled.button`
  width: 100%;
  height: 100%;
  max-height: 300px;
  max-width: 300px;

  border: 1px solid;
  border-radius: 30px;

  box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  border: 0;
  border-radius: 30px;

  font-size: 30px;
  font-weight: bolder;
  color: #fff;

  cursor: pointer;

  transform: scale(1);
  transition: 0.3s;

  &:hover {
    transform: scale(1.02);
    transition: 0.3s;
  }
`;

export const StyledNameButton = styled(StyledMainButton)`
  background-color: #3ecf52;

  &:hover {
    background-color: #1d8c2c;
  }
`;
export const StyledSymptomButton = styled(StyledMainButton)`
  background-color: #219fed;

  &:hover {
    background-color: #376cbf;
  }
`;

export default StyledMainButton;
