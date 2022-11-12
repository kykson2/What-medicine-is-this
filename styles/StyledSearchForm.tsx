import styled from "styled-components";

const StyledSearchForm = styled.div`
  margin-x: auto;
  padding-top: 120px;

  background-color: #fff;

  display: flex;
  flex-direction: column;

  padding-left: 10px;
  padding-right: 10px;

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

export default StyledSearchForm;
