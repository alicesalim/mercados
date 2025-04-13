import React, { useState, useEffect } from "react";
import { ref, onValue } from "firebase/database";
import database from "./firebase";
import Cadastro from "./pages/Cadastro";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [empresas, setEmpresas] = useState([]);

  useEffect(() => {
    const empresasRef = ref(database, "empresas");
    onValue(empresasRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const empresasList = Object.entries(data).map(([id, empresa]) => ({
          id,
          ...empresa
        }));
        setEmpresas(empresasList);
      } else {
        setEmpresas([]);
      }
    });
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Sistema de Cadastro de Empresas</h1>
      
      <div className="row">
        <div className="col-md-6">
          <Cadastro />
        </div>
        
        <div className="col-md-6">
          <h2>Empresas Cadastradas</h2>
          {empresas.length === 0 ? (
            <p>Nenhuma empresa cadastrada ainda.</p>
          ) : (
            <div className="list-group">
              {empresas.map((empresa) => (
                <div key={empresa.id} className="list-group-item">
                  <h5 className="mb-1">{empresa.nome}</h5>
                  <p className="mb-1">
                    <strong>Endereço:</strong> {empresa.endereco}<br />
                    <strong>Telefone:</strong> {empresa.telefone}<br />
                    <strong>Email:</strong> {empresa.email}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
