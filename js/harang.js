$(".hover").mouseleave(
    function() {
      $(this).removeClass("hover");
    }
);

jQuery(function($) {
    $("body").css("display", "none");
    $("body").fadeIn(1200);
    $("a.transition").click(function(event){
        event.preventDefault();
        linkLocation = this.href;
        $("body").fadeOut(1000, redirectPage);
    });
    function redirectPage() {
    window.location = linkLocation;
    }
});

window.onload=function(){
  setTimeout(function(){
    scrollTo(0,0);
  },100);
}


