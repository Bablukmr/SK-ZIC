import React from "react";
import MobileHeader from "./appMobileHeader";
<<<<<<< HEAD

export default function AppHeader(props) {

  const { count } = props;
  return  <MobileHeader count={count} />;
=======
import DesktopHeader from "./appdesktopHeader";
export default function AppHeader(props) {
  const { count, mobile } = props;
  return mobile ? (
    <MobileHeader count={count} />
  ) : (
    <DesktopHeader count={count} />
  );
>>>>>>> origin/main
}
