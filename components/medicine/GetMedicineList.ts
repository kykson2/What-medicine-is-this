import filterdMedicineList from "./filterMedicineList";

import { reset } from "../../store/medicine/medicineSlice";

import { IsearchProps, IapiType } from "../../interfaces/medicine";

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

  filterdMedicineList(
    list.body.items,
    setMedicineList,
    data.subSymptom,
    takingMedicine
  );
};

export default GetMedicineList;
