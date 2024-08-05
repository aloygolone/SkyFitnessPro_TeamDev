import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { UserDataProvider } from "./context/UserDataProvider.tsx";
import App from "./App.tsx";
import { CourseProvider } from "./context/CoursesProvider.tsx";

const app = document.getElementById("root")!;

ReactDOM.createRoot(app).render(
  <BrowserRouter>
    <React.StrictMode>
      <CourseProvider>
        <UserDataProvider>
          <App />
        </UserDataProvider>
      </CourseProvider>
    </React.StrictMode>
  </BrowserRouter>,
);
