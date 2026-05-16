import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/LoginRegister/Login";
import Registration from "./components/LoginRegister/Registration";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BlogList from "./components/Blog/BlogList";


const App = () => {
  const [view, setView] = useState('login'); // Can be 'login' or 'register'
  const [viewType, setviewType] = useState("grid")

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Router>
        <Header setView={setView} viewType={viewType} setviewType={setviewType} />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/view" element={<BlogList />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
