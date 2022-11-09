import type { NextPage } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import getMedicineList from "../../components/medicine/getMedicineList";
import MedicineList from "../medicine/MedicineList";

import { useDispatch, useSelector } from "react-redux";
import {
  ImedicineList,
  ImedicineInformation,
  formProps,
} from "../../interfaces/medicine";
import { reset } from "../../store/medicine/medicineSlice";
import StyledMedicineList from "../../styles/StyledMedicineList";

type FormValues = {
  searchValue: string;
};

const SearchMedicine: NextPage = () => {
  const dispatch = useDispatch();
  const [medicineList, setMedicineList] = useState<ImedicineInformation[]>([]);
  const searchMedicineList = useSelector(
    (state: ImedicineList) => state.medicineList
  );

  // 새로고침 시  검색했던 기록이 있으면 검색결과 가져옴
  useEffect(() => {
    if (searchMedicineList.length && medicineList.length === 0) {
      dispatch(reset());
      setMedicineList(searchMedicineList);
    }
  }, [dispatch, medicineList, searchMedicineList]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      searchValue: "",
    },
  });

  return (
    <StyledMedicineList>
      약을 검색합니다.
      <form
        onSubmit={handleSubmit((data: formProps) => {
          getMedicineList({ data, setMedicineList, dispatch });
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
    </StyledMedicineList>
  );
};

export default SearchMedicine;
