import React from "react"; 
import "./App.css"; 
import { BrowserRouter as Router, Routes, Route } 
    from "react-router-dom"; 
import Main from "./components/main"; 
import DeleteProfile from "./components/deleteProfile";

function App() {
  return (
    <Routes> 
      <Route path="/deleteProfile" element={<DeleteProfile />}/> 
      <Route path="/" element={<Main/>}/> 
    </Routes> 
  );
}

export default App;