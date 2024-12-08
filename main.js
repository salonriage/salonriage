'use strict';

{
    $(function(){
        $('.header__btn').on('click', function(){
            $('.nav').toggleClass('active');
        });

        $('.nav__btn, .nav__item a').on('click', function(){
            $('.nav').removeClass('active');
        });
    });

    // mainvisual js
    $(function(){
        $(".slideshow-fade li").css({"position":"relative","overflow":"hidden"});
        $(".slideshow-fade li").hide().css({"position":"absolute","top":0,"left":0});
        $(".slideshow-fade li:first").addClass("fade").show();
        setInterval(function(){
          var $active = $(".slideshow-fade li.fade");
          var $next = $active.next("li").length?$active.next("li"):$(".slideshow-fade li:first");
          $active.fadeOut(2500).removeClass("fade");
          $next.fadeIn(2500).addClass("fade");
        },3500);
      });

    // information js
    $(function () {
        // ウィンドウをスクロールしたら…
        $(window).scroll(function () {
            // ウィンドウの高さを取得
            const wHeight = $(window).height();
            // スクロールした量を取得
            const wScroll = $(window).scrollTop();
                // それぞれのinformationScrollerクラスに対して…
                $(".informationScroller").each(function () {
                    // それぞれのblockクラスのウィンドウからの高さを取得
                    const bPosition = $(this).offset().top;
                    // スクロールした量が要素の高さを上回ったら
                    // その数値にウィンドウの高さを引き、最後に200pxを足す
                if (wScroll > bPosition - wHeight + 200) {
                        $(".scroller").addClass("fadeInAnime_menu");
                }
            });
        });
    });
    
    // concept js
    $(function () {
        // ウィンドウをスクロールしたら…
        $(window).scroll(function () {
            // ウィンドウの高さを取得
            const wHeight = $(window).height();
            // スクロールした量を取得
            const wScroll = $(window).scrollTop();
                // それぞれのconceptクラスに対して…
                $(".concept").each(function () {
                    // それぞれのblockクラスのウィンドウからの高さを取得
                    const bPosition = $(this).offset().top;
                    // スクロールした量が要素の高さを上回ったら
                    // その数値にウィンドウの高さを引き、最後に200pxを足す
                if (wScroll > bPosition - wHeight + 200) {
                        $(".concept__txt").addClass("fadeInAnime2s");
                }
            });
        });
    });

    // reason js
    $(function () {
        // ウィンドウをスクロールしたら…
        $(window).scroll(function () {
            // ウィンドウの高さを取得
            const wHeight = $(window).height();
            // スクロールした量を取得
            const wScroll = $(window).scrollTop();
                // それぞれのblockクラスに対して…
                $(".block").each(function () {
                    // それぞれのblockクラスのウィンドウからの高さを取得
                    const bPosition = $(this).offset().top;
                    // スクロールした量が要素の高さを上回ったら
                    // その数値にウィンドウの高さを引き、最後に200pxを足す
                if (wScroll > bPosition - wHeight + 200) {
                        $(".reason_list").addClass("fadeInAnime1s");
                }
            });
        });
    });

    // design js
    $(function () {
        // ウィンドウをスクロールしたら…
        $(window).scroll(function () {
            // ウィンドウの高さを取得
            const wHeight = $(window).height();
            // スクロールした量を取得
            const wScroll = $(window).scrollTop();
                // それぞれのdesignListクラスに対して…
                $(".designList").each(function () {
                    // それぞれのblockクラスのウィンドウからの高さを取得
                    const bPosition = $(this).offset().top;
                    // スクロールした量が要素の高さを上回ったら
                    // その数値にウィンドウの高さを引き、最後に200pxを足す
                if (wScroll > bPosition - wHeight + 200) {
                        $(".design__list").addClass("fadeInAnime_menu");
                }
            });
        });
    });

    // salon js
    $(function () {
        // ウィンドウをスクロールしたら…
        $(window).scroll(function () {
            // ウィンドウの高さを取得
            const wHeight = $(window).height();
            // スクロールした量を取得
            const wScroll = $(window).scrollTop();
                // それぞれのsalonクラスに対して…
                $(".salon").each(function () {
                    // それぞれのblockクラスのウィンドウからの高さを取得
                    const bPosition = $(this).offset().top;
                    // スクロールした量が要素の高さを上回ったら
                    // その数値にウィンドウの高さを引き、最後に200pxを足す
                if (wScroll > bPosition - wHeight + 200) {
                        $(".salon1").addClass("fadeInAnime_menu");
                        $(".salon2").addClass("fadeInAnime_menu");
                        $(".salon3").addClass("fadeInAnime_menu");
                        $(".salon4").addClass("fadeInAnime_menu");
                        $(".salonTopic2").addClass("fadeInAnime_menu");
                }
            });
        });
    });

    // menu js
    $(function () {
        // ウィンドウをスクロールしたら…
        $(window).scroll(function () {
            // ウィンドウの高さを取得
            const wHeight = $(window).height();
            // スクロールした量を取得
            const wScroll = $(window).scrollTop();
                // それぞれのmenuクラスに対して…
                $(".menu").each(function () {
                    // それぞれのblockクラスのウィンドウからの高さを取得
                    const bPosition = $(this).offset().top;
                    // スクロールした量が要素の高さを上回ったら
                    // その数値にウィンドウの高さを引き、最後に200pxを足す
                if (wScroll > bPosition - wHeight + 200) {
                        $(".menu1").addClass("fadeInAnime_menu");
                        $(".menu2").addClass("fadeInAnime_menu");
                        $(".menu3").addClass("fadeInAnime_menu");
                }
            });
        });
    });

    // contact js
    $(function () {
        // ウィンドウをスクロールしたら…
        $(window).scroll(function () {
            // ウィンドウの高さを取得
            const wHeight = $(window).height();
            // スクロールした量を取得
            const wScroll = $(window).scrollTop();
                // それぞれのmenuクラスに対して…
                $(".contactbtn").each(function () {
                    // それぞれのblockクラスのウィンドウからの高さを取得
                    const bPosition = $(this).offset().top;
                    // スクロールした量が要素の高さを上回ったら
                    // その数値にウィンドウの高さを引き、最後に200pxを足す
                if (wScroll > bPosition - wHeight + 200) {
                        $(".contactBtn_js").addClass("fadeInAnime_menu");
                }
            });
        });
    });

    // topBtn
    // $(window).on('scroll', function(){
    //     if($(this).scrollTop() > 100) {
    //         top__pc.addClass('active_topBtn');
    //     }else{
    //         top__pc.removeClass('active_topBtn');
    //     }
    //   });
    $(function() {
        // 変数にクラスを入れる
        var section = $('.top__pc');
        
        //スクロールして、スクロール量が100を超えたら表示
        $(window).on('scroll', function(){
          if($(this).scrollTop() > 400) {
            section.addClass('active_topBtn');
          }else{
            section.removeClass('active_topBtn');
          }
        });
      
        
      });

    // scroll top
    $('.top__pc').on('click', function(){
        const position = 0;
        const speed = 600;
        $('html, body').animate({
            scrollTop: position
        }, speed);
    });

}