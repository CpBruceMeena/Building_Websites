$(document).ready(function(){

  $("#validation_form").submit(function(event){
    var error_message = "";
    event.preventDefault();

    function email_checker(emailtemp){
      var regx = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,8})(.[a-z]{2,10})?$/;
      return regx.test(emailtemp);
    }

    function number_checker(number){
      var regx = /^([789][0-9]{9})/;
      return regx.test(number);
    }

    if(!email_checker($("#email1").val())){
      error_message += "Please enter a valid email address.";
    }

    if(!number_checker($("#telephone").val())){
      error_message += "<br/> Please enter a valid phone number.";
    }

    if($("#first").val() !== $("#second").val()){
      error_message += "<br/> Your password don't match."
    }

    if(error_message == ""){
      alert("form submitted successfully");
    }
    else{
      $(".error_message").html(error_message)
    }
  });

});
