jQuery(function($) {
    $("#main").css("display", "none");
    $("#main").fadeIn(1200);
    $("a.transition").click(function(event){
        event.preventDefault();
        linkLocation = this.href;
        $("#main").fadeOut(1000, redirectPage);
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

i=0;
function start(){
  if(i%2==0){
    document.getElementById('main').style.cssText = 'filter:blur(5px)';
  }
  else{
    document.getElementById('main').style.cssText = 'filter:blur(0px)';
  }
  i++;
}
  