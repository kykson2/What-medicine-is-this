import type { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import GetMedicineList from "../../components/medicine/GetMedicineList";
import MedicineList from "../medicine/MedicineList";

interface formProps {
  searchValue: string;
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

const SearchMedicine: NextPage = () => {
  const [medicineList, setMedicineList] = useState<medicineInformation[]>([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      searchValue: "",
    },
  });

  return (
    <div>
      약을 검색합니다.
      <form
        onSubmit={handleSubmit((data: formProps) => {
          GetMedicineList({ data, setMedicineList });
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
