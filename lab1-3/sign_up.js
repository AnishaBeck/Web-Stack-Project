$(document).ready(function(){
  // set initially button state hidden
  $("#reg").hide();
  // use keyup event on email field
  //^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$
  $("#email").keyup(function(){
      if(validateEmail()){
          // if the email is validated
          // set input email border green
          $("#email").css("border","4px solid green");
          // and set label 
      //    $("#email_error_message").html("<p class='text-success'>E-mail Validated</p>");
      }else{
          // if the email is not validated
          // set border red
          
          $("#email").css("border","4px solid red");
      //    $("#email_error_message").html("<p class='text-danger' >incorrect email</p>");
      
      }
      buttonState();
  });

  $("#fname").keyup(function(){
      if(validatename()){
          // if the email is validated
          // set input email border green
          $("#fname").css("border","4px solid green");
          // and set label 
       //   $("#fname_error_message").html("<p class='text-success'>Name Validated</p>");
      }else{
          // if the email is not validated
          // set border red
          $("#fname").css("border","4px solid red");
      //    $("#fname_error_message").html("<p class='text-danger'>incorrect Name</p>");
      }
      buttonState();
  });
  $("#uname").keyup(function(){
      if(validatename2()){
          // if the email is validated
          // set input email border green
          $("#uname").css("border","4px solid green");
          // and set label 
      //    $("#sname_error_message").html("<p class='text-success'>Name Validated</p>");
      }else{
          // if the email is not validated
          // set border red
          $("#uname").css("border","4px solid red");
       //   $("#sname_error_message").html("<p class='text-danger'>incorrect Name</p>");
      }
      buttonState();
  });
  $("#phone").keyup(function(){
      if(validatephone()){
          // if the email is validated
          // set input email border green
          $("#phone").css("border","4px solid green");
          // and set label 
      //    $("#phone_error_message").html("<p class='text-success'>phone Validated</p>");
      }else{
          // if the email is not validated
          // set border red
          $("#pno").css("border","4px solid red");
      //    $("#phone_error_message").html("<p class='text-danger'>incorrect phone no</p>");
      }
      buttonState();
  });
  $("pass").keyup(function(){
      if(validatepass()){
          // if the password is validated,set input password border green
          $("pass").css("border","4px solid green");
      
      }else{
          $("pass").css("border","4px solid red");
      }
      buttonState();
  }); 
  
});
function buttonState(){
  if(validateEmail()  && validatename() && validatename2() && validatephone()){
      // if the both email and password are validate
      // then button should show visible
      $("#reg").show();
  }else{
      // if both email and pasword are not validated
      // button state should hidden
      $("#reg").hide();
  }
}
function validateEmail(){
  // get value of input email
  var email=$("#email").val();
  // use reular expression
   var reg = /^([a-zA-Z0-9]{8,20}@(christuniversity.in))$/;
   if(reg.test(email)){
       return true;
   }else{
       return false;
   }
}

function validatename(){
  // get value of input email
  var name=$("#fname").val();
  // use reular expression
   var reg3 = /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/;
   if(reg3.test(name)){
       return true;
   }else{
       return false;
   }
}
function validatename2(){
  // get value of input email
  var name=$("#uname").val();
  // use reular expression
   var reg3 = /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/;
   if(reg3.test(name)){
       return true;
   }else{
       return false;
   }
}
function validatephone(){
  // get value of input email
  var phone=$("#phone").val();
  // use reular expression
   var reg4 = /^(?:(?:\+|0{0,2})91(\s*|[\-])?|[0]?)?([6789]\d{2}([ -]?)\d{3}([ -]?)\d{4})$/;
   if(reg4.test(phone)){
       return true;
   }else{
       return false;
   }
}