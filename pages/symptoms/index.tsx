import type { NextPage } from "next";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { useForm, useFieldArray } from "react-hook-form";
import GetMedicineList from "../../components/medicine/GetMedicineList";
import MedicineList from "../medicine/MedicineList";
import { useDispatch, useSelector } from "react-redux";

import {
  ImedicineList,
  ImedicineInformation,
  formProps,
} from "../../interfaces/medicine";
import { reset } from "../../store/medicine/medicineSlice";

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

  const { fields, append } = useFieldArray({
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
    append({ medicine: medicineInput as string });
  };

  return (
    <div>
      <h3>증상으로 찾습니다.</h3>
      <form
        onSubmit={handleSubmit((data: formProps) => {
          const { takingMedicine } = getValues();
          GetMedicineList({ data, setMedicineList, dispatch, takingMedicine });
        })}
      >
        <div>주요 증상을 알려주세요</div>
        <input {...register("mainSymptom", { required: true })} />
        <input type="submit" />
        {errors.mainSymptom?.type === "required" && (
          <p>주요 증상을 입력하세요</p>
        )}
        <div>
          <div>다른 증상도 있으신 가요?</div>
          <input
            {...register("subSymptom")}
            disabled={!watch("subSymptomToggle")}
          />
          <input
            type="checkbox"
            {...register("subSymptomToggle")}
            onClick={() => {
              setValue("subSymptom", "");
            }}
          />
        </div>

        <div>
          <div>복용 중인 약이 있으신가요?</div>
          {controlledFields.map((field, index) => {
            return (
              <div key={`takingMedicine.${index}.name`}>
                {field["medicine"]}
              </div>
            );
          })}
          <input
            {...register("adr")}
            ref={medicineInputRef}
            disabled={!watch("adrToggle")}
          />
          <input
            type="checkbox"
            {...register("adrToggle")}
            onClick={() => {
              setValue("adr", "");
            }}
          />
          <div>
            <button type="button" onClick={appendHandler}>
              추가
            </button>
          </div>
        </div>
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
