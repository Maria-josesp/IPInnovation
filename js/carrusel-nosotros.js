const swiper = new Swiper(".diferencialSwiper", {

    loop:false,
    spaceBetween:24,

    autoplay:{
        delay:4000,
        disableOnInteraction:false,
    },

    pagination:{
        el:".swiper-pagination",
        clickable:true,
    },

    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
    },

    breakpoints:{

        0:{
            slidesPerView:1,
        },

        768:{
            slidesPerView:2,
        },

        1200:{
            slidesPerView:4,
        }
    }
});
    
