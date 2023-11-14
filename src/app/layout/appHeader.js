import React from "react";
import MobileHeader from "./appMobileHeader";

export default function AppHeader(props) {

  const { count } = props;
  return  <MobileHeader count={count} />;
}
