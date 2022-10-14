import type { NextPage } from "next";
import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import GetMedicineList from "../../components/medicine/GetMedicineList";
import MedicineList from "../medicine/MedicineList";

interface formProps {
  mainSymptom: string;
}

interface medicineInformation {
  entpName: string;
  itemName: string;
  efcyQesitm: string;
  useMethodQesitm: string;
  atpnWarnQesitm: string;
  atpnQesitm: string;
  intrcQesitm: string;
  seQesitm: string;
  depositMethodQesitm: string;
  itemImage: string;
}

const MySymptoms: NextPage = () => {
  const [medicineList, setMedicineList] = useState<medicineInformation[]>([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      mainSymptom: "",
      subSymptom: "",
      ADR: "",
    },
  });

  return (
    <div>
      <h3>증상으로 찾습니다.</h3>
      <form
        onSubmit={handleSubmit((data: formProps) => {
          GetMedicineList({ data, setMedicineList });
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
        <div>부작용이 있는 약이 있으신가요?</div>
        <input {...register("ADR")} />
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
