function togglePasswordView() {
    var iel = document.getElementById("password");
    if(iel.type === "text") {
      $('#eye-icon').removeClass('fa-eye').addClass('fa-eye-slash');
      iel.type = 'password';
    } else {
      $('#eye-icon').removeClass('fa-eye-slash').addClass('fa-eye');
      iel.type = 'text'
    }
  }