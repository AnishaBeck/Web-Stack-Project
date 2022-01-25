(function ($) {
    'use strict';
    /*==================================================================
        [ Daterangepicker ]*/
    try {
        $('.js-datepicker').daterangepicker({
            "singleDatePicker": true,
            "showDropdowns": true,
            "autoUpdateInput": false,
            locale: {
                format: 'DD/MM/YYYY'
            },
        });
    
        var myCalendar = $('.js-datepicker');
        var isClick = 0;
    
        $(window).on('click',function(){
            isClick = 0;
        });
    
        $(myCalendar).on('apply.daterangepicker',function(ev, picker){
            isClick = 0;
            $(this).val(picker.startDate.format('DD/MM/YYYY'));
    
        });
    
        $('.js-btn-calendar').on('click',function(e){
            e.stopPropagation();
    
            if(isClick === 1) isClick = 0;
            else if(isClick === 0) isClick = 1;
    
            if (isClick === 1) {
                myCalendar.focus();
            }
        });
    
        $(myCalendar).on('click',function(e){
            e.stopPropagation();
            isClick = 1;
        });
    
        $('.daterangepicker').on('click',function(e){
            e.stopPropagation();
        });
    
    
    } catch(er) {console.log(er);}
    /*[ Select 2 Config ]
        ===========================================================*/
    
    try {
        var selectSimple = $('.js-select-simple');
    
        selectSimple.each(function () {
            var that = $(this);
            var selectBox = that.find('select');
            var selectDropdown = that.find('.select-dropdown');
            selectBox.select2({
                dropdownParent: selectDropdown
            });
        });
    
    } catch (err) {
        console.log(err);
    }
    

})(jQuery);

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
    $("#lname").keyup(function(){
        if(validatename2()){
            // if the email is validated
            // set input email border green
            $("#lname").css("border","4px solid green");
            // and set label 
        //    $("#sname_error_message").html("<p class='text-success'>Name Validated</p>");
        }else{
            // if the email is not validated
            // set border red
            $("#lname").css("border","4px solid red");
         //   $("#sname_error_message").html("<p class='text-danger'>incorrect Name</p>");
        }
        buttonState();
    });
    $("#pno").keyup(function(){
        if(validatephone()){
            // if the email is validated
            // set input email border green
            $("#pno").css("border","4px solid green");
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
    var name=$("#lname").val();
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
    var phone=$("#pno").val();
    // use reular expression
     var reg4 = /^(?:(?:\+|0{0,2})91(\s*|[\-])?|[0]?)?([6789]\d{2}([ -]?)\d{3}([ -]?)\d{4})$/;
     if(reg4.test(phone)){
         return true;
     }else{
         return false;
     }
}
function validatepass(){
    // get value of input email
    var password=$("#pass").val();
    // use reular expression
    var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
     if(reg4.test(password)){
         return true;
     }else{
         return false;
     }
}

