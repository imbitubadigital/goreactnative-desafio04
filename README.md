# Desafio 4

Nesse desafio foi propostp construir uma aplicação com interface de e-commerce, onde o usuário poderá adicionar produtos ao carrinho e no final exibir o valor total do pedido.

Além disso, os dados de produtos e categorias virão de uma API com json-server.

Como desafio pessoal adicinei os botões com as respctivas funcionalidades: ( Continuar comprando e Fecha pedido).

Mediante o desafio as telas ficaram com as imagens abaixo:

![Telas](/assets/screens.png)

## Regras

- Os dados devem ser consumidos do JSON Server utilizando o arquivo server.json;
- O usuário deve poder adicionar produtos, alterar sua quantidade e removê-lo do carrinho;
- O valor do carrinho deve ser calculado pela soma dos preços x quantidades;
- A barra de categorias deve fornecer scroll horizontal para ver todas categorias;
- As requisições assíncronas devem utilizar Redux Saga;
- Você deve exibir sinais de loading enquanto a requisição está sendo feita na lista de produtos/categorias inicial;
