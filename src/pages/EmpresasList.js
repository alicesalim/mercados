import React, { useState, useEffect } from 'react';
import { ref, onValue } from 'firebase/database';
import database from '../firebase';

const EmpresasList = () => {
  const [empresas, setEmpresas] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const empresasRef = ref(database, 'empresas');
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

  const filteredEmpresas = empresas.filter(empresa =>
    empresa.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
    empresa.endereco.toLowerCase().includes(searchTerm.toLowerCase()) ||
    empresa.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <div className="row mb-4">
        <div className="col">
          <h2>Empresas Cadastradas</h2>
        </div>
        <div className="col-md-4">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Buscar empresa..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <span className="input-group-text">
              <i className="bi bi-search"></i>
            </span>
          </div>
        </div>
      </div>

      {filteredEmpresas.length === 0 ? (
        <div className="alert alert-info">
          {searchTerm ? 'Nenhuma empresa encontrada com o termo de busca.' : 'Nenhuma empresa cadastrada ainda.'}
        </div>
      ) : (
        <div className="row">
          {filteredEmpresas.map((empresa) => (
            <div key={empresa.id} className="col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">{empresa.nome}</h5>
                  <div className="card-text">
                    <p><strong>Endereço:</strong> {empresa.endereco}</p>
                    <p><strong>Telefone:</strong> {empresa.telefone}</p>
                    <p><strong>Email:</strong> {empresa.email}</p>
                  </div>
                </div>
                <div className="card-footer bg-transparent">
                  <small className="text-muted">ID: {empresa.id}</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EmpresasList; 