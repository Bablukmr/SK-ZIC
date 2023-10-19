import { Route, Routes } from "react-router-dom";
import GenerateQr from "./pages/generateQr";
import ManageUsers from "./pages/manageUser";
import UserDetail from "./pages/userDetail";
import Dashboard from "./pages/dashboard";
import NotFound from "../components/notFound";
import AdminChat from "./pages/adminChat";
export default function AdminRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="generate-qr" element={<GenerateQr />} />
            <Route path="manage-users" element={<ManageUsers />} />
            <Route path="user-detail" element={<UserDetail />} />
            <Route path="admin-chat" element={<AdminChat />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}
