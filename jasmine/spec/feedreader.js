
$(function() {
    
    describe('RSS Feeds', function() {
       
        it('allFeeds não definido', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* Elabore um teste que faça loop em cada feed no objeto allFeeds e 
         * garanta que ele tenha uma URL definida e não esteja vazia.
         */

        it('url não definida e a url não pode ficar null', function(){
            for(const allFeed of allFeeds){
                expect(allFeed.url).toBeDefined();
                expect(allFeed.url.length).not.toBe(0);
                if(allFeed < allFeeds){
                    break;
                }
            }
        })

      


        /* Elabore um teste que faça loop em cada feed no objeto allFeeds, 
         * e garanta que ele tenha um nome definido e não esteja vazio.
         */
        it('name não definido e a name não pode ficar null', function(){
            for(const allFeed of allFeeds){
                expect(allFeed.name).toBeDefined();
                expect(allFeed.name.length).not.toBe(0);
                if(allFeed < allFeeds){
                    break;
                }
            }
        });

    });


    /* Elabore uma nova suíte de testes, denominada "O menu". */
    describe('O menu',function(){
        let Body;
        let Menu;
        beforeEach(function(){
            Body = $('body');
            Menu = $('.menu-icon-link');
        });
         /* Elabore um teste que garanta que o elemento de menu permaneça oculto por padrão. 
          * Você precisará analisar o HTML e o CSS para determinar como 
          * ocultaremos/mostraremos o elemento de menu.
         */
        it('verifica se o menu esta oculto', function () {
            expect(Body.hasClass('menu-hidden')).toBeTruthy();
        });

         /* Elabore um teste que garanta que o menu altere a visibilidade quando alguém clica no item de menu.
          * Esse teste deve ter duas expectativas: o menu deve ser exibido quando alguém clica nele e ocultado 
          * quando mais um clique é feito.
          */
        it('verifica se o menu foi clicado', function(){
            Menu.click();
            expect(Body.hasClass('menu-hidden')).toBe(false);
            
            Menu.click();
            expect(Body.hasClass('menu-hidden')).toBe(true);
        });
    })
       

    /* Elabore uma suíte de testes denominada "Entradas iniciais"*/
    describe('Initial Entries', function(){
        /* Elabore um teste que garanta que, quando a função loadFeed for chamada e concluir seu trabalho, 
         * exista pelo menos um elemento .entry no contêiner .feed.
         */
        beforeEach(function(done){
            loadFeed(0,function(){
                done();
            });
            
        });
        it('deve ter entrada de  elemento no .feed container', function(){
            expect($('.entry').length).not.toBe(0);
        });



    });
        

    /* Elabore uma nova suíte de testes, denominada "Nova seleção de feed".*/
    describe('New Feed Selection', function(){

        /* Elabore um teste que garanta que, 
         * quando um novo feed for carregado pela função loadFeed, 
         * o conteúdo realmente mude.
         */

        beforeEach(function(done){
            loadFeed(0, function(){
                
                feedAtual = $('.feed').html();
                loadFeed(1, done);
            });
        });

         it('Novo conteudo', function(){
            expect($('.feed').html()).not.toBe(feedAtual);
         });
    });
        
}());
