import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/organisms/Layout";
import Home from "../views/home/Home";
import Auth from "../views/auth/Auth";
const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Auth />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default AppRoutes;
