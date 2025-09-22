# Sistema de Votação Estudantil

Este projeto é um sistema de votação online para eleições de Grêmio Estudantil, desenvolvido com HTML, CSS, JavaScript e Google Apps Script. Os votos são registrados diretamente em uma planilha do Google Sheets.

## Funcionalidades

- Interface amigável para alunos votarem.
- Registro de nome, série e voto.
- Integração com Google Apps Script para armazenar os votos.
- Feedback visual de sucesso ou erro após o envio.
- Página de abertura com redirecionamento automático no horário da eleição.

## Estrutura do Projeto

- `index.html`: Página de abertura com redirecionamento para a votação.
- `voteaqui.html`: Página principal de votação.
- `estilos.css`: Estilos visuais aplicados às páginas.
- `votacao.js`: Lógica de envio dos votos via POST para o Apps Script.
- `LICENSE`: Licença MIT.

## Como usar

1. Publique o script no Google Apps Script como Web App:
   - Método de execução: Você mesmo.
   - Acesso: Qualquer pessoa, mesmo anônima.
   - Copie o link gerado e atualize a variável `scriptURL` no arquivo `votacao.js`.

2. Suba os arquivos em um servidor ou GitHub Pages.

3. Acesse `index.html` para iniciar o processo de votação.

## Requisitos

- Conta Google para configurar o Apps Script.
- Planilha do Google vinculada ao script.
- Navegador moderno com suporte a JavaScript.

## Autor

Escola Caetano de Campos - Projeto Grêmio Estudantil 2025
