import type { NextPage } from "next";
import { useRouter } from "next/router";
import Image from "next/image";
import { ImedicineDetailPersist, ImedicineInformation } from "../../interfaces/medicine";
import { useDispatch, useSelector } from "react-redux";
import { medicineDetail } from "../../store/medicine/medicineDetailSlice";
import { useEffect, useState } from "react";

import drugIcon from "../../icon/drug_icon.svg";
import StyledMedicineDetail from "../../styles/detail/StyledMedicineDetail";
import StyledButton from "../../styles/button/StyledButton";
import HeadInfo from "../../components/head/HeadInfo";

import { IapiType, Imedicine } from "../../interfaces/medicine";

const Information: NextPage<Imedicine> = ({ medicine }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  // const info = medicine;

  const history: ImedicineInformation = useSelector((state: ImedicineDetailPersist) => {
    return state.medicineDetail;
  });

  // 라우터 통해서 약 정보 가져올 때
  useEffect(() => {
    if ((router.query.medicine as string) !== undefined) {
      dispatch(medicineDetail(JSON.parse(router.query.medicine as string)));
    }
  }, [dispatch, router.query.medicine]);

  const regex = /(:?<|>|p|n|\/)/g;
  const itemKey = medicine.itemImage
    ? medicine.itemImage.substring(medicine.itemImage.lastIndexOf("/") + 1)
    : "";

  return (
    <StyledMedicineDetail>
      <HeadInfo title={medicine.itemName} description={medicine.efcyQesitm.replace(regex, "")} />
      {/* 이미지 */}
      <div className="medicineImage">
        {medicine.itemImage !== "" ? (
          <img
            src={`https://nedrug.mfds.go.kr/pbp/cmn/itemImageDownload/${itemKey}`}
            alt={medicine.itemName}
            width={250}
            height={250}
          ></img>
        ) : (
          <Image src={drugIcon} alt={medicine.itemName}></Image>
        )}
      </div>
      <div className="description">
        {/* 약 이름 */}
        {medicine.itemName && <h2>{medicine.itemName}</h2>}

        {/* 복용 */}
        {medicine.useMethodQesitm && (
          <div>
            <h4>복용 방법</h4>
            <p>{medicine.useMethodQesitm.replace(regex, " ")}</p>
          </div>
        )}

        {/* 효과 */}
        {medicine.efcyQesitm && (
          <div>
            <h4>효과</h4>
            <p>{medicine.efcyQesitm.replace(regex, " ")}</p>
          </div>
        )}

        {/* 주의사항 */}
        <div>
          {medicine.intrcQesitm && (
            <>
              <h4>복용 시 주의해야할 약</h4>
              <p>{medicine.intrcQesitm.replace(regex, " ")}</p>
            </>
          )}
        </div>
        <div>
          {medicine.seQesitm && (
            <>
              <h4>복용 시 주의해야할 이상반응</h4>
              <p>{medicine.seQesitm.replace(regex, " ")}</p>
            </>
          )}
        </div>

        {/* 보관방법 */}
        {medicine.depositMethodQesitm && (
          <div>
            <h4>보관 방법</h4>
            <p>{medicine.depositMethodQesitm.replace(regex, " ")}</p>
          </div>
        )}

        <StyledButton type="button" onClick={() => router.back()}>
          뒤로가기
        </StyledButton>
      </div>
    </StyledMedicineDetail>
  );
};

export async function getServerSideProps(context: { query: { information: string } }) {
  const url = "http://apis.data.go.kr/1471000/DrbEasyDrugInfoService/getDrbEasyDrugList";

  let queryParams = "?" + encodeURIComponent("serviceKey") + "=" + process.env.NEXT_PUBLIC_API_KEY;
  queryParams += "&";

  queryParams += encodeURIComponent("itemName");
  queryParams += "=";

  queryParams += encodeURIComponent(`${context.query.information.split("(")[0]}`);
  queryParams += "&" + encodeURIComponent("type") + "=" + encodeURIComponent("json");

  const response: Response = await fetch(url + queryParams);
  const data: IapiType = await response.json();

  return {
    props: { medicine: data.body.items[0] }, // will be passed to the page component as props
  };
}

export default Information;
