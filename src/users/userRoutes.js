import { Route, Routes } from "react-router-dom";
import UserSignIn from "./pages/signin";
import LandingPage from "./pages/landingPage";
import NotFound from "../components/notFound";
import SignUp from "./pages/signup";
// import QrDetail from "./pages/qrDetail";

export default function UserRoutes() {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="signin" element={<UserSignIn />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}
