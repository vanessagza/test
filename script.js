// script.js (ES6 module)
const navItems = [
  { title: 'Home', page: 'home' },
  { title: 'About Us', page: 'about' },
  { title: 'Services', page: 'services' },
  { title: 'Contact Us', page: 'contact' }
];

const services = [
  /* same array as before… */
  { name: 'Desktop Application Development', description: 'Native apps for Windows, macOS, and Linux…' },
  { name: 'Web Development',                        description: 'Responsive, scalable websites…' },
  /* …all the others… */
];

const navList     = document.getElementById('nav-list');
const mainContent = document.getElementById('main-content');
const yearSpan    = document.getElementById('year');
const logoLink    = document.getElementById('logo-link');

yearSpan.textContent = new Date().getFullYear();

// build the menu
function buildNav() {
  navItems.forEach(({ title, page }) => {
    const li = document.createElement('li');
    li.textContent = title;
    li.dataset.page = page;
    navList.appendChild(li);
  });
  navList.addEventListener('click', e => {
    if (e.target.tagName === 'LI') showPage(e.target.dataset.page);
  });
  logoLink.addEventListener('click', e => {
    e.preventDefault();
    showPage('home');
  });
}

// show the selected section
function showPage(page) {
  // highlight
  Array.from(navList.children).forEach(li =>
    li.classList.toggle('active', li.dataset.page === page)
  );
  // fade
  mainContent.classList.remove('visible');
  setTimeout(() => {
    switch (page) {
      case 'home':    renderHome();    break;
      case 'about':   renderAbout();   break;
      case 'services':renderServices();break;
      case 'contact': renderContact(); break;
      default:        renderHome();
    }
    mainContent.classList.add('visible');
    mainContent.focus();
  }, 100);
}

// Home: About + Services preview + Contact CTA
function renderHome() {
  // About snippet
  let html = `
    <section>
      <h1>About OmniSyn Technologies</h1>
      <p>OmniSyn is a Monterrey-based tech consultancy specializing in Cybersecurity, AI & Data, and custom software. We secure, optimize, and scale your digital footprint.</p>
    </section>
  `;
  // Services grid
  html += `
    <section>
      <h1>Our Services</h1>
      <div class="services-grid">
        ${services.map(s => `
          <div class="service-card">
            <h3>${s.name}</h3>
            <p>${s.description}</p>
          </div>
        `).join('')}
      </div>
    </section>
  `;
  // Contact CTA
  html += `
    <section>
      <h1>Get a Quote</h1>
      <p>Need one of these services? Email us at <a href="mailto:contact@omnisyn.com.mx">contact@omnisyn.com.mx</a> for a personalized quote. Include:</p>
      <ul>
        <li>Project overview & objectives</li>
        <li>Scope & timeline</li>
        <li>Budget range</li>
        <li>Specific technologies or platforms</li>
        <li>Your name & company</li>
      </ul>
    </section>
  `;
  mainContent.innerHTML = html;
}

// About page (full)
function renderAbout() {
  mainContent.innerHTML = `
    <h1>About OmniSyn Technologies</h1>
    <p>OmniSyn is a Monterrey-based tech consultancy specializing in Cybersecurity, AI & Data, and custom software solutions. We partner with businesses to secure, optimize, and grow their digital footprint using the latest technologies and best practices.</p>
    <h2>Mission</h2>
    <p>Deliver cutting-edge technology solutions with uncompromising security standards.</p>
    <h2>Vision</h2>
    <p>Be the leading partner in technology innovation and cyber resilience for organizations worldwide.</p>
  `;
}

// Services page (with live filter)
function renderServices() {
  mainContent.innerHTML = `
    <h1>Our Services</h1>
    <input id="service-search" class="service-search" type="text" placeholder="Search services…" aria-label="Search services">
    <div id="services-grid" class="services-grid"></div>
  `;
  const grid = document.getElementById('services-grid');
  const search = document.getElementById('service-search');

  function populate(filter = '') {
    grid.innerHTML = '';
    services
      .filter(s => s.name.toLowerCase().includes(filter.toLowerCase()))
      .forEach(s => {
        const card = document.createElement('div');
        card.className = 'service-card';
        card.innerHTML = `<h3>${s.name}</h3><p>${s.description}</p>`;
        grid.appendChild(card);
      });
  }
  populate();
  search.addEventListener('input', e => populate(e.target.value));
}

// Contact page (email-only instructions)
function renderContact() {
  mainContent.innerHTML = `
    <h1>Contact Us</h1>
    <p>For quotes or inquiries, please email <a href="mailto:contact@omnisyn.com.mx">contact@omnisyn.com.mx</a>. All quotes are handled via email. To help us respond quickly, include:</p>
    <ul>
      <li>Project overview & objectives</li>
      <li>Scope & expected timeline</li>
      <li>Budget range</li>
      <li>Specific technologies or requirements</li>
      <li>Your name & company details</li>
    </ul>
  `;
}

// init
document.addEventListener('DOMContentLoaded', () => {
  buildNav();
  showPage('home');
});
