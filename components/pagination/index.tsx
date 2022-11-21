import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import { ImedicineInformation, ImedicineList } from "../../interfaces/medicine";
import StyledPaginationButton from "../../styles/StyeldPaginationButton";
import StyledMedicineList from "../../styles/StyledMedicineList";
import MedicineListItem from "../medicine/MedicineListItem";
import leftArrow from "../../icon/left_arrow_icon.svg";
import rightArrow from "../../icon/right_arrow_icon.svg";
import Image from "next/image";
import StyledButton from "../../styles/StyledButton";

const Pagination: NextPage<ImedicineList> = ({ medicineList }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postsPerPage, setPostsPerPage] = useState<number>(0);
  const [pageArray, setPageArray] = useState<number[]>([]);
  const [lastPage, setLastPage] = useState<number>(1);
  const [pageNumber, setPageNumber] = useState<number>(0);

  // 총 페이지 수
  useEffect(() => {
    if (medicineList) {
      setPostsPerPage(Math.ceil(medicineList.length / 10));
    }
  }, [medicineList]);

  // 페이지는 5개씩 보여줌
  useEffect(() => {
    setPageArray(
      Array(5)
        .fill(0)
        .map((_, i) => i + 1 + pageNumber * 5)
    );
  }, [postsPerPage, pageNumber]);

  const paginationBtn = pageArray.map((item: number) => (
    <>
      {postsPerPage >= item && (
        <li
          key={item}
          className={"paginationBtn " + (currentPage === item ? "active" : "")}
        >
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
      )}
    </>
  ));

  return (
    <>
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
        <StyledPaginationButton>
          {pageNumber !== 0 && (
            <StyledButton
              className="left"
              type="button"
              onClick={() => setPageNumber(pageNumber - 1)}
            >
              <Image
                src={leftArrow}
                alt="leftArrow"
                width={"25px"}
                height={"25px"}
              ></Image>
            </StyledButton>
          )}
          <div>{paginationBtn}</div>

          {pageNumber * 5 + 5 < postsPerPage && (
            <StyledButton
              className="right"
              type="button"
              onClick={() => setPageNumber(pageNumber + 1)}
            >
              <Image
                src={rightArrow}
                alt="rightArrow"
                width={"25px"}
                height={"25px"}
              ></Image>
            </StyledButton>
          )}
        </StyledPaginationButton>
      )}
    </>
  );
};

export default Pagination;
