import React from "react";
import Header from "./components/Header";
import { Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import AddWine from "./components/AddWine";
import Wines from "./components/Wine/Wines";
import About from "./components/About";

function App() {
  return <React.Fragment>
    <header>
      <Header />
    </header>
    <main>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/add" element={<AddWine />} exact />
        <Route path="/wines" element={<Wines />} exact />
        <Route path="/about" element={<About />} exact />
      </Routes>
    </main>

    </React.Fragment>;
  
}

export default App;
