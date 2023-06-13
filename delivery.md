delivery de cafe

uma aplicação para gerenciar um carrinho de compras de uma cafeteria fictícia, que contém as seguintes funcionalidades:

- Listagem de produtos (cafés) disponíveis para compra
- Adicionar uma quantidade específicas de itens no carrinho
- Aumentar ou remover a quantidade de itens no carrinho
- Formulário para o usuário preencher o seu endereço
- Exibir o total de itens no carrinho no Header
- Exibir o valor total da soma de itens no carrinho multiplicados pelo valor

Apesar de serem poucas funcionalidades, você vai precisar relembrar conceitos como:

- Estados
- ContextAPI
- LocalStorage
- Imutabilidade do estado
- Listas e chaves no ReactJS
- Propriedades
- Componentização
- reduce

* layout no figma
https://www.figma.com/file/cLW6gVhUJVfddE44mlt5gt/Coffee-Delivery-Copy?fuid=1214616171519596411

# paginas
vamos de novo fazer uma rota e um outlet vamos colocar o header e de outlet vao ser as paginas mutaveis.
* componentes
 - header (que vai direto para a rota)
 - tipo de produto (que vai entrar na grade da pagina. vai ser chamado direto na pagina)
 - tipo de produto carrinho (que vai ser chamado na pagina do carrinho)
* rotas
    - / home
    - / checkout
    - / success

# funcionalidade


# to do

- estrutura
* setar cores V
* importar fontes v
* fazer o styles global com styled component v
* criar paginas e integrar rotas V
* estilizar o geolocalizador v
* header v 

* home

    intro (estatico)    
        importar componentes v
        estruturar v
        estilizar V
        
    coffeeList (component)
    fazer o filter (filter estruturado, estilizado e com funcionalidades) V
    existe a coffelist que vai receber todos os coffeecards a coffeelist vai ser renderizada na home uma so vez V
    contexto para armazenar tudo do universo do coffeeCard V
    fazer o coffee card (estruturado e styles V )
    fazer componente counter v
     funcionalidade. V

* checkout

   

    
- funcionalidade
* fazer o geolocalizador v
* colocar o carrinho para incorporar um estado e modificar visualmente o estilo do carrinho adicionando o numero de itens adicionados no carrinho V
*  quando clicar no purpleshoppingcart ele tem que pegar a quantidade do counter e o valor desse cafe e mandar para a pagina checkout V
* calcular preços v
* função para resetar os estados uma vez que a compra for validada v
* pensar as restrições dos forms. V

 

- extras 

* criar rotas

* HEADER
    - arquitetura v
    - style v
    - funcionalidade v
