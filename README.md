🌱 ONG ECOalizar

Projeto de uma página web para a ONG ECOalizar, desenvolvido com HTML, CSS e JavaScript.

📌 Sobre o projeto

A aplicação apresenta a ONG, seus projetos e ações ambientais, além de permitir o cadastro de pessoas interessadas em participar ou realizar doações.

O projeto possui múltiplas páginas e recursos interativos.

✨ Funcionalidades
Página inicial da ONG
Página de projetos
Formulário de cadastro
Página de confirmação de cadastro
Validação dos campos do formulário
Tema claro e escuro
Salvamento do tema escolhido no localStorage
Navegação entre as páginas
Layout responsivo
Interações utilizando JavaScript
Build e otimização utilizando Vite
🛠️ Tecnologias utilizadas
HTML5
CSS3
JavaScript (ES6)
Bootstrap
SweetAlert2
LocalStorage
Vite
Git
GitHub
GitHub Actions
📂 Estrutura do projeto
ONG ECOalizar/
│
├── .github/
│   └── workflows/
│       └── deploy.yml
│
├── dist/
│   ├── assets/
│   ├── index.html
│   ├── cadastro.html
│   ├── projetos.html
│   └── inscriçãoconfirmada.html
│
├── js/
│   ├── storage.js
│   └── tema.js
│
├── app.js
├── cadastro.html
├── index.html
├── inscriçãoconfirmada.html
├── projetos.html
├── styleatividade.css
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
📄 Páginas
🏠 Início

Apresentação da ONG e informações sobre sua atuação.

🌱 Projetos

Apresentação dos projetos e ações ambientais da organização.

📝 Cadastro

Formulário para cadastro de interessados em participar da ONG ou realizar doações.

✅ Inscrição confirmada

Página exibida após o envio do formulário.

💻 JavaScript

O JavaScript é organizado utilizando ES6 Modules.

app.js — funcionalidades e interações principais.
js/tema.js — controle do tema claro/escuro.
js/storage.js — armazenamento e recuperação da preferência de tema utilizando localStorage.
📦 Vite

O projeto utiliza o Vite para realizar o build da aplicação.

Instalar dependências
npm install
Executar o projeto
npm run dev
Gerar a build
npm run build
Visualizar a build
npm run preview

A versão de produção é gerada na pasta dist/.

🚀 Deploy

O projeto utiliza GitHub Actions para automatizar o processo de deploy.

O workflow está localizado em:

.github/workflows/deploy.yml
🔗 Repositório

GitHub - ONG ECOaliza
