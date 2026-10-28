const menuToggle = document.querySelector('.nav-toggle');
const navigation = document.querySelector('.nav-links');

if (menuToggle && navigation) {
  menuToggle.addEventListener('click', () => {
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!expanded));
    navigation.classList.toggle('is-open', !expanded);
  });

  navigation.addEventListener('click', (event) => {
    if (event.target.closest('a')) {
      menuToggle.setAttribute('aria-expanded', 'false');
      navigation.classList.remove('is-open');
    }
  });
}

const today = new Date();
const localDate = new Date(today.getTime() - today.getTimezoneOffset() * 60000)
  .toISOString()
  .slice(0, 10);
document.querySelectorAll('input[type="date"]').forEach((dateInput) => {
  dateInput.min = localDate;
});

document.querySelectorAll('[data-demo-form]').forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const status = form.querySelector('[data-form-status]');
    if (!form.reportValidity()) return;
    status.dataset.state = 'success';
    status.textContent = form.dataset.demoForm === 'reservation'
      ? 'Your request is ready in this demo, but it has not been sent or booked. Please call us to arrange your visit.'
      : 'Your message is ready in this demo, but it has not been sent. Please contact us by phone or email.';
    form.reset();
    form.querySelectorAll('input[type="date"]').forEach((dateInput) => {
      dateInput.min = localDate;
    });
  });
});

document.querySelectorAll('.faq-question').forEach((button) => {
  button.addEventListener('click', () => {
    const isExpanded = button.getAttribute('aria-expanded') === 'true';
    const panel = document.getElementById(button.getAttribute('aria-controls'));
    button.setAttribute('aria-expanded', String(!isExpanded));
    panel.hidden = isExpanded;
    button.querySelector('[aria-hidden="true"]').textContent = isExpanded ? '+' : '−';
  });
});

const lightbox = document.querySelector('#gallery-lightbox');
if (lightbox) {
  const lightboxImage = lightbox.querySelector('img');
  const lightboxCaption = lightbox.querySelector('[data-lightbox-caption]');
  document.querySelectorAll('[data-lightbox]').forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const image = trigger.querySelector('img');
      lightboxImage.src = image.currentSrc || image.src;
      lightboxImage.alt = image.alt;
      lightboxCaption.textContent = trigger.dataset.caption || image.alt;
      lightbox.showModal();
    });
  });
  lightbox.querySelector('.lightbox__close').addEventListener('click', () => lightbox.close());
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && lightbox.open) {
      event.preventDefault();
      lightbox.close();
    }
  });
  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) lightbox.close();
  });
}

const revealTargets = document.querySelectorAll('[data-reveal]');
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealTargets.forEach((target) => revealObserver.observe(target));
} else {
  revealTargets.forEach((target) => target.classList.add('is-visible'));
}