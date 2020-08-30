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
$(document).ready(function () {
    $("#product-image").click(function () {
        $("#product-image").slideDown('1500').hide('1000');
        $(".product").show('1500');
    });
    $(".product").click(function () {
        $(".product").slideUp('1500');
        $("#product-image").slideDown('1500');
    });
});
$(document).ready(function () {
    $('.nad').mouseover(function () {
        $('.project').show();
    }).mouseout(function () {
        $('.project').hide();
    });
});

$(document).ready(function () {
    $('.nad2').mouseover(function () {
        $('.project2').show();
    }).mouseout(function () {
        $('.project2').hide();
    });
});

$(document).ready(function () {
    $('.nad3').mouseover(function () {
        $('.project3').show();
    }).mouseout(function () {
        $('.project3').hide();
    });
});
$(document).ready(function () {
    $('.nad4').mouseover(function () {
        $('.project4').show();
    }).mouseout(function () {
        $('.project4').hide();
    });
});

$(document).ready(function () {
    $('.nad5').mouseover(function () {
        $('.project5').show();
    }).mouseout(function () {
        $('.project5').hide();
    });
});

$(document).ready(function () {
    $('.nad6').mouseover(function () {
        $('.project6').show();
    }).mouseout(function () {
        $('.project6').hide();
    });
});
$(document).ready(function(){
    $('.nad7').mouseover(function () {
          $('.project7').show();
      }).mouseout(function () {
          $('.project7').hide();
      });
    });

  $(document).ready(function(){
    $('.nad8').mouseover(function () {
          $('.project8').show();
      }).mouseout(function () {
          $('.project8').hide();
      });
    });
    function contact(form){
        var name = document.forms["form2"]["name"].value;
            var email = document.forms["form2"]["email"].value;
            var message = document.forms["form2"]["message"].value;
            alert("Hey, " + name + "," + " We have received your message. Thank you for reaching out to us. ");
              };
              