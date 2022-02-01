
      var form = document.querySelector(".needs-validation");

      form.addEventListener("submit", function (event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        } else {
          window.alert("Form submitted sucessfully!");
        }
        form.classList.add("was-validated");
      });

      function restrictAlphabets(e) {
        var x = e.which; //which function return ascii code, same as e.keycode. | e is the event which is input.
        console.log(e);
        if (x >= 48 && x <= 57) return true;
        else return false;
      }
      function restrictNumeric(e) {
        var x = e.which || e.keycode;
        if (x >= 65 && x <= 122) return true;
        else return false;
      }
      function checkmail() {
        var validRegex =
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@+([a-z.]|)+(christuniversity.in|christuniversity.com)$/;
        var receivedEmail = document.getElementById("email").value.trim();
        if (!receivedEmail.toLowerCase().match(validRegex)) {
          window.alert("Please enter valid email address.");
          return;
        }
      }
      function checkpswd() {
        var re =
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[~`!@#$%^_+={}|:"<>,.?])[A-Za-z\d@$!%*?&]{8,}$/;
        var receivedpswd = document.getElementById("password").value.trim();
        if (!re.test(receivedpswd)) {
          window.alert("Please enter good password.");
          return;
        }
      }

      function reset() {
        document.getElementById("mainform").reset();
      }