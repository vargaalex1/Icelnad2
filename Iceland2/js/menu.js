/* ANIMATIONS */ 
$(document).ready(function() {
    TweenMax.set(".project-preview", { width: 0 });

    var tl = new TimelineLite();

    $(document)
      .on("mouseover", ".menu-item", function(evt) {
        tl = new TimelineLite();
        tl.to($(".project-preview"), 1, {
          width: "600px",
          ease: Expo.easeInOut
        });
      })
      .on("mouseout", ".menu-item", function(evt) {
        tl = new TimelineLite();
        tl.to($(".project-preview"), 0.5, {
          width: 0,
          ease: Expo.easeInOut
        });
      });
  });


/* EACH SECTION IMAGES ANIMATIONS*/
  $('.menu-link-1').hover(function(){
      $('.project-preview').css({'background-image': 'url(/img/Iceland.png)'});
  });

  $('.menu-link-2').hover(function(){
    $('.project-preview').css({'background-image': 'url(/img/Hvitserkur.png)'});
});

$('.menu-link-3').hover(function(){
    $('.project-preview').css({'background-image': 'url(/img/south.png)'});
});

$('.menu-link-4').hover(function(){
    $('.project-preview').css({'background-image': 'url(/img/west.png)'});
});

$('.menu-link-5').hover(function(){
    $('.project-preview').css({'background-image': 'url(/img/east.png)'});
});

$('.menu-link-6').hover(function(){
    $('.project-preview').css({'background-image': 'url(/img/Hvitserkur.png)'});
});

$(window).scroll(function() {
    var scroll = $(window).scrollTop(),
      dh = $(document).height(),
      wh = $(window).height();
    scrollPercent = (scroll / (dh - wh)) * 100;
    $(".progressbar").css("height", scrollPercent + "%");
  });

