let emailInput = document.querySelector(".email__email");
let formulario = document.querySelector(".formulario");

formulario.addEventListener("submit", function () {
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailRegex.test(emailInput.value)) {
    alert("email submit");
  } else {
    alert("email invalido");
  }
});
