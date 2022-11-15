import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import { ImedicineInformation, ImedicineList } from "../../interfaces/medicine";
import StyledPaginationButton from "../../styles/StyeldPaginationButton";
import StyledMedicineList from "../../styles/StyledMedicineList";
import MedicineListItem from "../medicine/MedicineListItem";

const Pagination: NextPage<ImedicineList> = ({ medicineList }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postsPerPage, setPostsPerPage] = useState<number>(0);
  const [pageArray, setPageArray] = useState<number[]>([]);

  // 페이지 수
  useEffect(() => {
    if (medicineList) setPostsPerPage(Math.ceil(medicineList.length / 10));
  }, [medicineList]);

  useEffect(() => {
    setPageArray(
      Array(postsPerPage)
        .fill(0)
        .map((_, i) => i + 1)
    );
  }, [postsPerPage]);

  const paginationBtn = pageArray.map((item: number) => (
    <li key={item}>
      <a
        href=""
        onClick={(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
          e.preventDefault();
          setCurrentPage(item);
          window.scrollTo(0, 0);
        }}
      >
        {item}
      </a>
    </li>
  ));

  return (
    <div>
      <StyledMedicineList>
        {medicineList && medicineList.length ? (
          medicineList
            .slice(currentPage * 10 - 10, currentPage * 10)
            .map((medicine: ImedicineInformation) => {
              return (
                <MedicineListItem key={medicine.itemSeq} medicine={medicine} />
              );
            })
        ) : (
          <p>검색 결과가 없습니다.</p>
        )}
      </StyledMedicineList>
      {medicineList && (
        <StyledPaginationButton>{paginationBtn}</StyledPaginationButton>
      )}
    </div>
  );
};

export default Pagination;
