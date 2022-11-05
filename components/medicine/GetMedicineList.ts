import {
  IsearchProps,
  IapiType,
  ImedicineInformation,
} from "../../interfaces/medicine";

import { reset } from "../../store/medicine/medicineSlice";

const GetMedicineList = async ({
  data,
  setMedicineList,
  dispatch,
  takingMedicine,
}: IsearchProps): Promise<void> => {
  dispatch(reset());
  const url =
    "http://apis.data.go.kr/1471000/DrbEasyDrugInfoService/getDrbEasyDrugList";
  let queryParams =
    "?" +
    encodeURIComponent("serviceKey") +
    "=" +
    process.env.NEXT_PUBLIC_API_KEY;

  queryParams += "&";

  queryParams +=
    data.searchValue !== undefined
      ? encodeURIComponent("itemName")
      : data.mainSymptom !== undefined
      ? encodeURIComponent("efcyQesitm")
      : encodeURIComponent("");

  queryParams += "=";

  queryParams +=
    data.searchValue !== undefined
      ? encodeURIComponent(`${data.searchValue as string}`)
      : data.mainSymptom !== undefined
      ? encodeURIComponent(`${data.mainSymptom as string}`)
      : encodeURIComponent("");

  queryParams +=
    "&" + encodeURIComponent("type") + "=" + encodeURIComponent("json");

  queryParams +=
    "&" + encodeURIComponent("numOfRows") + "=" + encodeURIComponent("100");

  const response: Response = await fetch(url + queryParams);
  const list: IapiType = await response.json();

  // 주요 증상 외 다른 증상도 같이 호전시키는 약 찾기
  const regexp = new RegExp(data.subSymptom as string, "gi");
  const regADR = new RegExp(data.adr as string, "gi");

  // 다른 증상이 있을 경우
  if (data.subSymptom !== "") {
    // 복용중인 약이 없을 경우
    if (takingMedicine !== undefined && takingMedicine?.length === 0) {
      setMedicineList(
        list.body.items &&
          list.body.items.filter((item: ImedicineInformation) =>
            item.efcyQesitm.match(regexp)
          )
      );
    }

    // 복용 중인 약이 있을 경우
    if (takingMedicine !== undefined && takingMedicine?.length !== 0) {
      const filterdMedicineList = list.body.items.filter(
        (medicine) =>
          !takingMedicine?.some(
            (v) =>
              medicine.intrcQesitm && medicine.intrcQesitm.includes(v.medicine)
          )
      );
      setMedicineList(filterdMedicineList);
    }
  }

  if (takingMedicine !== undefined && takingMedicine?.length !== 0) {
    const filterdMedicineList = list.body.items.filter(
      (medicine) =>
        !takingMedicine?.some(
          (v) =>
            medicine.intrcQesitm && medicine.intrcQesitm.includes(v.medicine)
        )
    );
    setMedicineList(filterdMedicineList);
  }

  // 다른 증상이 없을 경우
  if (data.subSymptom === "") {
    // 복용중인 약이 없을 경우
    if (takingMedicine !== undefined && takingMedicine?.length === 0) {
      setMedicineList(list.body.items);
    }

    // 복용 중인 약이 있을 경우
    if (takingMedicine !== undefined && takingMedicine?.length !== 0) {
      const filterdMedicineList = list.body.items.filter(
        (medicine) =>
          !takingMedicine?.some(
            (v) =>
              medicine.intrcQesitm && medicine.intrcQesitm.includes(v.medicine)
          )
      );
      setMedicineList(filterdMedicineList);
    }
  }

  // 약 이름 검색 하는 경우
  if (data.searchValue !== undefined) {
    setMedicineList(list.body.items);
  }
};

export default GetMedicineList;
