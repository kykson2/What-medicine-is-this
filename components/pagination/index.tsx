import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import { ImedicineList } from "../../interfaces/medicine";
import Link from "next/link";
import Image from "next/image";

const Pagination: NextPage<ImedicineList> = ({ medicineList }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postsPerPage, setPostsPerPage] = useState<number>(0);
  const [pageArray, setPageArray] = useState<number[]>([]);

  // 페이지 수
  useEffect(() => {
    setPostsPerPage(Math.ceil(medicineList.length / 10));
  }, [medicineList.length]);

  useEffect(() => {
    setPageArray(
      Array(postsPerPage)
        .fill(0)
        .map((_, i) => i + 1)
    );
  }, [postsPerPage]);

  const paginationBtn = pageArray.map((item: number) => (
    <button key={item} onClick={() => setCurrentPage(item)}>
      {item}
    </button>
  ));

  return (
    <div>
      <div>{paginationBtn}</div>
      {medicineList ? (
        medicineList
          .slice(currentPage * 10 - 10, currentPage * 10)
          .map((item) => {
            return (
              <li key={item.itemName}>
                <Link
                  href={{
                    pathname: "/medicine/[information]",
                    query: { medicine: JSON.stringify(item) },
                  }}
                  as={`/medicine/${item.itemName}`}
                >
                  <p>
                    {item.itemName}
                    {item.itemImage && (
                      <span>
                        <Image
                          src={item.itemImage}
                          alt={item.itemName}
                          width={100}
                          height={100}
                        />
                      </span>
                    )}
                  </p>
                </Link>
              </li>
            );
          })
      ) : (
        <p>검색 결과가 없습니다.</p>
      )}
    </div>
  );
};

export default Pagination;
