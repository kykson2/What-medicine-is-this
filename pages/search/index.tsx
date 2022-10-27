import type { NextPage } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import GetMedicineList from "../../components/medicine/GetMedicineList";
import MedicineList from "../medicine/MedicineList";

import { useDispatch, useSelector } from "react-redux";
import { ImedicineInformation } from "../../interfaces/medicine";
import { RootState } from "../../store/store";

interface formProps {
  searchValue: string;
}

const SearchMedicine: NextPage = () => {
  const dispatch = useDispatch();

  const [medicineList, setMedicineList] = useState<ImedicineInformation[]>([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      searchValue: "",
    },
  });

  if (medicineList.length === 0) {
    // const query = useSelector((state: RootState) => state.medicineList);
    // console.log(query);
    // setMedicineList(query);
    // query.map((item: ImedicineInformation) => {
    //   return setMedicineList((medicineList) => [...medicineList, item]);
    // });
  }

  return (
    <div>
      약을 검색합니다.
      <form
        onSubmit={handleSubmit((data: formProps) => {
          GetMedicineList({ data, setMedicineList, dispatch });
        })}
      >
        <input {...register("searchValue", { required: true })} />
        <input type="submit" />
        {errors.searchValue?.type === "required" && (
          <p>검색할 약을 입력해주세요.</p>
        )}
      </form>
      <MedicineList medicineList={medicineList} />
      <div>
        <Link href={{ pathname: "/" }}>
          <a>처음 화면으로 갈래요</a>
        </Link>
      </div>
    </div>
  );
};

export default SearchMedicine;
