import React from "react";
import { Route, Routes } from "react-router-dom";

import { LoginScreen, SignUpScreen } from "./screens";

export const Router = () => {
  return (
    <Routes>
      <Route path="/djfkjfkjd" element={<LoginScreen />} />
      <Route path="/" element={<SignUpScreen />} />
      <Route path="*" element={<LoginScreen />} />
    </Routes>
  );
};
