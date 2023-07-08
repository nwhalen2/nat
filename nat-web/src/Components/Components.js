

const Components = () => {
  return (
    <div>HELLO FROM COMPONENTS</div>
  );
};

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

