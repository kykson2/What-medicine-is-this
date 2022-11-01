import { createSlice } from "@reduxjs/toolkit";
import { ImedicineInformation } from "../../interfaces/medicine";

interface IpayLoad {
  payload: ImedicineInformation;
  type: string;
}

const initialState: ImedicineInformation = {
  entpName: "",
  itemName: "",
  efcyQesitm: "",
  useMethodQesitm: "",
  atpnWarnQesitm: "",
  atpnQesitm: "",
  intrcQesitm: "",
  seQesitm: "",
  depositMethodQesitm: "",
  itemImage: "",
};

const medicineDetailSlice = createSlice({
  name: "medicineDetail",
  initialState,
  reducers: {
    medicineDetail: (state: ImedicineInformation, action: IpayLoad) => {
      state = Object.assign(state, action.payload);
    },
  },
});

export const { medicineDetail } = medicineDetailSlice.actions;
export default medicineDetailSlice.reducer;
