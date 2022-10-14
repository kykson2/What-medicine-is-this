import type { NextPage } from "next";
import { useRouter } from "next/router";
import Image from "next/image";

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
  const query: medicineInformation = JSON.parse(
    router.query.medicine as string
  );

  const regex = /(:?<|>|p|n|\/)/g;
  console.log(query.itemImage);
  return (
    <section>
      {/* 이미지 */}
      <Image
        src={query.itemImage}
        alt={query.itemName}
        width={100}
        height={100}
      ></Image>
      {/* 약 이름 */}
      <h2>{query.itemName}</h2>

      {/* 복용 */}
      <div>
        <h4>복용 방법</h4>
        <span>{query.useMethodQesitm.replace(regex, " ")}</span>
      </div>

      {/* 효과 */}
      <div>
        <h4>효과</h4>
        <p>{query.efcyQesitm.replace(regex, " ")}</p>
      </div>

      {/* 주의사항 */}
      <div>
        <h4>복용 시 주의해야할 약</h4>
        <p>{query.intrcQesitm.replace(regex, " ")}</p>
        <h4>복용 시 주의해야할 이상반응</h4>
        <p>{query.seQesitm.replace(regex, " ")}</p>
      </div>

      {/* 보관방법 */}
      <div>
        <h4>보관 방법</h4>
        <p>{query.depositMethodQesitm.replace(regex, " ")}</p>
      </div>

      <button type="button" onClick={() => router.back()}>
        뒤로가기
      </button>
    </section>
  );
};

export default Information;
