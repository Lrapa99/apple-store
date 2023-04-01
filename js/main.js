$(document).ready(function () {
 

    $("section .iphone").hide()
    $("section .ipad").hide()
    $("section .watch").hide()

  $(".category ul li").click(function () {
    $(".category ul li").removeClass("active")
    $(".category ul li img").removeClass("invert")
    $(this).addClass("active")
    $(this).children("img").addClass("invert")

    $("section .mac").hide("fast")
    $("section .iphone").hide("fast")
    $("section .ipad").hide("fast")
    $("section .watch").hide("fast")

    switch ($(this)[0].id) {

         case 'mac':
           $(".mac").show("fast")
        break;
      case 'iphone':
            $(".iphone").show("fast")
        break;
      case 'ipad':
        $(".ipad").show("fast")
        break;
         case 'watch':
        $(".watch").show("fast")
        break;
    }

  });



})