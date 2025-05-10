document.getElementById('subscribe-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const email = this.email.value;
  const name = this.name.value;

  if (!email.includes('@')) {
    alert("Introduce un email válido.");
    return;
  }

  // Aquí se puede insertar la integración con CRM
  document.getElementById('confirmation-message').style.display = 'block';

  // Redireccionar a página de gracias
  setTimeout(() => {
    window.location.href = "gracias.html";
  }, 2000);
});
