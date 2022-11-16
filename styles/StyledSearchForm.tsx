import styled from "styled-components";

interface Itoggle {
  adr?: boolean;
  subSymptom?: boolean;
}

const StyledSearch = styled.div`
  padding-top: 120px;

  background-color: #fff;

  display: flex;
  flex-direction: column;

  padding-left: 10px;
  padding-right: 10px;

  .pageTitle {
    margin-left: 10px;
    font-size: 20px;
  }

  form {
    display: flex;
    margin-top: 10px;

    margin-bottom: 20px;

    .searchBar {
      width: 90%;
      height: 32px;
      font-size: 15px;
      border: 0;
      border-radius: 10px;
      outline: none;
      margin-left: 10px;
      margin-right: 10px;
      background-color: #dddddd;
      padding-left: 10px;
    }

    .submitIcon {
      margin-left: 5px;
      border: 0;
      background-color: #fff;
      cursor: pointer;
    }
    padding-bottom: 15px;
    border-bottom: 1.5px solid;
  }
`;

export const StyledSymptomForm = styled(StyledSearch)`
  form {
    flex-direction: column;
    gap: 15px;

    .adr {
      display: flex;
    }
    button {
      width: 50px;
    }
    .submit {
      margin: 0 auto;
      width: 100px;
      height: 40px;
    }

    p {
      margin-left: 10px;
    }
  }
`;

export const StyledSubSymptomArea = styled.div`
  .subSymptom {
    margin-top: 10px;
    display: ${(props: Itoggle) => (props.subSymptom ? "none" : "block")};
  }
`;

export const StyledAdrArea = styled.div`
  display: ${(props: Itoggle) => (props.adr ? "none" : "block")};

  .medicineField {
    display: flex;
    align-items: center;

    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 10px;

    button {
      margin-left: 10px;
      height: 30px;
    }
  }

  .adrSearchArea {
    display: flex;
    margin-top: 10px;
  }
`;

export default StyledSearch;
