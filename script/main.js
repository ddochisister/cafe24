$(function(){
    $(".m_menu_list_sub").hide()
    $(".m_menu_list li").hover(function(){
        $(this).find(".m_menu_list_sub").stop().slideDown()
    },function(){
        $(this).find(".m_menu_list_sub").stop().slideUp()
    })


    $(".main>li").hover(function(){
        $(this).find(".sub").stop().slideDown();
    },function(){
        $(".sub").stop().slideUp();
    })


    $(".menu_open,.m_menu_open").hide()
    $(".menu_open_click").click(function(){
        $(".menu_open").fadeIn()
    })
    $(".menu_open_closebtn").click(function(){
        $(".menu_open").fadeOut()
    })

    
    $(".m_menu_open_click").click(function(){
        $(".m_menu_open").fadeIn()
    })
    $(".m_menu_open_closebtn").click(function(){
        $(".m_menu_open").fadeOut()
    })


    $(".chart_list").slick({
        autoplay:true,
        autoplaySpeed:3000,
        arrows:false,
        dots:false,
        pauseOnHover:false,
        vertical:true
    })


    $(".content02_list").slick({
        autoplay:true,
        autoplaySpeed:3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        mobileFirst: true,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: 'unslick'
            }
        ]
    });

    $(window).on('resize', function() {
        $('.content02_list').slick('resize');
    });



    $(".visual_wrap").slick({
        autoplay:true,
        autoplaySpeed:5000,
        arrows:true,
        dots:true,
        pauseOnHover:false,
    })


    $(".content03_right_fade li").hide();
    $(".content03_right_fade li").eq(0).show();
    var n=0;
    setInterval(function(){
        $(".content03_right_fade li").eq(n).fadeOut();
        if(n==1){
            n=0;
        }else{
            n++;
        }
        $(".content03_right_fade li").eq(n).fadeIn();
    },3000)


    $(".project_section_right_list").slick({
        autoplay:true,
        autoplaySpeed:3000,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots:true,
        arrows:false,
        responsive: [
            {
                breakpoint:1024,
                        settings:{
                            slidesToShow:3,
                            slidesToScroll:1,
                        }
            },
            {
                breakpoint:515,
                settings:{
                    slidesToShow:2,
                    slidesToScroll:1
                }
            }
        ]
    })



    $(".real_review_section_list").slick({
        autoplay:true,
        autoplaySpeed:4000,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows:true,
        responsive: [
            {
                breakpoint:1024,
                        settings:{
                            slidesToShow:2,
                            slidesToScroll:1,
                        }
            },
            {
                breakpoint:515,
                settings:{
                    slidesToShow:1,
                    slidesToScroll:1
                }
            }
        ]
    })





}) //jquery









$(window).scroll(function(){
    //header
    var top=$(this).scrollTop()
    console.log("top:",top)
    if(top>10){
        $("#header").addClass("on")
    }else{
        $("#header").removeClass("on")
    }

    //content01
    if(top>100){
        $(".cont01").addClass("in")
    }else{
        $(".cont01").removeClass("in")
    }
    if(top>100){
        $(".cont02").addClass("in")
    }else{
        $(".cont02").removeClass("in")
    }
    if(top>100){
        $(".cont03").addClass("in")
    }else{
        $(".cont03").removeClass("in")
    }

    //new_item_section
    if(top>1800){
        $(".title").addClass("show")
    }else{
        $(".title").removeClass("show")
    }
    if(top>1800){
        $(".sub_title").addClass("show")
    }else{
        $(".sub_title").removeClass("show")
    }

    //video_clip_section
    if(top>2800){
        $(".tit").addClass("show")
    }else{
        $(".tit").removeClass("show")
    }
    if(top>2800){
        $(".sutit").addClass("show")
    }else{
        $(".sutit").removeClass("show")
    }

    //project_section
    if(top>4000){
        $(".pro_right").addClass("show")
    }else{
        $(".pro_right").removeClass("show")
    }
    if(top>4000){
        $(".pro_left").addClass("show")
    }else{
        $(".pro_left").removeClass("show")
    }

    //real_review_section
    if(top>4900){
        $(".r_tit").addClass("show")
    }else{
        $(".r_tit").removeClass("show")
    }
    if(top>4900){
        $(".r_sutit").addClass("show")
    }else{
        $(".r_sutit").removeClass("show")
    }
}) //window.scroll
