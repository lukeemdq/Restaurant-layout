var swiper = new Swiper(".mySwiper", {
        // Configuração Padrão (Mobile First)
        slidesPerView: 1, 
        spaceBetween: 20, // Espaçamento entre os slides no mobile

        // Configuração Responsiva (Breakpoints)
        breakpoints: {
            // A partir de 640px (sm)
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            // A partir de 1024px (lg)
            1024: {
                slidesPerView: 3,
                spaceBetween: 30, // Espaçamento entre 3 colunas no desktop
            },
        },
        
        // Ativar Paginação (pontinhos)
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        
        // Ativar Navegação (setas)
        
    });