import DesktopHeader from "./desktopHeader";
import MobileHeader from "./mobileHeader";
import CheckMobileHook480 from "../../components/checkMobile";
export default function WebHeader(props) {
  const isMobile = CheckMobileHook480();
  return isMobile ? (
    <MobileHeader reff={props.reff} brandingref={props.brandingref} />
  ) : (
    <DesktopHeader reff={props.reff} brandingref={props.brandingref} />
  );
}
