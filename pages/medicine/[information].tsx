import type { NextPage } from "next";
import { useRouter } from "next/router";
import Image from "next/image";
import {
  ImedicineDetailPersist,
  ImedicineInformation,
} from "../../interfaces/medicine";
import { useDispatch, useSelector } from "react-redux";
import { medicineDetail } from "../../store/medicine/medicineDetailSlice";
import { useEffect, useState } from "react";

import drugIcon from "../../icon/drug_icon.svg";
import StyledMedicineDetail from "../../styles/StyledMedicineDetail";

const Information: NextPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const [query, setQuery] = useState<ImedicineInformation>({
    entpName: "",
    itemName: "",
    efcyQesitm: "",
    useMethodQesitm: "",
    atpnWarnQesitm: "",
    atpnQesitm: "",
    intrcQesitm: "",
    seQesitm: "",
    depositMethodQesitm: "",
    itemImage: "",
    itemSeq: "",
  });

  const history: ImedicineInformation = useSelector(
    (state: ImedicineDetailPersist) => {
      return state.medicineDetail;
    }
  );

  // 라우터 통해서 약 정보 가져올 때
  useEffect(() => {
    if ((router.query.medicine as string) !== undefined) {
      setQuery(JSON.parse(router.query.medicine as string));
      dispatch(medicineDetail(JSON.parse(router.query.medicine as string)));
    }
  }, [dispatch, router.query.medicine]);

  // 페이지 새로고침 시 리덕스에 저장된 약 정보 가져옴
  useEffect(() => {
    if ((router.query.medicine as string) === undefined) {
      setQuery(history as ImedicineInformation);
    }
  }, [dispatch, history, router.query.medicine]);

  const regex = /(:?<|>|p|n|\/)/g;
  const itemKey =
    query.itemImage &&
    query.itemImage.substring(query.itemImage.lastIndexOf("/") + 1);

  useEffect(() => {
    console.log(query.itemImage);
  }, [query.itemImage]);
  return (
    <StyledMedicineDetail>
      {/* 이미지 */}
      <div className="medicineImage">
        {query.itemImage ? (
          <Image
            src={`https://nedrug.mfds.go.kr/pbp/cmn/itemImageDownload/${itemKey}`}
            alt={query.itemName}
            width={250}
            height={250}
          ></Image>
        ) : (
          <Image src={drugIcon} alt={query.itemName}></Image>
        )}
      </div>
      <div className="description">
        {/* 약 이름 */}
        {query.itemName && <h2>{query.itemName}</h2>}

        {/* 복용 */}
        {query.useMethodQesitm && (
          <div>
            <h4>복용 방법</h4>
            <p>{query.useMethodQesitm.replace(regex, " ")}</p>
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
        </div>
        <div>
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
      </div>
    </StyledMedicineDetail>
  );
};

export default Information;
