import React, { useState } from 'react';
import { ref, push } from 'firebase/database';
import database from '../firebase';

const Cadastro = () => {
  const [empresa, setEmpresa] = useState({
    nome: '',
    endereco: '',
    telefone: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmpresa(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const empresasRef = ref(database, 'empresas');
    push(empresasRef, empresa)
      .then(() => {
        alert('Empresa cadastrada com sucesso!');
        setEmpresa({
          nome: '',
          endereco: '',
          telefone: '',
          email: ''
        });
      })
      .catch((error) => {
        console.error('Erro ao cadastrar empresa:', error);
        alert('Erro ao cadastrar empresa. Tente novamente.');
      });
  };

  return (
    <div className="container mt-5">
      <h2>Cadastro de Empresa</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="nome" className="form-label">Nome da Empresa</label>
          <input
            type="text"
            className="form-control"
            id="nome"
            name="nome"
            value={empresa.nome}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="endereco" className="form-label">Endereço</label>
          <input
            type="text"
            className="form-control"
            id="endereco"
            name="endereco"
            value={empresa.endereco}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="telefone" className="form-label">Telefone</label>
          <input
            type="tel"
            className="form-control"
            id="telefone"
            name="telefone"
            value={empresa.telefone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={empresa.email}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Cadastrar</button>
      </form>
    </div>
  );
};

export default Cadastro; 