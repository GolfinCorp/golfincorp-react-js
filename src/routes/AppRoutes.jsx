import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/organisms/Layout";
import Home from "../views/home/Home";
const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default AppRoutes;
