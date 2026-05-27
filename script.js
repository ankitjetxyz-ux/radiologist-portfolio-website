const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll('.reveal').forEach((element, index) => {
  element.style.transitionDelay = `${Math.min(index * 70, 420)}ms`;
  observer.observe(element);
});

const leadForm = document.getElementById('leadForm');

if (leadForm) {
  leadForm.addEventListener('submit', event => {
    event.preventDefault();

    const formData = new FormData(leadForm);
    const name = formData.get('name')?.toString().trim() || 'Not provided';
    const phone = formData.get('phone')?.toString().trim() || 'Not provided';
    const company = formData.get('company')?.toString().trim() || 'Not provided';
    const message = formData.get('message')?.toString().trim() || 'Not provided';

    const whatsappMessage = encodeURIComponent(
      `New portfolio inquiry from Vandan Distributors%0AName: ${name}%0APhone: ${phone}%0ACentre: ${company}%0ANeed: ${message}`
    );

    window.open(`https://wa.me/919157976333?text=${whatsappMessage}`, '_blank', 'noopener,noreferrer');
    leadForm.reset();
  });
}