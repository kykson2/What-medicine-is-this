import type { NextPage } from "next";

import Pagination from "../../components/pagination";

import { ImedicineList } from "../../interfaces/medicine";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";

import { searchMedicineList } from "../../store/medicine/medicineSlice";

const MedicineList: NextPage<ImedicineList> = ({ medicineList }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(searchMedicineList(medicineList));
  }, [dispatch, medicineList]);

  return (
    <section>
      <ul>
        <Pagination medicineList={medicineList} />
      </ul>
    </section>
  );
};

export default MedicineList;
