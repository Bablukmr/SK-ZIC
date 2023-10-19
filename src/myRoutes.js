import { Route, Routes } from "react-router-dom";
import AdminSignIn from "./auth/adminLogin";
import UserLayout from "./users/layout/userLayout";
import AdminLayout from "./admin/layout/layoutAdmin";
import AppLayout from "./app/layout/appLayout";
import NotFound from "./components/notFound";


export default function MyRoutes() {
    return (
        <Routes>
            <Route path="/*" element={<UserLayout />}>
                <Route path="*" element={<NotFound />} />
            </Route>
            <Route path="admin-signin" element={<AdminSignIn />} />
            <Route path="admin/*" element={<AdminLayout />}>
                <Route path="*" element={<NotFound />} />
            </Route>
            <Route path="app/*" element={<AppLayout />}>
                <Route path="*" element={<NotFound />} />
            </Route>

            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}
