const button = document.querySelector('#openGift');

button.addEventListener('click', () => {
  document.body.classList.add('opening');
  window.setTimeout(() => {
    document.body.classList.remove('opening');
    document.body.classList.add('open');
    const memories = document.querySelector('#memories');
    memories.setAttribute('aria-hidden', 'false');
    memories.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 720);
});
