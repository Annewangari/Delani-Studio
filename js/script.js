$(document).ready(function () {
    $("#design-pic").click(function () {
        $(".design-a").hide(1500).toggle();
        $("design-pic").slideUp();

    });
    $(".design-a").click(function () {
        $("#design-pic").slideDown();
        $(".design-a").hide();
    })
    $("#development-image").click(function () {
        $(".developlement").hide(1500).toggle();
        $("#development-image").slideUp();
    });
    $(".developlement").click(function () {
        $("#development-image").slideDown();
        $(".developlement").hide();
    })
})
