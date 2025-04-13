import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cadastro from "./pages/Cadastro";
import EmpresasList from "./pages/EmpresasList";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="container mt-5">
          <Routes>
            <Route path="/" element={
              <div>
                <h1 className="mb-4">Bem-vindo ao Sistema de Cadastro de Empresas</h1>
                <p>Selecione uma opção no menu acima para começar.</p>
              </div>
            } />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/empresas" element={<EmpresasList />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
