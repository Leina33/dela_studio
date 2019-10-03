$(document).ready(function(){
    $("h3").click(function(){
      $(".p").toggle();
    });
    $("h4").click(function(){
        $(".q").toggle();
    });
    $("h5").click(function(){
        $(".k").toggle();
    });

    // $(".image").hover(function(){
    //   $(this).animate({opacity: "0.4"});
    // } ,);
    $(".txt1").hide()
    $(".hover").hover(function(){
      $(this).find(".txt1").toggle();
    });
    $(".txt2").hide()
    $(".hover2").hover(function(){
      $(this).find(".txt2").toggle();
    });
    $("txt3").hide()
    $(".hover3").hover(function(){
      $(this).find(".txt3").toggle();
    });
    $(".txt4").hide()
    $(".hover4").hover(function(){
      $(this).find("txt4").toggle();
    });
    $(".txt5").hide()
    $(".hover5").hover(function(){
      $(this).find("txt5").toggle();
    });
    $(".txt6").hide()
    $(".hover6").hover(function(){
      $(this).find("txt6").toggle();
    });
    $(".txt7").hide()
    $(".hover7").hover(function(){
      $(this).find(".txt7").toggle();
    });
  });
  $(document).ready(function(){
    $("form").submit(function(event){
      var name = $("#name").val();
      var email = $("#email").val();
      var message = $("#message").val();
      event.preventDefault();
      if ( name && email != '')
      {
        alert("Thank you " + name +  "thank you for reaching us");
      }
    });
  });
