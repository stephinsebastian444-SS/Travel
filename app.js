// ── Auth utilities ──
function requireLogin() {
  if (!localStorage.getItem('wp_current_user')) {
    window.location.href = 'index.html';
  }
}

function logout() {
  localStorage.removeItem('wp_current_user');
  showToast('Logged out. See you soon! 👋');
  setTimeout(() => window.location.href = 'index.html', 800);
}

// ── Toast notification ──
function showToast(message) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toast._t);
  toast._t = setTimeout(() => toast.classList.remove('show'), 2800);
}
