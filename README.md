# Lista de Compras

Uma aplicação simples para o meu aprendizado de Angular 4.

Um lista de compras. Suas funcionalidades estão espeficícadas logo a baixo em [Funcionalidades](https://github.com/FilipeFilpe/listaCompras#funcionalidades)

![Print um do App](https://github.com/FilipeFilpe/listaCompras/blob/master/src/app/tela1.PNG)

![Print dois do App](https://github.com/FilipeFilpe/listaCompras/blob/master/src/app/tela2.PNG)

Este projeto foi criado com o [Angular CLI](https://github.com/angular/angular-cli) versão 1.7.3.

## Funcionalidades
O sistema conta com as funções básicas de CRUD (Criar, Ler, Modificar e Exlcuir).

### Listar
Lista todas as compras do banco.
### Adicionar
Adicionar um item a lista de compras.
### Excluir
Excluir um item da lista de compras.

## Servidor de Desenvolvimento

Execute `ng server` para roda o sevidor de desenvolvimento. Navegue para `http://localhost:4200/`. A aplicação recarrega automaticamente toda vez que há uma mudança em algum arquivo.

## Serviço Json
Dentro da pasta DB executar o seguinte comando para usar o arquivo json como uma api REST `json-server --watch compras.json`.

## Code scaffolding

Execute `ng generate component component-name` para criar um novo componente. Você pode usar também `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Execute `ng build` para dar build no projeto. Os artefatos do build estão armazenado no diretório `dist/`. Use o argumento `-prod` para dar build em produção.

## Execução de testes unitários

Execute `ng test` para rodae testes unitários via [Karma](https://karma-runner.github.io).

## Execução de testes ponta a ponta

Execute `ng e2e` para rodar o testes de ponta a ponta via [Protractor](http://www.protractortest.org/).

## Ajuda adicional

Para obter mais ajuda com o Angular CLI execute `ng help` ou vá até [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
