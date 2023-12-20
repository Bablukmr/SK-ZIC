import React from "react";
import MobileHeader from "./appMobileHeader";
import DesktopHeader from "./appdesktopHeader";
export default function AppHeader(props) {
  const { count, mobile } = props;
  return mobile ? (
    <MobileHeader count={count} />
  ) : (
    <DesktopHeader count={count} />
  );
}
