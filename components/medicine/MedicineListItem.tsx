import type { NextPage } from "next";
import Link from "next/link";
import { Imedicine, ImedicineInformation } from "../../interfaces/medicine";
import Image from "next/image";

const MedicineListItem: NextPage<Imedicine> = ({ medicine }) => {
  const itemKey = medicine.itemImage.substring(
    medicine.itemImage.lastIndexOf("/") + 1
  );
  return (
    <>
      <li key={medicine.itemName}>
        <Link
          href={{
            pathname: "/medicine/[information]",
            query: { medicine: JSON.stringify(medicine) },
          }}
          as={`/medicine/${medicine.itemName}`}
        >
          <p>
            <span>
              <Image
                src={`https://nedrug.mfds.go.kr/pbp/cmn/itemImageDownload/${itemKey}`}
                alt={medicine.itemName}
                width={100}
                height={100}
              />
            </span>
            {medicine.itemName}
          </p>
        </Link>
      </li>
    </>
  );
};

export default MedicineListItem;
