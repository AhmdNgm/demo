const sidebarOpen = document.getElementById('sideOpen')
const sidebar = document.getElementById('side')
const sideIcon = document.getElementById('sideicon')
const mobNavbtn = document.getElementById('mobOpen')
const mobNav = document.getElementById('mobnav')
const closeNav = document.getElementById('closeMob')
const sidebarOpener = () => {
    sidebarOpen.addEventListener('click', () => {
        sidebar.classList.toggle('active')
        sideIcon.classList.toggle('fa-x')
    })
}
sidebarOpener()

const mobileNavOpener = () => {
    mobNavbtn.addEventListener('click', () => {
        mobNav.classList.toggle('closed')
    })
    closeNav.addEventListener('click', () => {
        mobNav.classList.toggle('closed')
    })
}
mobileNavOpener()