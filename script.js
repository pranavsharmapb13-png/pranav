const header = document.querySelector('.site-header');
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-links a');
const revealItems = document.querySelectorAll('.reveal');
const form = document.getElementById('contact-form');
const statusText = document.querySelector('.form-status');
const yearEl = document.getElementById('year');

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

const handleHeaderState = () => {
  if (!header) return;
  header.classList.toggle('scrolled', window.scrollY > 24);
};

handleHeaderState();
window.addEventListener('scroll', handleHeaderState, { passive: true });

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!isExpanded));
    navMenu.classList.toggle('is-open');
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (event) => {
    const targetId = anchor.getAttribute('href');
    if (!targetId || targetId === '#') return;

    const target = document.querySelector(targetId);
    if (!target) return;

    event.preventDefault();
    const top = target.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({
      top,
      behavior: 'smooth'
    });
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px'
  }
);

revealItems.forEach((item) => observer.observe(item));

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = form.querySelector('#name');
    const email = form.querySelector('#email');
    const message = form.querySelector('#message');

    const requiredFields = [name, email, message];
    const isValid = requiredFields.every((field) => field && field.value.trim() !== '');

    if (!isValid) {
      if (statusText) {
        statusText.textContent = 'Please complete the required fields before sending your message.';
        statusText.style.color = '#ff9b72';
      }
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value.trim())) {
      if (statusText) {
        statusText.textContent = 'Please enter a valid email address.';
        statusText.style.color = '#ff9b72';
      }
      return;
    }

    if (statusText) {
      statusText.textContent = 'Thanks! Your message has been received and I will get back to you soon.';
      statusText.style.color = '#2dd4bf';
    }

    form.reset();
  });
}
