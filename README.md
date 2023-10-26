# Site escola moppe
=============================================================
# Getting started

Este projeto foi criado com o [Vite](https://vitejs.dev/) \
O Vite é um ambiente de desenvolvimento para aplicações web modernas, projetado para ser extremamente rápido e eficiente.

## Requeriments

- [Node.js](https://nodejs.org/en) \
Digite os comandos: `node -v` e `npm -v` no terminal e verifique se há o retorno da versão de ambos

- [Git](https://github.com/git-for-windows/git/releases/download/v2.42.0.windows.2/Git-2.42.0.2-64-bit.exe)
Digite o comando: `git -v` no terminal e verifique se há retorno da versão do git instalada

Em ambas as instalações, caso haja algum erro com o comando, será preciso adicionar a pasta de instalação nas variáveis de ambiente do sistema operacional.

## Commands

Caso não tenha o projeto baixado na máquina: \
Abra o prompt na pasta que deseja baixar o projeto e digite:\
`git clone -b development https://github.com/timoppe/moppe_site.git`\
O git irá clonar o projeto de desenvolvimento na pasta selecionada\
Acesse a pasta criada pelo git `cd <nome da pasta>` (raiz do projeto).

## `npm install`

Após realizar o clone do projeto, faça a instalação dos pacotes do Node.js\
O Node irá baixar as dependências necessárias que foram utilizadas no desenvolvimento do projeto.
Após finalizar, verifique se a pasta `node_modules` foi criada.

## `npm run dev`

Após realizar a instalação das dependências, inicie a aplicação\
O comando abre a aplicação React JS em modo de desenvolvedor\
Abra [http://localhost:5173](http://localhost:5173)\
Normalmente a aplicação roda na porta 5173, porém se houver outro serviço na mesma porta, o sistema redireciona para outra porta automaticamente.

O Node.js compila o código a cada alteração salva\
A página no browser atualiza automaticamente após as alterações\
Os erros de compilação são mostrados no console.

Não fechar o console, ele mantém a aplicação rodando.

## Deployment on the WEB server

Para implantar as alterações, siga os passos: \
1 - Verifique no console se não há erros de compilação, o VSCode também mostra em vermelho os erros nos arquivos.\
2 - Suba as alterações para a branch development com os comandos:
- `git add .`
- `git commit -m "Descrição do commit"`
- `git push origin development`
3 - Após seguir esses comandos, verifique se as atualizações foram feitas no GitHub.\
4 - Realize o merge para a branch master\
- `git checkout master`
- `git merge development`\
5 - Volte ao GitHub e verifique se a opção de pull request apareceu e aprove o pull request.\
6 - Aguarde alguns minutos para a aplicação ser atualizada.

## Recommendations

- Nunca alterar diretamente a branch master sem conhecimento, nela se encontra a aplicação em produção\
- Sempre suba as alterações realizadas na branch de desenvolvimento `development`\
- Se desejar criar outra branch para testes, digite o comando indicando o nome da branch `git checkout -b <nome da branch>`\
- Realize a adição das alterações na stage `git add .`\
- Faça o commit das alterações `git commit -m "Mensagem no commit"`\
- Suba as alterações para a branch de testes `git push origin <nome da branch>`\
- Descrever nos commmits as alterações feitas para documentar o que foi feito\
- Para correção de bugs ou erros, criar uma nova issue, caso hajam problemas ou bugs relacionados, criar um milestone.

## Learn more

Para saber mais sobre o React JS acesse a [documentação sobre criação do aplicativo React](https://facebook.github.io/create-react-app/docs/getting-started)

Para aprender o React, confira a [documentação do React](https://reactjs.org/)
