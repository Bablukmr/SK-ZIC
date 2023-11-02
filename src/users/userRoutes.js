import { Route, Routes } from "react-router-dom";
import UserSignIn from "./pages/signin";
import LandingPage from "./pages/landingPage";
import NotFound from "../components/notFound";
import SignUp from "./pages/signup";
import VerifyEmail from "./pages/verifyEmail";
import ForgetPassword from "./pages/forgetPassword";
import ForgetPasswordReset from "./pages/forgetPasswordReset";

export default function UserRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="signin" element={<UserSignIn />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="verify-email/:key" element={<VerifyEmail />} />
      <Route path="forget-password" element={<ForgetPassword />} />
      <Route path="/reset/:uid/:token" element={<ForgetPasswordReset />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
