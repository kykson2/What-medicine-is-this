import { ImedicineInformation, ImedicineList } from "../../interfaces/medicine";

const filterdMedicineList = (
  medicineList: ImedicineInformation[],
  setMedicineList: React.Dispatch<React.SetStateAction<ImedicineInformation[]>>,
  symptom?: string,
  takingMedicine?: { medicine: string }[]
) => {
  //  증상으로 약 검색 시 복용 중인 약이 없을 경우
  if (takingMedicine && takingMedicine?.length === 0) {
    setMedicineList(
      medicineList &&
        medicineList.filter((item: ImedicineInformation) =>
          item.efcyQesitm.match(symptom as string)
        )
    );
  }

  // 증상으로 약 검색 시 복용중인 약이 있을 경우
  if (takingMedicine && takingMedicine?.length > 0) {
    setMedicineList(
      medicineList.filter(
        (medicine: ImedicineInformation) =>
          !takingMedicine.some(
            (v: { medicine: string }) =>
              medicine.intrcQesitm && medicine.intrcQesitm.includes(v.medicine)
          )
      )
    );
  }

  // 단순 약 검색인 경우
  if (!takingMedicine) {
    setMedicineList(medicineList);
  }
};

export default filterdMedicineList;
