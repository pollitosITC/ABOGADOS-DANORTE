// script.js

// Mostrar año actual automáticamente en el footer
document.addEventListener("DOMContentLoaded", function () {
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});

// Validación básica del formulario
document.addEventListener("submit", function (e) {
    const form = e.target;
    if (form.id === "contact-form") {
        const name = form.querySelector("[name='name']");
        const email = form.querySelector("[name='email']");
        const message = form.querySelector("[name='message']");

        if (!name.value || !email.value || !message.value) {
            e.preventDefault();
            alert("Por favor, llena todos los campos del formulario.");
        }
    }
});

// Scroll suave para navegación interna
document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});
