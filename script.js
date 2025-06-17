function filterArt(category) {
  const cards = document.querySelectorAll('.art-card');
  cards.forEach(card => {
    if (category === 'all' || card.dataset.category === category) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('themeToggle');
  if (toggle) {
    toggle.addEventListener('click', () => {
      document.body.classList.toggle('dark');
      toggle.textContent = document.body.classList.contains('dark') ? '☀️ Light' : '🌙 Dark';
    });
  }
});

// Image click modal viewer
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modalImg');
  const modalTitle = document.getElementById('modalTitle');
  const modalDesc = document.getElementById('modalDesc');
  const modalClose = document.getElementById('modalClose');

  document.querySelectorAll('.art-card').forEach(card => {
    card.addEventListener('click', () => {
      const img = card.querySelector('img');
      modalImg.src = img.src;
      modalTitle.textContent = card.getAttribute('data-title');
      modalDesc.textContent = card.getAttribute('data-description');
      modal.style.display = 'flex';
    });
  });

  modalClose.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });

  // Theme toggle
  const toggle = document.getElementById('themeToggle');
  if (toggle) {
    toggle.addEventListener('click', () => {
      document.body.classList.toggle('dark');
      toggle.textContent = document.body.classList.contains('dark') ? '☀️ Light' : '🌙 Dark';
    });
  }
});
