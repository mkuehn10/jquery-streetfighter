$(function() {
    $('.ryu').mouseenter(function() {
            $('.ryu-still').hide();
            $('.ryu-throwing').hide();
            $('.ryu-cool').hide();
            $('.ryu-ready').show();
        })
        .mouseleave(function() {
            $('.ryu-ready').hide();
            $('.ryu-throwing').hide();
            $('.ryu-cool').hide();
            $('.ryu-still').show();
        })
        .mousedown(function() {
            playHadouken();
            mousePressed = true;
            $('.ryu-ready').hide();
            $('.ryu-still').hide();
            $('.ryu-cool').hide();
            $('.ryu-throwing').show();
            $('.hadouken').finish().show().animate({
                    'left': $(window).width()
                },
                750,
                function() {
                    $(this).hide();
                    $(this).css('left', '520px');
                }
            );
        })
        .mouseup(function() {
            mousePressed = false;
            console.log("In mouseup: " + mousePressed)
            $('.ryu-throwing').hide();
            $('.ryu-still').hide();
            $('.ryu-ready').hide();
            $('.ryu-ready').show();
        });
    $(document).keydown(function(key) {
        if (key.keyCode === 88) {
            $('.ryu-still').hide();
            $('.ryu-ready').hide();
            $('.ryu-throwing').hide();
            $('.ryu-cool').show();
        }
    }).keyup(function(key) {
        if (key.keyCode === 88) {
            $('.ryu-cool').hide();
            $('.ryu-ready').hide();
            $('.ryu-throwing').hide();
            if ($('.ryu:hover').length != 0 && !mousePressed) {
                $('.ryu-ready').show();
            } else if (mousePressed) {
                $('.ryu').trigger('mousedown');
            } else {
                $('.ryu-still').show();
            }
        }
    });

});
var mousePressed = false;

function playHadouken() {
    $('#hadouken-sound')[0].volume = 0.5;
    $('#hadouken-sound')[0].load();
    $('#hadouken-sound')[0].play();
}