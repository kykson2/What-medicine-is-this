import styled from "styled-components";

const StyledMedicineList = styled.ul`
  max-width: 480px;
  width: 380px;
  min-height: 300px;
  padding: 0 10px;

  display: flex;
  flex-direction: column;
  gap: 20px;

  p {
    font-size: 20px;
  }
`;

export default StyledMedicineList;
