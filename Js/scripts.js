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

    $(".image").hover(function(){
      $(this).animate({opacity: "0.4"});
    } ,);
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
