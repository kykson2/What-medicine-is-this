import type { NextPage } from "next";
import Image from "next/image";

interface ImedicineInformation {
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

interface ImedicineList {
  medicineList: ImedicineInformation[];
}

const MedicineList: NextPage<ImedicineList> = ({ medicineList }) => {
  return (
    <section>
      <ul>
        {medicineList ? (
          medicineList.map((item) => {
            return (
              <li key={item.itemName}>
                {item.itemImage && (
                  <p>
                    {item.itemName}
                    <span>
                      <Image
                        src={item.itemImage}
                        alt={item.itemName}
                        width={100}
                        height={100}
                      />
                    </span>
                  </p>
                )}
              </li>
            );
          })
        ) : (
          <p>검색 결과가 없습니다.</p>
        )}
      </ul>
    </section>
  );
};

export default MedicineList;
