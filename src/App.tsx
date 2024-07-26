/* import './App.css' */

import { Route, Routes } from "react-router-dom";
import { appRoutes } from "./lib/appRoutes";
import MainPage from "./pages/MainPage/MainPage";
import CoursePage from "./pages/CoursePage/CoursePage";
import UserProfilePage from "./pages/UserProfile/UserProfilePage";

import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import WorkoutVideoPage from "./pages/WorkoutVideoPage/WorkoutVideoPage";

export default function App() {
  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route path={appRoutes.USER_PROFILE} element={<UserProfilePage />} />
        <Route path={appRoutes.WORKOUT_VIDEO} element={<WorkoutVideoPage />} />
      </Route>
      <Route path={appRoutes.MAIN} element={<MainPage />} />
      <Route path={appRoutes.COURSE} element={<CoursePage />} />
    </Routes>
  );
}
