document.addEventListener('DOMContentLoaded', function () {


// Obtén una referencia al formulario
const form = document.getElementById('form');

// Agrega un evento de escucha para el envío del formulario
form.addEventListener('submit', function (event) {
  // Reinicia el mensaje de advertencia en cada envío
  const warnings = document.getElementById('warnings');
  warnings.innerHTML = '';

  // Valida el campo de nombre
  const nameInput = document.getElementById('name');
  if (nameInput.value.trim() === '') {
    warnings.innerHTML += 'Por favor, ingresa tu nombre.<br>';
    event.preventDefault(); // Evita que el formulario se envíe
  }

  // Valida el campo de email
  const emailInput = document.getElementById('email');
  const email = emailInput.value.trim();
  if (email === '') {
    warnings.innerHTML += 'Por favor, ingresa tu correo electrónico.<br>';
    event.preventDefault();
  } else if (!validateEmail(email)) {
    warnings.innerHTML += 'Por favor, ingresa un correo electrónico válido.<br>';
    event.preventDefault();
  }

  // Valida el campo de mensaje
  const messageInput = document.getElementById('message');
  if (messageInput.value.trim() === '') {
    warnings.innerHTML += 'Por favor, ingresa tu mensaje.<br>';
    event.preventDefault();
  }
});

// Función para validar un email
function validateEmail(email) {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(email);
}
});