$(document).ready(function () {
    $("#slider-carousel").carouFredSel({
        responsive: true,
        width: '100%',
        circular: true,
        scroll: {
            items: 1,
            duration: 50000,
            pauOnHover: true
        },
        auto: true,
        items: {
            visible: {
                min: 1,
                max: 1
            },
            height: "variable"
        },
        pagination: {
            container: ".sliderpager",
            anchorBuilder: false
        }
    });


    $('.portfolio-carousel').carouFredSel({

        responsive:true,
        width:'100%',
        circular:true,
        prev:'#prev',
        next:'#next',
        scroll:{
            items:1,
            duration:500,
            pauseOnHover: true
        },
        auto:true,
        items:{
            visible:{
                min:1,
                max:4
            },
            height:"variable"
        }

    });


    $('.team-carousel').carouFredSel({

        responsive:true,
        width:'100%',
        circular:true,
        prev:'#team-prev',
        next:'#team-next',
        scroll:{
            items:1,
            duration:500,
            pauseOnHover: true
        },
        auto:true,
        items:{
            visible:{
                min:1,
                max:4
            },
            height:"variable"
        }

    });

    $('.testimonials-carousel').carouFredSel({

        responsive:true,
        width:'100%',
        circular:true,
        scroll:{
            items:1,
            duration:500,
            pauseOnHover: true
        },
        auto:true,
        items:{
            visible:{
                min:1,
                max:1
            },
            height:"variable"
        },
        pagination:{
            container:".testipager",
            anchorBuilder: false
        }
    });

    $("#menu").slicknav({
        label: "",
    });


    $(window).scroll(function () {
        var top = $(window).scrollTop();
        if (top >= 112){
            $("header").addClass("secondary-dark-blue-bg")
        } else if ($('header').hasClass("secondary-dark-blue-bg")){
            $('header').removeClass("secondary-dark-blue-bg")
        }
    })
});