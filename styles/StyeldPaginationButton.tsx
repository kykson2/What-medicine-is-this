import styled from "styled-components";

const StyledPaginationButton = styled.ul`
  display: flex;

  margin-top: 20px;

  gap: 10px;
  justify-content: center;

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
`;

export default StyledPaginationButton;
