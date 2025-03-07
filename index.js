const btn = document.querySelector(".email__btn");
let emailInput = document.querySelector(".email__email");
let formulario = document.querySelector(".formulario");

formulario.addEventListener("submit", function () {
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


  if (!emailRegex.test(emailInput.value)){
    alert("email invalido");
  }else{
    alert("email submit");

  }

});


