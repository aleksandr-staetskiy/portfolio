$(document) .ready(function () {
    // $('#fullpage') .fullpage ({
    //     sectionsColor: ['#000', '#000', '#000', '#fff'],
    //     scrollingSpeed: 800,
    //     navigation: true
    // })

    // text initialization

    $('.typing').textillate();
    
});



// parallax

    $('body').parallax({
        'elements': [
            {
                'selector': '.hero__img',
                'properties': {
                    'x': {
                        'right': {
                            'initial': 90,
                            'multiplier': 0.04,
                            'unit': 'px',
                            'invert': false
                        }
                    },
                    'y': {
                        'top': {
                            'initial': 90,
                            'multiplier': 0.1,
                            'unit': 'px',
                            'invert': true
                        }
                    }
                }
            }
        ]
    });


    $(document).ready(function(){
        $('.p2').click(function(){
            $('.content-1').css('display', 'none');
            $('.content-2').css('display', 'block');
        })
      });



// =============== img trick =====================

var root = document.getElementById('portrait');

var mouse_monitor = function(e) {
   let x = e.clientX/innerWidth;
   let y = e.clientY/innerHeight;
   
   let move_x = (x>0.5) ? '-30px' : '30px';
   let move_y = (y>0.5) ? '-20px' : '20px';
   
   root.style.setProperty("--translate-x", move_x);
   root.style.setProperty("--translate-y", move_y);
}

root.addEventListener("mousemove", mouse_monitor);






   

