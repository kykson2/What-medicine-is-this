import { IsearchProps, IapiType } from "../../interfaces/medicine";

const GetMedicineList = async ({
  data,
  setMedicineList,
}: IsearchProps): Promise<void> => {
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
};

export default GetMedicineList;
