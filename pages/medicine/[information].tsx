import type { NextPage } from "next";
import { useRouter } from "next/router";
import Image from "next/image";
import { useSelector } from "react-redux";
import { ImedicineInformation } from "../../interfaces/medicine";

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
const Information: NextPage = () => {
  const router = useRouter();
  let query: medicineInformation = JSON.parse(router.query.medicine as string);

  const regex = /(:?<|>|p|n|\/)/g;
  return (
    <section>
      {/* 이미지 */}
      {query.itemImage && (
        <Image
          src={query.itemImage}
          alt={query.itemName}
          width={100}
          height={100}
        ></Image>
      )}

      {/* 약 이름 */}
      {query.itemName && <h2>{query.itemName}</h2>}

      {/* 복용 */}
      {query.useMethodQesitm && (
        <div>
          <h4>복용 방법</h4>
          <span>{query.useMethodQesitm.replace(regex, " ")}</span>
        </div>
      )}

      {/* 효과 */}
      {query.efcyQesitm && (
        <div>
          <h4>효과</h4>
          <p>{query.efcyQesitm.replace(regex, " ")}</p>
        </div>
      )}

      {/* 주의사항 */}
      <div>
        {query.intrcQesitm && (
          <>
            <h4>복용 시 주의해야할 약</h4>
            <p>{query.intrcQesitm.replace(regex, " ")}</p>
          </>
        )}
        {query.seQesitm && (
          <>
            <h4>복용 시 주의해야할 이상반응</h4>
            <p>{query.seQesitm.replace(regex, " ")}</p>
          </>
        )}
      </div>

      {/* 보관방법 */}
      {query.depositMethodQesitm && (
        <div>
          <h4>보관 방법</h4>
          <p>{query.depositMethodQesitm.replace(regex, " ")}</p>
        </div>
      )}

      <button type="button" onClick={() => router.back()}>
        뒤로가기
      </button>
    </section>
  );
};

export default Information;
