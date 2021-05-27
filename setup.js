$('.owl-carousel').owlCarousel({
    loop:true,   /*aciona a rolagem infinita*/
    margin:10,   /*margem entre as imagens*/
    nav:true,    /*botoes de navegação*/
    responsive:{ /*responsividade da tela*/
        0:{        /*Quantidade de pixels na tela*/
            items:1  /*Quantidade de itens exibidos na tela*/
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
