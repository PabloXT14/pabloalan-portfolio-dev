/* ========== MOBILE MENU ========== */

const toggleButton = document.getElementById('menu-toggle')
const mobileMenu = document.getElementById('mobile-menu')
const overlay = document.getElementById('overlay')

const menuOptions = mobileMenu.querySelectorAll('.menu-item')

function toggleMenu() {
  toggleButton.classList.toggle('active')
  mobileMenu.classList.toggle('active')
  overlay.classList.toggle('active')
}

function closeMenu() {
  toggleButton.classList.remove('active')
  mobileMenu.classList.remove('active')
  overlay.classList.remove('active')
}

toggleButton.addEventListener('click', toggleMenu)
overlay.addEventListener('click', closeMenu)

menuOptions.forEach((option) => {
  option.addEventListener('click', closeMenu)
})
