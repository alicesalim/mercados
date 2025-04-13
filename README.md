# 🧪 MiniMercados App

Este projeto é um **teste prático para estudos de React e Firebase**, com foco no uso do **Realtime Database**. O objetivo é aprender a integrar um app React com o backend do Firebase, realizando operações de leitura, criação, edição e remoção de dados em tempo real.

---

## 📚 Tecnologias Utilizadas

- ⚛️ React (Vite ou Create React App)
- 🔥 Firebase Realtime Database
- 💅 Bootstrap 5 (opcional para estilização)
- 📦 Formik + Yup (para formulários e validação)

---

## 💡 Objetivo

Criar um pequeno sistema de cadastro de empresas do ramo de mini mercados. O sistema permite:

- ✅ Visualizar empresas cadastradas
- ➕ Adicionar novas empresas
- ✏️ Editar dados das empresas
- ❌ Remover empresas
- 📁 Sincronização em tempo real com o Firebase

---

## 🏗️ Estrutura do Banco de Dados (Firebase)

```json
{
  "empresas": {
    "behonest": {
      "nome": "Behonest",
      "lojas": 400,
      "estados": 3
    },
    "market4you": {
      "nome": "Market4You",
      "lojas": 2000,
      "estados": 5
    }
  }
}
```

---

## 🔧 Como rodar o projeto

### Pré-requisitos:

- Node.js (v18 ou superior)
- npm ou yarn
- Firebase configurado com Realtime Database habilitado

### Passos:

1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/mini-mercados-app.git
cd mini-mercados-app
```

2. Instale as dependências

```bash
npm install
```

3. Configure o Firebase

Edite o arquivo `src/firebase.js` com as suas credenciais do Firebase:

```js
const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "SEU_AUTH_DOMAIN",
  databaseURL: "SUA_DATABASE_URL",
  projectId: "SEU_PROJECT_ID",
  storageBucket: "SEU_STORAGE_BUCKET",
  messagingSenderId: "SEU_SENDER_ID",
  appId: "SEU_APP_ID"
};
```

4. Rode o projeto

```bash
npm run dev
# ou
npm start
```

Acesse: [http://localhost:3000](http://localhost:3000)

---

## ✨ Funcionalidades futuras (opcional)

- 🔐 Autenticação de usuários
- 📱 Layout responsivo com Tailwind ou Bootstrap
- 📊 Dashboard com gráficos (Chart.js ou Recharts)

---

## 👩‍💻 Desenvolvido por

Alice Antunes Salim — *para fins acadêmicos e experimentação com Firebase Realtime Database e React.*

---

## 📝 Licença

Este projeto está licenciado sob a licença MIT.
