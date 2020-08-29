$(document).ready(function () {
    $("#development-image").click(function () {
        $("#development-image").slideDown('1500').hide('1000');
        $(".development").show('1500');
    });
    $(".development").click(function () {
        $(".development").slideUp('1500');
        $("#development-image").slideDown('1500');
    });
});
$(document).ready(function () {
    $("#design-pic").click(function () {
        $("#design-pic").slideDown('1500').hide('1000');
        $(".design-a").show('1500');
    });
    $(".design-a").click(function () {
        $(".design-a").slideUp('1500');
        $("#design-pic").slideDown('1500');
    });
});
$(document).ready(function(){
    $("#product-image").click(function(){
      $("#product-image").slideDown('1500').hide('1000');
      $(".product").show('1500');
    });
    $(".product").click(function(){
      $(".product").slideUp('1500');
      $("#product-image").slideDown('1500');
    });
  });