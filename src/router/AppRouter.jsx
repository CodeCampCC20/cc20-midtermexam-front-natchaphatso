import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import TodoListPage from "../pages/TodoListPage";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<MainLayout />}>
          <Route index element={<LoginPage />} />
          <Route path={"register"} element={<RegisterPage />} />
          <Route path={"todolists"} element={<TodoListPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
