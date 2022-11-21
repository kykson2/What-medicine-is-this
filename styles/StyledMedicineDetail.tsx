import styled from "styled-components";

const StyledMedicineDetail = styled.main`
  padding-top: 120px;

  width: 420px;
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
    font-size: 26px;
  }

  h4 {
    font-size: 23px;
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
`;

export default StyledMedicineDetail;
