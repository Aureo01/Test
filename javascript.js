document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");
  const response = document.getElementById("responseMessage");
  const scrollElements = document.querySelectorAll(".fade-in");
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-menu");

  // Validación y envío del formulario
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      const message = messageInput.value.trim();

      if (!name || !email || !message) {
        response.textContent = "Por favor, completa todos los campos.";
        response.style.color = "red";
        return;
      }

      if (name.length < 3) {
        response.textContent = "El nombre debe tener al menos 3 caracteres.";
        response.style.color = "red";
        return;
      }

      // Simular envío exitoso
      response.textContent = "¡Gracias por tu mensaje! Nos pondremos en contacto pronto.";
      response.style.color = "green";
      form.reset();
    });
  }

  // Animaciones al hacer scroll
  const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
      const position = el.getBoundingClientRect().top;
      if (position < window.innerHeight - 50) {
        el.classList.add("visible");
      }
    });
  };

  window.addEventListener("scroll", handleScrollAnimation);
  handleScrollAnimation(); // Ejecutar al cargar por si hay elementos visibles desde el inicio

  // Menú móvil
  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });
  }
});
