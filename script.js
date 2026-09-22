const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');

const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.site-nav a[data-page]').forEach((link) => {
  link.classList.toggle('active', link.dataset.page === currentPage);
});

if (menuToggle && siteNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.textContent = isOpen ? 'Close' : 'Menu';
  });
}

const status = document.querySelector('#status');
if (status) {
  status.addEventListener('click', () => {
    status.textContent = status.textContent.includes('Available')
      ? 'Chat to grow with us'
      : 'Available for select projects';
  });
}

const contactForm = document.querySelector('#contact-form');
const formNote = document.querySelector('#form-note');
if (contactForm && formNote) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    formNote.textContent = 'Thanks. We will be in touch shortly.';
    contactForm.reset();
  });
}
