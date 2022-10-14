import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";

import { ImedicineList } from "../../interfaces/medicine";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { searchMedicineList } from "../../store/medicine/medicineSlice";

const MedicineList: NextPage<ImedicineList> = ({ medicineList }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(searchMedicineList(medicineList));
  }, [dispatch, medicineList]);
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
