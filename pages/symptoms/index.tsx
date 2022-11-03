import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import GetMedicineList from "../../components/medicine/GetMedicineList";
import MedicineList from "../medicine/MedicineList";
import { useDispatch, useSelector } from "react-redux";

import {
  ImedicineList,
  ImedicineInformation,
  formProps,
} from "../../interfaces/medicine";
import { reset } from "../../store/medicine/medicineSlice";

const MySymptoms: NextPage = () => {
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
  }, [dispatch, medicineList.length, searchMedicineList]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      mainSymptom: "",
      subSymptom: "",
      adr: "",
    },
  });

  return (
    <div>
      <h3>증상으로 찾습니다.</h3>
      <form
        onSubmit={handleSubmit((data: formProps) => {
          GetMedicineList({ data, setMedicineList, dispatch });
        })}
      >
        <div>주요 증상을 알려주세요</div>
        <input {...register("mainSymptom", { required: true })} />
        <input type="submit" />
        {errors.mainSymptom?.type === "required" && (
          <p>주요 증상을 입력하세요</p>
        )}
        <div>다른 증상도 있으신 가요?</div>
        <input {...register("subSymptom")} />
        <div>복용 중인 약이 있으신가요?</div>
        <input {...register("adr")} />
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

export default MySymptoms;
