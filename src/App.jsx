import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Xshop from "./pages/Xshop";
import Xblog from "./pages/Xblog";

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Xshop />
      <Xblog/>
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
        {/* Другие вложенные маршруты */}
      </Route>
    </Routes>
  );
};

export default App;