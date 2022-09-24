import type { NextPage } from "next";
import { useRouter } from "next/router";
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
  console.log(query);
  return <div>{query.useMethodQesitm.replace(regex, "")}</div>;
};

export default Information;
