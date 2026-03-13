import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Header from "./components/Header";

import Xshop from "./pages/Xshop";
import Xblog from "./pages/Xblog";
import Team from "./pages/Team";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer/>
    </div>
  );
};


export default App;