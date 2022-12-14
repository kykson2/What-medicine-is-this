import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import getMedicineList from "../../components/medicine/GetMedicineList";
import MedicineList from "../medicine/MedicineList";
import searchIcon from "../../icon/search_icon.svg";

import { useDispatch, useSelector } from "react-redux";
import { ImedicineList, ImedicineInformation, formProps } from "../../interfaces/medicine";
import { reset } from "../../store/medicine/medicineSlice";
import StyledSearch from "../../styles/search/StyledSearch";
import StyledSearchPage from "../../styles/search/StyledSearchPage";
import StyledError from "../../styles/StyledError";
import HeadInfo from "../../components/head/HeadInfo";

import icon from "../../icon/medicine_icon.svg";

type FormValues = {
  searchValue: string;
};

const SearchMedicine: NextPage = () => {
  const dispatch = useDispatch();
  const [medicineList, setMedicineList] = useState<ImedicineInformation[]>([]);
  const searchMedicineList = useSelector((state: ImedicineList) => state.medicineList);
  const [search, setSearch] = useState<string>("");

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
      <StyledSearch>
        <span className="pageTitle">약 이름으로 검색합니다.</span>
        <form
          onSubmit={handleSubmit((data: formProps) => {
            getMedicineList({ data, setMedicineList, dispatch });
            setSearch(data.searchValue as string);
          })}
        >
          <HeadInfo
            title={`${search} | 검색결과`}
            description={`${search} 약 이름으로 검색합니다`}
            url={`https://www.whatmedicineisthis.info/search/`}
            img={icon}
          />
          <div className="searchArea">
            <input className="searchBar" {...register("searchValue", { required: true })} />
            <button className="submitIcon" type="submit">
              <Image src={searchIcon} alt="searchIcon"></Image>
            </button>
          </div>
          <div>
            {errors.searchValue?.type === "required" && (
              <StyledError>검색할 약을 입력해주세요.</StyledError>
            )}
          </div>
        </form>
        <MedicineList medicineList={medicineList} />
        <div>
          <Link href={{ pathname: "/" }}>
            <a>처음 화면으로 갈래요</a>
          </Link>
        </div>
      </StyledSearch>
    </StyledSearchPage>
  );
};

export default SearchMedicine;
