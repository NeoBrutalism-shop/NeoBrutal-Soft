const root = document.documentElement;
const toggle = document.querySelector('#themeToggle');

const stored = localStorage.getItem('nbs-theme');
if (stored === 'light' || stored === 'dark') {
  root.dataset.theme = stored;
}

function syncLabel() {
  if (!toggle) return;
  toggle.textContent = root.dataset.theme === 'dark' ? 'Light mode' : 'Dark mode';
}

syncLabel();

toggle?.addEventListener('click', () => {
  const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
  root.dataset.theme = next;
  localStorage.setItem('nbs-theme', next);
  syncLabel();
});
