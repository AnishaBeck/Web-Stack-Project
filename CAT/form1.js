
var user_name = document.getElementById("user_name")
var user_email = document.getElementById("user_email")
var user_phone = document.getElementById("user_phone")
var user_pswd = document.getElementById("user_pswd")
var branch = document.getElementById("branch")
var state = document.getElementById("state")
var address = document.getElementById("address")
var form = document.querySelector('.needs-validation')
;


// //form validation
// form.addEventListener('submit', function (event) {
//     if (form.checkValidity() === false) {
//         event.preventDefault();
//         event.stopPropagation();
//     }
//     else {
//         window.alert('Form submitted sucessfully!');
//     }
//     form.classList.add('was-validated');
// })


//event listener to lock numbers for name
user_name.addEventListener('keydown', (e)=>{
    if(/^[^a-zA-Z ]$/.test(e.key))
    {
        e.preventDefault()
    }
})

//event listener to lock characters for phone number
user_phone.addEventListener('keydown', (e)=>{
    if(/^[^0-9]$/.test(e.key))
    {
        e.preventDefault()
    }
})

//event listener to lock numbers for branch
branch.addEventListener('keydown', (e)=>{
    if(/^[^a-zA-Z ]$/.test(e.key))
    {
        e.preventDefault()
    }
})

//event listener to lock numbers for state
state.addEventListener('keydown', (e)=>{
    if(/^[^a-zA-Z ]$/.test(e.key))
    {
        e.preventDefault()
    }
})

//event listener to lock numbers for address
address.addEventListener('keydown', (e)=>{
    if(/^[^a-zA-Z ]$/.test(e.key))
    {
        e.preventDefault()
    }
})

//event listener to validate user email
user_email.addEventListener('keyup', ()=>{
    const email_pattern = /^([a-z0-9_\.]+)@(([a-z0-9]+)\.){2}([a-z]{2,3})$/
    var validate_span = document.getElementById("user_email_validate")
    if(email_pattern.test(user_email.value.trim()))
    {
        validate_span.style.color = 'green'
        validate_span.innerHTML = 'Valid Email'
    }
    else
    {
        validate_span.style.color = 'red'
        if (user_email.value.trim() == '')
        {
            validate_span.innerHTML = 'Email Required'
        }
        else
        {
            validate_span.innerHTML = 'Invalid Email'
        }
    }
})
//event listener to validate username
username.addEventListener('keyup', ()=>{
    const username_pattern = /^[A-Z]{1}[a-zA-Z]{4,}$/
    var validate_span = document.getElementById("username_validate")
    if(username_pattern.test(username.value.trim()))
    {
        validate_span.style.color = 'green'
        validate_span.innerHTML = 'Valid Username'
    }
    else
    {
        validate_span.style.color = 'red'
        if (user_email.value.trim() == '')
        {
            validate_span.innerHTML = 'Username Required'
        }
        else
        {
            validate_span.innerHTML = 'Invalid Username'
        }
    }
})

//event listener to validate user phone
user_phone.addEventListener('keyup', ()=>{
    const phone_pattern = /^[0-9]{10}$/
    var validate_span = document.getElementById("user_phone_validate")
    if(phone_pattern.test(user_phone.value.trim()))
    {
        validate_span.style.color = 'green'
        validate_span.innerHTML = 'Valid Phone'
    }
    else
    {
        validate_span.style.color = 'red'
        if (user_phone.value.trim() == '')
        {
            validate_span.innerHTML = 'Phone Required'
        }
        else
        {
            validate_span.innerHTML = 'Invalid Phone'
        }
    }
})

//event listener to validate user age
user_age.addEventListener("keydown", (e) => {
    let x = document.getElementById("user_age").value;
    let text;

    var validate_span = document.getElementById("user_age_validate");
    if (x.length > 2) {
      e.preventDefault();
    } else {
      if (x.length == 0) {
        validate_span.style.color = "red";
        validate_span.innerHTML = "Age is required";
      } else if (x.length == 1) {
        if (x == 0) {
          validate_span.style.color = "red";
          validate_span.innerHTML = "Age cannot be 0";
        } else {
          validate_span.style.color = "green";
          validate_span.innerHTML = "Age is valid";
        }
      } else if (x.length == 2) {
        if (x == 10) {
          validate_span.style.color = "red";
          validate_span.innerHTML = "Age cannot be 10";
        } else {
          validate_span.style.color = "green";
          validate_span.innerHTML = "Age is valid";
        }
      }
    }
  });
//event listener to validate user password
user_pswd.addEventListener('keyup', ()=>{
    var validate_span = document.getElementById("user_pswd_validate")
    if (user_pswd.value.trim() == '')
    {
        validate_span.style.color = 'red'
        validate_span.innerHTML = 'Password Required'
    }
    else
    {
        if(/^(.){8,20}$/.test(user_pswd.value.trim()))
        {
            validate_span.style.color = 'red'
            validate_span.innerHTML = 'Strength: Weak'
            if((user_pswd.value.trim().match(/[A-Z]/)) && (user_pswd.value.trim().match(/[a-z]/)))
            {
                validate_span.style.color = 'yellow'
                validate_span.innerHTML = 'Strength: Medium'
            }
            if((user_pswd.value.trim().match(/[0-9]/)) && (user_pswd.value.trim().match(/[\W]/)))
            {
                validate_span.style.color = 'green'
                validate_span.innerHTML = 'Strength: Strong'
            }
        }
        else
        {
            validate_span.style.color = 'red'
            validate_span.innerHTML = 'Invalid Password'
        }
    }
})



// Cookies code:

function createCookies()
{
    var phone = document.getElementById("user_phone").value
    var email = document.getElementById("user_email").value
    if((phone.trim() != "")  && (email.trim() != ""))
    {
        document.cookie = "Phone=" + phone + ";expires=Sun, 30 Jan 2022 00:00:00 UTC;"
        document.cookie = "email=" + email + ";expires=Sun, 30 Jan 2022 00:00:00 UTC;"
        localStorage.setItem('Phone',phone)
        localStorage.setItem('email', email)
        window.location.reload()
    }
    else
    {
        alert("Form Incomplete")
    }
}
// //function to load xml doc
// function loadXML()
// {
//     var xmlReq = new XMLHttpRequest;
//     xmlReq.onreadystatechange = function()
//     {
//         console.log(xmlReq.readyState)
//         if((xmlReq.readyState == 4) && (xmlReq.status == 200))
//         {
//             //xml doc successfully retrieved
//             xmlDoc = xmlReq.responseXML
//             myFunction();
           
//         }
//     }
//     xmlReq.open('GET', xmlFile, true)
//     xmlReq.send()
// }

// function myFunction(xml) {
   
//     document.getElementById("dis").innerHTML =
//     xmlDoc.getElementsByTagName("STU-NAME")[0].childNodes[0].nodeValue;
    

   
//     }

