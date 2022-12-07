import styled from "styled-components";

const StyledMedicineDetail = styled.main`
  padding-top: 120px;

  max-width: 420px;
  width: 100vh;
  min-height: 600px;
  font-size: 20px;

  margin: 0 auto;
  line-height: 1.2em;

  background-color: #fff;
  .medicineImage {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;

    img {
      border-radius: 30px;
    }
  }

  h2 {
    font-size: 28px;
    margin-top: 20px;
  }

  h4 {
    font-size: 24px;
  }

  p {
    margin-top: 4px;
  }

  .description {
    padding: 0 20px;
    padding-bottom: 20px;

    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  button {
    margin-top: 30px;
    margin-bottom: 30px;
  }

  @media screen and (min-width: 900px) {
    max-width: 520px;
    line-height: 1.4em;
  }
`;

export default StyledMedicineDetail;
