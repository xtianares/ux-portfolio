$(function() {
    var wWidth = $(window).width();
    var footH = $("#footer-wrap").css("height");
    $("body").css( "padding-bottom", footH );
    $(window).resize(function() {
        var footH = $("#footer-wrap").css("height")
        if( wWidth != $(window).width() ) {
            $("body").css( "padding-bottom", footH );
        }
    });
});
