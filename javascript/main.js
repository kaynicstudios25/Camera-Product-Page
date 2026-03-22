import { CustomerCard } from './components/Review.js';

// ── Tab Switcher ───────────────────────────────────────────────────────────
const ACTIVE  = 'active';
const buttons = document.querySelectorAll('.pt-btn');
const panels  = document.querySelectorAll('.pt-panel');

function switchTab(targetId) {
  buttons.forEach((btn) => {
    const isActive = btn.dataset.tab === targetId;
    btn.classList.toggle(ACTIVE, isActive);
    btn.setAttribute('aria-selected', String(isActive));
  });

  panels.forEach((panel) => {
    const isActive = panel.id === targetId;
    panel.classList.toggle(ACTIVE, isActive);
    panel.setAttribute('aria-hidden', String(!isActive));
  });
}

function onKeydown(e) {
  const list = [...buttons];
  const idx  = list.indexOf(e.currentTarget);
  let next   = null;

  if      (e.key === 'ArrowRight' || e.key === 'ArrowDown') next = list[(idx + 1) % list.length];
  else if (e.key === 'ArrowLeft'  || e.key === 'ArrowUp')   next = list[(idx - 1 + list.length) % list.length];
  else if (e.key === 'Home')                                 next = list[0];
  else if (e.key === 'End')                                  next = list[list.length - 1];

  if (next) {
    e.preventDefault();
    next.focus();
    switchTab(next.dataset.tab);
  }
}

buttons.forEach((btn) => {
  btn.addEventListener('click',   () => switchTab(btn.dataset.tab));
  btn.addEventListener('keydown', onKeydown);
});

// Set initial active tab from whichever button has .active in HTML
const initialBtn = document.querySelector('.pt-btn.active');
if (initialBtn) switchTab(initialBtn.dataset.tab);

window.productTabs = { switchTab };


// ── Review Cards ───────────────────────────────────────────────────────────
const customers = [
  {
    name:   'Alex R.',
    rating: 5,
    avatar: './Assets/Avatars/Ellipse 2.png',
    review: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.',
    date:   '11 January 2025'
  },
  {
    name:   'Jordan K.',
    rating: 3,
    avatar: './Assets/Avatars/Ellipse 2-1.png',
    review: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.',
    date:   '05 February 2026'
  },
  {
    name:   'Sam T.',
    rating: 5,
    avatar: './Assets/Avatars/Ellipse 2-2.png',
    review: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.',
    date:   '20 February 2026'
  }
];

const container = document.querySelector('#customer');
if (container) {
  container.innerHTML = customers
    .map(customer => CustomerCard(customer))
    .join('');
}