import { IsearchProps, IapiType } from "../../interfaces/medicine";

import { reset } from "../../store/medicine/medicineSlice";

const GetMedicineList = async ({
  data,
  setMedicineList,
  dispatch,
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

  // 검색 결과와 같은 증상을 호전시키는 약 찾기
  const regexp = new RegExp(data.subSymptom as string, "gi");
  if (data.subSymptom !== undefined) {
    setMedicineList(
      list.body.items.filter((item) => item.efcyQesitm.match(regexp))
    );
  }
  if (data.subSymptom === undefined) {
    setMedicineList(list.body.items);
  }

  if (data.ADR !== undefined) {
    setMedicineList(
      list.body.items.filter((item) => !item.intrcQesitm.match(regexp))
    );
  }
};

export default GetMedicineList;
