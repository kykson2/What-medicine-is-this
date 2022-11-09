import type { NextPage } from "next";
import { useRouter } from "next/router";
import logoIcon from "../../icon/medicine_icon.svg";
import Image from "next/image";
import Link from "next/link";
import StyledNavigation from "../../styles/StyledNavigation";

const NavigationBar: NextPage = () => {
  return (
    <StyledNavigation>
      <Link href={{ pathname: "/" }}>
        <a>
          <Image src={logoIcon} alt="Logo" />
          <title>e약은 뭐예요</title>
        </a>
      </Link>
    </StyledNavigation>
  );
};

export default NavigationBar;
