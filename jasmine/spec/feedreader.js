
$(function() {
    
    describe('RSS Feeds', function() {
       
        it('allFeeds não definido', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* faz um loop em cada feed no objeto allFeeds e 
         * garanta que ele tenha uma URL definida e não esteja vazia.
         */

        it('url não definida e a url não pode ficar null', function(){
            for(const allFeed of allFeeds){
                expect(allFeed.url).toBeDefined();
                expect(allFeed.url.length).not.toBe(0);
            }
        })

      


        /* faz um loop em cada feed no objeto allFeeds, 
         * e garanta que ele tenha um nome definido e não esteja vazio.
         */
        it('name não definido e a name não pode ficar null', function(){
            for(const allFeed of allFeeds){
                expect(allFeed.name).toBeDefined();
                expect(allFeed.name.length).not.toBe(0);
            }
        });

    });


    /* teste suíte "o menu" para verificaçao do mesmo*/
    describe('O menu',function(){
        let Body;
        let Menu;
        beforeEach(function(){
            Body = $('body');
            Menu = $('.menu-icon-link');
        });

         /*O teste que garanta que o elemento de menu permaneça oculto por padrão.     
          */
        it('verifica se o menu esta oculto', function () {
            expect(Body.hasClass('menu-hidden')).toBeTruthy();
        });

         /* garanta que o menu altere a visibilidade quando alguém clica no item de menu.
          * o menu deve ser exibido quando alguém clicando uma vez nele 
          * e ocultado quando clicado a segunda vez.
          */
        it('verifica se o menu foi clicado', function(){
            Menu.click();
            expect(Body.hasClass('menu-hidden')).toBe(false);
            
            Menu.click();
            expect(Body.hasClass('menu-hidden')).toBe(true);
        });
    })
       

    /* teste suíte "Entradas iniciais" */
    describe('Entradas iniciais', function(){
        //carrega o feed
        beforeEach(function(done){
            loadFeed(0,function(){
                done();
            });
            
        });

        /* garanta que quando a função loadFeed for chamada e concluir seu trabalho, 
         * exista pelo menos um elemento .entry no contêiner .feed.
         */
        it('deve ter entrada de  elemento no .feed container', function(){
            expect($('.feed .entry').length).not.toBe(0);
        });



    });
        

    /* testes suíte "Nova seleção de feed".*/
    describe('Nova seleção de feed', function(){
  
        beforeEach(function(done){
            //carrega o primeiro feed
            loadFeed(0, function(){
               //salva o feed atual na varaiavel feedAtual 
                feedAtual = $('.feed').html();
                //carrega o segundo feed
                loadFeed(1, done);
            });
        });
         /*verifica para o novo feed nao ser igual ao feed da variavel feedAtual,
         * para alterar que o conteúdo seja realmente alterado. 
         */   
         it('Novo conteudo', function(){
            expect($('.feed').html()).not.toBe(feedAtual);
         });
    });
        
}());
