const navs = document.querySelectorAll('.navlink');
const navPanels = document.querySelectorAll('.nav-panel');

navs.forEach(nav => {
  nav.addEventListener('click', () => {
    const selectedNav = nav;
    const selectedNavId = selectedNav.dataset.nav;

    navPanels.forEach(p => p.classList.add('d-none'));

    const matchingPanel = document.querySelector(`.nav-panel[data-nav="${selectedNavId}"]`);
    if (matchingPanel) {
        matchingPanel.classList.remove('d-none');
    }
  });
});


let today = new Date();
let year = today.getFullYear();
let elCopy = document.getElementById('footer-lg');
let elCopy2 = document.getElementById('footer-sm');
