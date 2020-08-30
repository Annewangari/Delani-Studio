$(document).ready(function () {
  $("#development-image").click(function () {
    $("#development-image").hide("1000");
    $(".development").show("1500");
  });
  $(".development").click(function () {
    $(".development").hide("1500");
    $("#development-image").show("1500");
  });

  $("#design-pic").click(function () {
    $("#design-pic").hide("1000");
    $(".design-a").show("1500");
  });
  $(".design-a").click(function () {
    $(".design-a").hide("1500");
    $("#design-pic").show("1500");
  });

  $("#product-image").click(function () {
    $("#product-image").hide("1000");
    $(".product").show("1500");
  });
  $(".product").click(function () {
    $(".product").hide("1500");
    $("#product-image").show("1500");
  });

  for (let i = 1; i < 9; i++) {
    $(".nad" + i).mouseover(function () {
      $(".project" + i).show();
    });
    $(".nad" + i).mouseout(function () {
      $(".project" + i).hide();
    });
  }
});

function contact(form) {
  var name = document.forms["form2"]["name"].value;
  var email = document.forms["form2"]["email"].value;
  var message = document.forms["form2"]["message"].value;
  alert(
    "Hey, " +
      name +
      "," +
      " We have received your message. Thank you for reaching out to us. "
  );
}
