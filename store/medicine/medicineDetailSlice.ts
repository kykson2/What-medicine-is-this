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
      state.entpName = action.payload.entpName;
      state.itemName = action.payload.itemName;
      state.useMethodQesitm = action.payload.useMethodQesitm;
      state.efcyQesitm = action.payload.efcyQesitm;
      state.atpnWarnQesitm = action.payload.atpnWarnQesitm;
      state.atpnQesitm = action.payload.atpnQesitm;
      state.intrcQesitm = action.payload.intrcQesitm;
      state.seQesitm = action.payload.seQesitm;
      state.depositMethodQesitm = action.payload.depositMethodQesitm;
      state.depositMethodQesitm = action.payload.depositMethodQesitm;
      state.itemImage = action.payload.itemImage;
    },
  },
});

export const { medicineDetail } = medicineDetailSlice.actions;
export default medicineDetailSlice.reducer;
