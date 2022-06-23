import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Pokemon from "./components/Pokemon";

function App() {
  return (
    <Router>
      <div className="app">
        <main>
          <Nav />
          <h1>Welcome to Our Pokemon App!</h1>
          <Routes>
            <Route path="/pokemon" element={<Pokemon/>} />
            <Route path="/" element={}  />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
