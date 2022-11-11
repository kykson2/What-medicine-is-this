import styled from "styled-components";

const StyledMedicineList = styled.section`
  width: 430px;
  padding-top: 120px;

  display: flex;
  flex-direction: column;

  .pageTitle {
    font-size: 20px;
  }

  form {
    display: flex;
    margin-top: 10px;
    margin-bottom: 20px;

    .searchBar {
      width: 300px;
      height: 32px;
      font-size: 15px;
      border: 0;
      border-radius: 10px;
      outline: none;
      padding-left: 10px;
      background-color: #dddddd;
    }

    .submitButton {
      margin-left: 5px;
      border: 0;
      background-color: #fff;
      cursor: pointer;
    }
  }
`;

export default StyledMedicineList;
