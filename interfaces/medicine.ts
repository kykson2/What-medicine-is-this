import { AppDispatch } from "../store/store";

export interface ImedicineInformation {
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

export interface ImedicineDetailPersist {
  medicineDetail: ImedicineInformation;
}

export interface ImedicineList {
  medicineList: ImedicineInformation[];
}

export interface IsearchProps {
  data: {
    searchValue?: string;
    mainSymptom?: string;
    subSymptom?: string;
    ADR?: string;
  };
  setMedicineList: React.Dispatch<React.SetStateAction<ImedicineInformation[]>>;
  dispatch: AppDispatch;
}

export interface IapiType {
  header: {
    resultCode: string;
    resultMsg: string;
  };
  body: {
    items: ImedicineInformation[];
    numOfRows: number;
    pageNo: number;
    totalCount: number;
  };
}

export interface formProps {
  searchValue?: string;
  mainSymptom?: string;
  ADR?: string;
}
