import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { GenerateRecipe, Home } from "./pages";
import { NavBar } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <main className="container mt-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/generate-recipe" element={<GenerateRecipe />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
