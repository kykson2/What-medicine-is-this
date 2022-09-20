import type { NextPage } from "next";
import Link from "next/link";

const index: NextPage = () => {
  return (
    <div>
      <div>
        <Link href={{ pathname: "../search" }}>
          <a>검색해서 찾을래요</a>
        </Link>
      </div>
      <div>증상으로 찾을래요</div>
    </div>
  );
};

export default index;