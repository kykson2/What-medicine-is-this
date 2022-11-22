import styled from "styled-components";

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 20px;
  background-color: #d4d4d4;
  h3 {
    font-size: 40px;
    margin-bottom: 10px;
  }

  .footer-distributed {
    width: 800px;
    display: flex;
    justify-content: space-between;
  }

  .link {
    display: flex;
    margin-top: 20px;
    gap: 10px;
  }
  padding-bottom: 40px;
`;

export default StyledFooter;
