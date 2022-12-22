import type { NextPage } from "next";
import Link from "next/link";
import { Imedicine } from "../../interfaces/medicine";
import Image from "next/image";
import removeIcon from "../../icon/remove_icon.svg";
import StyledMedicineListItem from "../../styles/list/StyledMedicineListItem";
import StyledListItemInfo from "../../styles/list/StyledListItemInfo";

const MedicineListItem: NextPage<Imedicine> = ({ medicine }) => {
  const itemKey =
    medicine.itemImage && medicine.itemImage.substring(medicine.itemImage.lastIndexOf("/") + 1);

  return (
    <div>
      <StyledMedicineListItem key={medicine.itemName}>
        <Link
          href={{
            pathname: "/medicine/[information]",
            query: { medicine: JSON.stringify(medicine) },
          }}
          as={`/medicine/${medicine.itemName.substring(medicine.itemName.lastIndexOf("%") + 1)}`}
        >
          <StyledListItemInfo>
            <div className="medicineImage">
              {itemKey ? (
                <img
                  src={`https://nedrug.mfds.go.kr/pbp/cmn/itemImageDownload/${itemKey}`}
                  alt={medicine.itemName}
                  width={100}
                  height={100}
                ></img>
              ) : (
                <Image src={removeIcon} alt={medicine.itemName} width={100} height={100}></Image>
              )}
            </div>

            <div className="medicineName">
              <span>{medicine.itemName}</span>
              <p>
                {medicine.useMethodQesitm.replace(
                  /<(\/)?([a-zA-Z]*)(\s[a-zA-Z]*=[^>]*)?(\s)*(\/)?>/gi,
                  ""
                )}
              </p>
            </div>
          </StyledListItemInfo>
        </Link>
      </StyledMedicineListItem>
    </div>
  );
};

export default MedicineListItem;
