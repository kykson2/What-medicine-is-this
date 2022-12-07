import styled from "styled-components";

const StyledMedicineListItem = styled.li`
  cursor: pointer;
  img {
    min-width: 100px;
    min-height: 100px;

    border-radius: 7%;
  }
  .medicineName {
    max-width: 270px;
    margin-left: 10px;

    white-space: normal;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;

    span {
      font-size: 20px;
    }
    p {
      padding-top: 10px;
      color: #747474;

      white-space: normal;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }
  padding-bottom: 20px;
  border-bottom: 2px solid #d4d4d4;
`;

export default StyledMedicineListItem;
