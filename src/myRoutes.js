import { Route, Routes } from "react-router-dom";
import AdminSignIn from "./auth/adminLogin";
import UserLayout from "./users/layout/userLayout";
import AdminLayout from "./admin/layout/layoutAdmin";
import AppLayout from "./app/layout/appLayout";
import NotFound from "./components/notFound";
import { useDispatch } from "react-redux";
import { changeDarkMode } from "./store/action.js";
import { useEffect } from "react";

export default function MyRoutes() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      dispatch(changeDarkMode(true));
    } else {
      dispatch(changeDarkMode(false));
    }
  }, []);

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
