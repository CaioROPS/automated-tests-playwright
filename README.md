# Playwright
Este projeto foi desenvolvido como um desafio para demonstrar habilidades em automação de testes utilizando o Playwright.

## Índice
- [Visão Geral](#visão-geral)
- [Pré-requisitos](#pré-requisitos)
- [Como Clonar e Configurar](#como-clonar-e-configurar)
- [Como Instalar o Playwright](#como-instalar-o-playwright)
- [Executando os Testes](#executando-os-testes)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Contato](#contato)

---

## Visão Geral
Este projeto utiliza o Playwright para automatizar testes de interface e APIs, garantindo que os principais fluxos da aplicação sejam validados de forma eficaz.

---

## Pré-requisitos 
Antes de começar, certifique-se de ter as seguintes ferramentas instaladas:
- [Node.js](https://nodejs.org/) (versão 12 ou superior)
- Editor de código (recomendado: [VSCode](https://code.visualstudio.com/))
- Navegador (o Playwright já vem com os navegadores configurados)

---

## Como Clonar e Configurar 
Siga os passos abaixo para baixar e configurar o projeto:

```bash
# Clone o repositório
git clone https://github.com/CaioROPS/automated-tests-playwright.git

# Acesse o diretório do projeto
cd automated-tests-playwright

--

## Como Instalar o Playwright
Para instalar todas as dependências e o Playwright, execute:

npm install

Depois, instale os navegadores necessários com:

npx playwright install
---

## Executando os Testes
Você pode executar os testes de diferentes formas:

## 1. Executar todos os testes em modo headless (sem interface gráfica)

npx playwright test

## 2. Executar e abrir o relatório interativo dos testes

npx playwright show-report

## 3. Executar os testes com visualização (modo headed)

npx playwright test --headed

## 4. Executar testes específicos

npx playwright test nome-do-arquivo.spec.ts

## Estrutura do Projeto 
automated-tests-playwright/
├── DadosPessoais/         # Pasta com dados ou utilitários relacionados a dados pessoais
├── DadosSensiveis/        # Pasta com dados ou utilitários sensíveis
├── tests/                 # Diretório onde ficam os testes automatizados
├── .gitignore             # Arquivos e pastas ignorados pelo Git
├── LICENSE                # Licença do projeto
├── README.md              # Documentação do projeto
├── package.json           # Configurações do projeto e dependências do Node.js
├── package-lock.json      # Registro exato das versões das dependências instaladas
└── playwright.config.ts   # Arquivo de configuração principal do Playwright

##Contato 
Caso tenha dúvidas ou precise de suporte, entre em contato:

Nome: Caio Ricardo
E-mail: caio.rops99@gmail.com
GitHub: CaioROPS
