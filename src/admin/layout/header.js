import AdminDesktopHeader from "./adminDesktopHeader";
import AdminMobileHeader from "./adminMobileHeader";
import CheckMobileHook480 from "../../components/checkMobile";

export default function AdminHeader(props) {
  const { setNavbarOpen, navbarOpen } = props;
  const isMobile = CheckMobileHook480();

  return isMobile ? (
    <AdminMobileHeader setNavbarOpen={setNavbarOpen} navbarOpen={navbarOpen} />
  ) : (
    <AdminDesktopHeader />
  );
}
