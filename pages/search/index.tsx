import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import getMedicineList from "../../components/medicine/getMedicineList";
import MedicineList from "../medicine/MedicineList";
import searchIcon from "../../icon/search_icon.svg";

import { useDispatch, useSelector } from "react-redux";
import {
  ImedicineList,
  ImedicineInformation,
  formProps,
} from "../../interfaces/medicine";
import { reset } from "../../store/medicine/medicineSlice";
import StyledSearchForm from "../../styles/StyledSearchForm";
import StyledSearchPage from "../../styles/StyledSearchPage";
import StyledError from "../../styles/StyledError";

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
    <StyledSearchPage>
      <StyledSearchForm>
        <span className="pageTitle">약 이름으로 검색합니다.</span>
        <form
          onSubmit={handleSubmit((data: formProps) => {
            getMedicineList({ data, setMedicineList, dispatch });
          })}
        >
          <input
            className="searchBar"
            {...register("searchValue", { required: true })}
          />
          <button className="submitIcon" type="submit">
            <Image src={searchIcon} alt="searchIcon"></Image>
          </button>
          {errors.searchValue?.type === "required" && (
            <StyledError>검색할 약을 입력해주세요.</StyledError>
          )}
        </form>
        <MedicineList medicineList={medicineList} />
        <div>
          <Link href={{ pathname: "/" }}>
            <a>처음 화면으로 갈래요</a>
          </Link>
        </div>
      </StyledSearchForm>
    </StyledSearchPage>
  );
};

export default SearchMedicine;
