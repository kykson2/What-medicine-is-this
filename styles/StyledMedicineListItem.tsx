import styled from "styled-components";

const StyledMedicineListItem = styled.li`
  cursor: pointer;
  img {
    min-width: 100px;
    min-height: 100px;
  }
  .medicineName {
    max-width: 270px;
    margin-left: 10px;
    span {
      font-size: 20px;
    }
    p {
      padding-top: 10px;
      color: #747474;
    }
  }
`;

export default StyledMedicineListItem;
