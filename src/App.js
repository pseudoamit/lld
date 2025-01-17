import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cards from "./compoenents/modules/cards/Cards";
import Header from "./compoenents/common_components/Header";
import About from "./compoenents/modules/about/About";
import Team from "./compoenents/modules/team/Team";
import Login from "./compoenents/modules/login/Login";
import ProtectedRoute from "./ProtectedRoute";
import Accordion from "./compoenents/common_components/Accordion";
import Comments from "./compoenents/modules/comments/Comments";
import ImageSlider from "./compoenents/modules/image-slider/ImageSlider";
import Pagination from "./compoenents/modules/server-side-pagination/Pagination";
import LiveChat from "./compoenents/modules/live-chat/LiveChat";

const App = () => {
  const [language, setLanguage] = useState("en");

  const getSelectedLanguage = (ln) => {
    setLanguage(ln);
  };

  return (
    <div>
      <Header changeLanguage={getSelectedLanguage} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Cards />}></Route>
          <Route element={<ProtectedRoute />}>
            <Route
              path="/about"
              element={<About language={language} />}
            ></Route>
            <Route path="/team" element={<Team language={language} />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/accordion" element={<Accordion />}></Route>
            <Route path="/comments" element={<Comments />}></Route>
            <Route path="/image-slider" element={<ImageSlider />}></Route>
            <Route path="/pagination" element={<Pagination />}></Route>
            <Route path="/live-chat" element={<LiveChat />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
