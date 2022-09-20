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
interface searchProps {
  data: { searchValue: string };
  setMedicineList: React.Dispatch<React.SetStateAction<medicineInformation[]>>;
}

interface apiType {
  header: {
    resultCode: string;
    resultMsg: string;
  };
  body: {
    items: medicineInformation[];
    numOfRows: number;
    pageNo: number;
    totalCount: number;
  };
}

const GetMedicineList = async ({
  data,
  setMedicineList,
}: searchProps): Promise<void> => {
  if (data.searchValue !== "") {
    const url =
      "http://apis.data.go.kr/1471000/DrbEasyDrugInfoService/getDrbEasyDrugList";
    let queryParams =
      "?" +
      encodeURIComponent("serviceKey") +
      "=" +
      "aVPes2FjKpPotmePmizZQZ12QohvNhjC4Pw9wfGCmNYznxFE2rRYClPTXSu7SLAfHCY%2BpEz%2B7aUJdKjgLZ6CjA%3D%3D";

    queryParams +=
      "&" +
      encodeURIComponent("itemName") +
      "=" +
      encodeURIComponent(`${data.searchValue}`);
    queryParams +=
      "&" + encodeURIComponent("type") + "=" + encodeURIComponent("json");

    const response: Response = await fetch(url + queryParams);
    const list: apiType = await response.json();

    setMedicineList(list.body.items);
  }
};

export default GetMedicineList;
