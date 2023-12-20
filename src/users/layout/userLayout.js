import WebHeader from "./userHeader";
import WebFooter from "./userFooter";
import UserRoutes from "../userRoutes";
import { useRef } from "react";
export default function UserLayout({ children }) {
  const reff = useRef();
  const brandingref = useRef();
  return (
    <div className="w-full bg-[redd]">
      <div className="h-[60px]">
        <WebHeader reff={reff} brandingref={brandingref} />
      </div>
      <div className="min-h-[calc(100vh-60px)]">
        <UserRoutes reff={reff} brandingref={brandingref} />
      </div>
      <div className="h-[200px]">
        <WebFooter />
      </div>
    </div>
  );
}
