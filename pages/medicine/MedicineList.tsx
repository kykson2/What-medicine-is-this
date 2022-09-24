import type { NextPage } from "next";
import Link from "next/link";
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
                  <Link
                    href={{
                      pathname: "/medicine/[information]",
                      query: { medicine: JSON.stringify(item) },
                    }}
                    as={`/medicine/${item.itemName}`}
                  >
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
                  </Link>
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
