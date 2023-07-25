import React from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Home from "./Home/Home.js";
import Projects from "./Projects/Projects.js";
import Music from "./Music/Music.js";
import Art from "./Art/Art.js";

const Components = () => {
  return (
    <Router>
      <Routes>
        <Route path="/nat" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/music" element={<Music />} />
        <Route path="/art" element={<Art />} />
        <Route path="*" element={<Navigate to="/nat" replace />} />
      </Routes>
    </Router>
  );
};


/*
 <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </Router>
    */
/*
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

<Router>
      <Routes>
        <Route path="/auth" element={<AuthModule />} />
        <Route path="/register" element={<AuthRegister />} />
        <Route path="/login" element={<AuthLogin />} />
        <Route path="/events" element={<Home />} />
        <Route path="/events/:locationChoice" element={<Event/>} />
        <Route path="*" element={<Navigate to="/auth" replace />} />
      </Routes>
    </Router>
*/

export default Components;

