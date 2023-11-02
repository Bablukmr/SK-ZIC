import { Route, Routes } from "react-router-dom";
import GenerateQr from "./pages/generateQr";
import ManageUsers from "./pages/manageUser";
import UserDetail from "./pages/userDetail";
import Dashboard from "./pages/dashboard";
import NotFound from "../components/notFound";
import AdminChat from "./pages/adminChat";
import DownloadQr from "./pages/downloadQr";
import ExpiredQr from "./pages/expiredQr";
import VerifyUsers from "./pages/verifyUsers";
import UnverifiedUserDetail from "./pages/unverifiedUserDetail";
import UpdateExpiredQR from "./pages/updateExpiredQR";
import UpdateUnusedQr from "./pages/updateUnusedQr";
import ManagePromotions from "./pages/managePromotions";

export default function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="generate-qr" element={<GenerateQr />} />
      <Route path="manage-users" element={<ManageUsers />} />
      <Route path="user-detail/:id" element={<UserDetail />} />
      <Route path="admin-chat" element={<AdminChat />} />
      <Route path="download-qr" element={<DownloadQr />} />
      <Route path="expired-qr" element={<ExpiredQr />} />
      <Route path="verify-users" element={<VerifyUsers />} />
      <Route path="unverified-user/:id" element={<UnverifiedUserDetail />} />
      <Route path="update-expired-qr" element={<UpdateExpiredQR />} />
      <Route path="update-unused-qr" element={<UpdateUnusedQr />} />
      <Route path="manage-promotions" element={<ManagePromotions />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
