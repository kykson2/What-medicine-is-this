import type { NextPage } from "next";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { useForm, useFieldArray } from "react-hook-form";
import getMedicineList from "../../components/medicine/getMedicineList";
import MedicineList from "../medicine/MedicineList";
import { useDispatch, useSelector } from "react-redux";

import {
  ImedicineList,
  ImedicineInformation,
  formProps,
} from "../../interfaces/medicine";
import { reset } from "../../store/medicine/medicineSlice";
import StyledSearchPage from "../../styles/StyledSearchPage";
import {
  StyledAdrArea,
  StyledSubSymptomArea,
  StyledSymptomForm,
} from "../../styles/StyledSearch";
import StyledButton from "../../styles/StyledButton";
import StyledError from "../../styles/StyledError";

type FormValues = {
  mainSymptom: string;
  subSymptom: string;
  adr: string;
  subSymptomToggle: boolean;
  adrToggle: boolean;
  takingMedicine: { medicine: string }[];
};

const MySymptoms: NextPage = () => {
  const dispatch = useDispatch();
  const [medicineList, setMedicineList] = useState<ImedicineInformation[]>([]);
  const searchMedicineList = useSelector(
    (state: ImedicineList) => state.medicineList
  );

  const medicineInputRef = useRef<HTMLInputElement>(null);

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
    watch,
    control,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      mainSymptom: "",
      subSymptom: "",
      adr: "",
      subSymptomToggle: false,
      adrToggle: false,
      takingMedicine: [],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "takingMedicine",
  });

  const watchFieldArray = watch("takingMedicine");
  const controlledFields = fields.map((field, index) => {
    return {
      ...field,
      ...watchFieldArray[index],
    };
  });

  const appendHandler = () => {
    const medicineInput = medicineInputRef.current?.value;
    medicineInput && append({ medicine: medicineInput as string });
  };

  return (
    <StyledSearchPage>
      <StyledSymptomForm>
        <form
          className="symptoms"
          onSubmit={handleSubmit((data: formProps) => {
            const { takingMedicine } = getValues();
            getMedicineList({
              data,
              setMedicineList,
              dispatch,
              takingMedicine,
            });
          })}
        >
          <span className="pageTitle">증상으로 찾습니다.</span>
          <p>주요 증상을 알려주세요</p>
          <input
            className="searchBar"
            {...register("mainSymptom", { required: true })}
          />
          {errors.mainSymptom?.type === "required" && (
            <StyledError>주요 증상을 입력하세요</StyledError>
          )}

          <StyledSubSymptomArea subSymptom={!watch("subSymptomToggle")}>
            <p>
              다른 증상도 있으신 가요?{" "}
              <input
                type="checkbox"
                {...register("subSymptomToggle")}
                onClick={() => {
                  setValue("subSymptom", "");
                }}
              />
            </p>
            <input
              className="searchBar subSymptom"
              {...register("subSymptom")}
              disabled={!watch("subSymptomToggle")}
            />
          </StyledSubSymptomArea>

          <div>
            <p>
              복용 중인 약이 있으신가요?{" "}
              <input
                type="checkbox"
                {...register("adrToggle")}
                onClick={() => {
                  setValue("adr", "");
                }}
              />
            </p>
            <StyledAdrArea adr={!watch("adrToggle")}>
              {controlledFields.map((field, index) => {
                return (
                  <div
                    key={`takingMedicine.${index}.name`}
                    className="medicineField"
                  >
                    {field["medicine"]}
                    <StyledButton type="button" onClick={() => remove(index)}>
                      삭제
                    </StyledButton>
                  </div>
                );
              })}
              <div className="adrSearchArea">
                <input
                  className="searchBar adr"
                  {...register("adr")}
                  ref={medicineInputRef}
                  disabled={!watch("adrToggle")}
                />

                <StyledButton type="button" onClick={appendHandler}>
                  추가
                </StyledButton>
              </div>
            </StyledAdrArea>
          </div>
          <StyledButton type="submit" className="submit btn" value="검색">
            검색
          </StyledButton>
        </form>
        <MedicineList medicineList={medicineList} />
        <div>
          <Link href={{ pathname: "/" }}>
            <a>처음 화면으로 갈래요</a>
          </Link>
        </div>
      </StyledSymptomForm>
    </StyledSearchPage>
  );
};

export default MySymptoms;
