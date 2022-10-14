import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ImedicineInformation } from "../../interfaces/medicine";

interface IpayLoad {
  payload: ImedicineInformation[];
  type: string;
}

const initialState: ImedicineInformation[] = [];

const medicineSlice = createSlice({
  name: "medicine",
  initialState,
  reducers: {
    searchMedicineList: (state: ImedicineInformation[], action: IpayLoad) => {
      state = action.payload;
    },
  },
});

export const { searchMedicineList } = medicineSlice.actions;
export default medicineSlice.reducer;
