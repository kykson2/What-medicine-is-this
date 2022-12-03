import styled from "styled-components";
import StyledButton from "../button/StyledButton";

const StyledFooter = styled.footer`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  border-top: 1px solid #ddd;

  padding-top: 60px;
  background-color: #d4d4d4;

  .footer-distributed {
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 40px;

    .footer-left {
      h3 {
        font-size: 40px;
        margin-bottom: 10px;
        text-align: center;
      }

      p {
        text-align: center;
      }
    }

    .footer-right {
      display: flex;
      flex-direction: column;
      float: left;

      form {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 15px;

        .email {
          max-width: 400px;
          min-width: 200px;
          height: 30px;
          width: 100%;
          border: 0;
          border-radius: 5px;

          padding-left: 10px;
        }

        textarea {
          height: 150px;
          width: 100%;
          max-width: 400px;

          border: 0;
          border-radius: 5px;

          padding-top: 10px;
          padding-left: 10px;

          resize: none;
        }
        p {
          max-width: 400px;
          width: 100%;
          margin-bottom: 15px;
        }
      }
    }
    @media screen and (min-width: 900px) {
      flex-direction: row;
      justify-content: space-evenly;

      .footer-right {
        width: 350px;
      }
    }
  }

  .link {
    display: flex;
    margin-top: 40px;
    gap: 15px;
  }
  padding-bottom: 40px;

  @media screen and (max-width: 420px) {
    max-width: 420px;
    width: 100vh;
  }
`;

export const StyledFooterButton = styled(StyledButton)`
  width: 100px;
  background-color: #aaa;

  &:hover {
    background-color: #999;
  }
`;

export default StyledFooter;
