import { Route, Routes } from "react-router-dom";
import QrDetail from "./pages/qrDetails";
import ScanQr from "./pages/scanQr";
import NotFound from "../components/notFound";
import AppDashboard from "./pages/appDashboard";
import Webchat from "./pages/webchat";
import Promotions from "./pages/promotions";
import Profile from "./pages/profile";
import PointHistory from "./pages/pointHistory";
import UploadQR from "./pages/uploadQr";
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="" element={<AppDashboard />} />
      <Route path="scan-qr" element={<ScanQr />} />
      <Route path="qr-detail" element={<QrDetail />} />
      <Route path="chat" element={<Webchat />} />
      <Route path="promotions" element={<Promotions />} />
      <Route path="profile" element={<Profile />} />
      <Route path="point-history" element={<PointHistory />} />
      <Route path="upload-qr" element={<UploadQR />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
