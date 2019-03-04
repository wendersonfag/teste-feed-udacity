# vis�o do projeto leitor de feeds
Neste projeto, voc� recebe um aplicativo baseado na Web que l� feeds RSS. 
O desenvolvedor original deste aplicativo claramente viu o valor em testes, 
eles j� inclu�ram Jasmine e at� come�aram a escrever sua primeira su�te de testes! Infelizmente, 
eles decidiram come�ar sua pr�pria empresa e agora temos um aplicativo com uma su�te de testes incompleta. � a� que voc� entra.

# O que � necess�rio para completar o projeto
�Fa�a o curso de testes em JavaScript
�Baixe os recursos necess�rios ao projeto.
�Analise a funcionalidade da aplica��o em seu navegador.
�Explore o HTML (./index.html), CSS (./css/style.css) e JavaScript (./js/app.js) da aplica��o para entender como ela funciona.
�Explore o arquivo de especifica��es do Jasmine, em ./jasmine/spec/feedreader.js, e analise sua documenta��o.
�Edite a vari�vel allFeeds, em ./js/app.js, para fazer o teste fornecido falhar e ver como o Jasmine visualiza essa falha em sua aplica��o.
�Retorne a vari�vel allFeeds para um estado de passagem.
�Elabore um teste que fa�a loop em cada feed no objeto allFeeds e garanta que ele tenha uma URL definida e n�o esteja vazia.
�Elabore um teste que fa�a loop em cada feed no objeto allFeeds, e garanta que ele tenha um nome definido e n�o esteja vazio.
�Elabore uma nova su�te de testes, denominada "O menu".
�Elabore um teste que garanta que o elemento de menu permane�a oculto por padr�o. Voc� precisar� analisar o HTML e o CSS para determinar como ocultaremos/mostraremos o elemento de menu.
�Elabore um teste que garanta que o menu altere a visibilidade quando algu�m clica no item de menu. Esse teste deve ter duas expectativas: o menu deve ser exibido quando algu�m clica nele e ocultado quando mais um clique � feito.
�Elabore uma su�te de testes denominada "Entradas iniciais".
�Elabore um teste que garanta que, quando a fun��o loadFeed for chamada e concluir seu trabalho, exista pelo menos um elemento .entry no cont�iner .feed.
�Elabore uma nova su�te de testes, denominada "Nova sele��o de feed".
�Elabore um teste que garanta que, quando um novo feed for carregado pela fun��o loadFeed, o conte�do realmente mude.
�Nenhum teste deve depender dos resultados de outro.
�Callbacks devem ser usados para garantir que feeds sejam carregados antes de serem testados.
�Implemente a resolu��o de erros para vari�veis n�o definidas e o acesso de array fora do limite.
�Ao terminar - todos os seus testes devem ser aprovados.

# Como visualizar o projeto 
Para visualizar o projeto basta abrir o arquivo index.html localizado na pasta raiz como o navegador de sua prefer�ncia.
