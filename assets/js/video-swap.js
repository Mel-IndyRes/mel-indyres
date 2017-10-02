
function toggleActiveTeaser(elementToActivate, videoSrc){

    var elemId = elementToActivate.getAttribute('id');

    // check if already active
    if($(elementToActivate).parent().hasClass('active')){
        return;
    }

    //remove active classes from other teasers
    $('.portfolio-teasers>.portfolio-teaser').removeClass("active");

    // add active class to container
    $(elementToActivate).parent().addClass('active');

    // remove active copy
    $('.portfolio-copy>p').removeClass("active");

    // swap in corresponding active copy
    $("p[data-parent=" +elemId+ "]").addClass('active');

    document.getElementById('portfolio-video-view-frame').src = videoSrc;
}

$('#portfolio_img_1').click(function(){
    toggleActiveTeaser(this, 'https://player.vimeo.com/video/232596435');
});

$('#portfolio_img_2').click(function(){
    toggleActiveTeaser(this, 'https://player.vimeo.com/video/235760486');

});

$('#portfolio_img_3').click(function(){
    toggleActiveTeaser(this, 'https://player.vimeo.com/video/235757444');

});
