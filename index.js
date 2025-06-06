/* ========== MOBILE MENU ========== */

const toggleButton = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const overlay = document.getElementById("overlay");

const menuOptions = mobileMenu.querySelectorAll(".menu-item");

function toggleMenu() {
  toggleButton.classList.toggle("active");
  mobileMenu.classList.toggle("active");
  overlay.classList.toggle("active");
}

function closeMenu() {
  toggleButton.classList.remove("active");
  mobileMenu.classList.remove("active");
  overlay.classList.remove("active");
}

toggleButton.addEventListener("click", toggleMenu);
overlay.addEventListener("click", closeMenu);

// biome-ignore lint/complexity/noForEach: <explanation>
menuOptions.forEach((option) => {
  option.addEventListener("click", closeMenu);
});

/* ========== BACK TO TOP ========== */

const backToTopButton = document.getElementById("back-to-top-button");

function handleScrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

backToTopButton.addEventListener("click", handleScrollToTop);

/* ========== LOAD PROJECTS ========== */

import { PROJECTS } from "./data.js"

const projectsContainer = document.getElementById("projects-grid");

PROJECTS.forEach(project => {
  const projectCard = `
    <div class="project-card">
      <img src="${project.image}" alt="${project.title}" class="project-image" />

      <div class="project-date-stack">
        <span>${project.date}</span>

        <div class="tech-stack">
          ${project.techStack.map((item) => item.icon).join('')}
        </div>
      </div>

      <div class="project-description">
        <strong>${project.title}</strong>

        <p>${project.shortDescription}</p>
      </div>

      <div class="actions">
        <a href="${project.repositoryUrl}" target="_blank" class="icon-button-primary">
          <ion-icon name="logo-github"></ion-icon>
        </a>

        <a href="/project.html?id=${project.id}" class="icon-button-primary">
          <i class="ph ph-arrow-up-right"></i>
        </a>
      </div>
    </div>
  `

  projectsContainer.innerHTML += projectCard
})

/* ========== TOAST ========== */
// const form = document.getElementById('contact-form');
// const toast = document.getElementById('toast');

// form.addEventListener('submit', (e) => {
//   e.preventDefault(); // Evita o envio tradicional

//   const formData = Object.fromEntries(new FormData(e.target).entries());

//   console.log('FORM ACTION: ', form.action)
//   console.log('FORM DATA: ', formData)

//   fetch(form.action, {
//     method: 'POST',
//     body: formData,
//   })
//     .then(response => {
//       if (response.ok) {
//         showToast();
//         form.reset();
//       } else {
//         alert('Erro ao enviar mensagem.');
//       }
//     })
//     .catch(error => {
//       alert('Erro de rede. Tente novamente.');
//     });
// });

// function showToast() {
//   toast.classList.remove('hidden');
//   toast.classList.add('show');

//   setTimeout(() => {
//     toast.classList.remove('show');
//     toast.classList.add('hidden');
//   }, 3000);
// }