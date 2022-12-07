import { createSlice } from "@reduxjs/toolkit";

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
      state.push(...action.payload);
    },

    reset: (state: ImedicineInformation[]) => {
      state.splice(0);
    },
  },
});

export const { searchMedicineList, reset } = medicineSlice.actions;
export default medicineSlice.reducer;
