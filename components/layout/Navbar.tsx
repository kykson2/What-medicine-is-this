import type { NextPage } from "next";
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
          <p>e약은 뭐예요</p>
        </a>
      </Link>
    </StyledNavigation>
  );
};

export default NavigationBar;
