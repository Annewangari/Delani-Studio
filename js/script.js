$(document).ready(function(){
    $("#design-pic").click(function(){
    $(".design-a").hide(1500).toggle();
       $("design-pic").slideUp();
 
    });
    $(".design-a").click(function(){
      $("#design-pic").slideDown();
      $(".design-a").hide();
    })
})
