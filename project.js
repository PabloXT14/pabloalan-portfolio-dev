import { PROJECTS } from './data.js'

/* ========== GET PARAMS ========== */
const projectDetailsContainer = document.getElementById("project-details");

const urlParams = new URLSearchParams(window.location.search)

const projectId = urlParams.get('id')

const project = PROJECTS.find(project => project.id === projectId)

if (!project) {
  window.location.href = '/'
}

projectDetailsContainer.innerHTML = `
  <div class="info-preview">
    <div class="image-container">
      <img src="${project.image}" alt="" />

      <button class="icon-button-primary" id="back-button">
        <i class="ph ph-arrow-left"></i>
      </button>
    </div>

    <div class="description">
      <div class="project-date-stack">
        <span>${project.date}</span>

        <div class="tech-stack">
          ${project.techStack.map((item) => item.icon).join('')}
        </div>
      </div>

      <h1>${project.title}</h1>

      <div class="text">
        <p class="role">
          <strong>Cargo: </strong>
          <span>${project.role}</span>
        </p>

        ${project.description.map((item) => `
          <p>${item}</p>
        `).join('')}
      </div>
      
    </div>
  </div>

  <div class="links">
    <h2>Dê uma olhada neste projeto</h2>

    <div class="buttons">
      <a href="${project.liveUrl}" target="_blank" class="button-primary">
        <i class="ph ph-globe-simple"></i>
        Live demo
        <i class="ph ph-arrow-up-right"></i>
      </a>

        <a href="${project.repositoryUrl}" target="_blank" class="button-secondary">
        <ion-icon name="logo-github"></ion-icon>
        Código
        <i class="ph ph-arrow-up-right"></i>
      </a>
    </div>
  </div>
`

/* ========== BACK BUTTON ========== */
const backButton = document.getElementById("back-button");

backButton.addEventListener("click", () => {
  window.history.back();
});