# Todo List - Gerenciador de Tarefas

Um aplicativo web completo para gerenciamento de tarefas, com autenticação de usuários, persistência em banco de dados e funcionalidades para acompanhar o status de atividades. Ideal para manter sua rotina organizada de forma prática e intuitiva.

## ✨ Funcionalidades

- Cadastro e login de usuários com autenticação via JWT  
- Adicionar, editar e remover tarefas  
- Marcar tarefas como concluídas ou pendentes  
- Filtro de tarefas (em andamento, concluídas, atrasadas)  
- Interface amigável com design responsivo  
- Comunicação entre frontend e backend via API REST  
- Armazenamento persistente em banco de dados MongoDB Atlas  

## 📦 Estrutura do Projeto
-   todo-list/
-    ├── meu-app-web/ # Frontend em React                                                                         

-    └── backend/ # Backend em Node.js + Express

## 🚀 Como Executar o Projeto

### Pré-requisitos
- Node.js (v14 ou superior)
- npm (v6 ou superior)

### 1. Clone o repositório
```bash
git clone https://github.com/HeitorgOliveira/todo-list.git
cd todo-list
```
### 2. Instale as dependências
```bash
# Front-end
cd meu-app-web
npm install

# Back-end
cd ../backend
npm install
```

## 🚀 Inicie o projeto

### Terminal 1 – Back-end
```bash
cd meu-app-web/backend
npm start       # Servidor em http://localhost:5000
```
### Terminal 2 – Front-end
```bash
cd meu-app-web
npm start       # App em http://localhost:3000
```
