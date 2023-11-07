import React from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Home from "./Home/Home.js";
import Resume from "./Resume/Resume.js";
import Music from "./Music/Music.js";
import Projects from "./Projects/Projects.js";

const Components = () => {
  return (
    <Router>
      <Routes>
        <Route path="/nat" element={<Home />} />
        <Route path="/cs" element={<Resume />} />
        <Route path="/music" element={<Music />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<Navigate to="/nat" replace />} />
      </Routes>
    </Router>
  );
};

export default Components;

