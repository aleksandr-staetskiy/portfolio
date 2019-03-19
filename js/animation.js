(function($) {

    'use strict';

    // variables
    var $isAnimatedSecond = $('.second .is-animated'),
        $isAnimatedSecondSingle = $('.second .is-animated__single'),
        $isAnimatedThird = $('.third .is-animated'),
        $isAnimatedThirdSingle = $('.third .is-animated__single'),
        $isAnimatedFourth = $('.fourth .is-animated'),
        $isAnimatedFourthSingle = $('.fourth .is-animated__single'),
        $isAnimatedFifth = $('.fifth .is-animated'),
        $isAnimatedFifthSingle = $('.fifth .is-animated__single');

        


    // initialize fullPage
    $('#fullpage').fullpage({

        navigation: true,
        sectionsColor: ['#000', '#000', '#000', '#fff', '#000'],
        onLeave: function(index, nextIndex, direction) {


            // first animation
            if( index == 1 && nextIndex == 2 ) {
                $isAnimatedSecond.addClass('animated fadeInUp');
                $isAnimatedSecond.eq(0).css('animation-delay', '.3s');
                $isAnimatedSecond.eq(1).css('animation-delay', '.6s');
                $isAnimatedSecond.eq(2).css('animation-delay', '.9s');
                $isAnimatedSecondSingle.addClass('animated fadeInUp').css('animation-delay', '0.9s');
            }



            // second animation
            else if( ( index == 1 || index == 2 ) && nextIndex == 3 ) {
                $isAnimatedThird.eq(0).addClass('animated fadeInLeft').css('animation-delay', '.3s');
                $isAnimatedThird.eq(1).addClass('animated fadeInRight').css('animation-delay', '.6s');
                $isAnimatedThirdSingle.addClass('animated bounceInDown').css('animation-delay', '1.2s');
            }



            // third animation
            else if( ( index == 1 || index == 2 || index == 3 ) && nextIndex == 4 ) {
                $isAnimatedFourth.addClass('animated zoomIn').css('animation-delay', '.6s');
                $isAnimatedFourthSingle.addClass('animated lightSpeedIn').css('animation-delay', '1.2s');
                $isAnimatedFourthSingle.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                    $(this).removeClass('lightSpeedIn').addClass('zoomOutDown');
                });
            }

             // forth animation
             else if( ( index == 1 || index == 2 || index == 3 || index == 4) && nextIndex == 5 ) {
                $isAnimatedFifth.eq(0).addClass('animated fadeInLeft').css('animation-delay', '.3s');
                $isAnimatedFifth.eq(1).addClass('animated fadeInRight').css('animation-delay', '.6s');
                $isAnimatedFifthSingle.addClass('animated bounceInDown').css('animation-delay', '1.2s');
            }
        }

    });

})(jQuery);
