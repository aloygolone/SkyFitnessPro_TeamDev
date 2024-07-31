import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { UserDataProvider } from "./context/UserDataProvider.tsx";
import App from "./App.tsx";
import { CourseProvider } from "./context/CoursesProvider.tsx";
import { UserCoursesProvider } from "./context/UserCoursesProvider.tsx";

const app = document.getElementById("root")!;

ReactDOM.createRoot(app).render(
  <BrowserRouter>
    <React.StrictMode>
      <CourseProvider>
        <UserDataProvider>
          <UserCoursesProvider>
            <App />
          </UserCoursesProvider>
        </UserDataProvider>
      </CourseProvider>
    </React.StrictMode>
  </BrowserRouter>,
);
