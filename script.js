// script.js (ES6 module)
const navItems = [
  { title: 'Home', page: 'home' },
  { title: 'About Us', page: 'about' },
  { title: 'Services', page: 'services' },
  { title: 'FAQ', page: 'faq' },
  { title: 'Contact Us', page: 'contact' }
];

const services = [
  {
    name: 'Desktop Application Development',
    description: 'Native apps for Windows, macOS, and Linux that run offline or integrate with external systems.'
  },
  {
    name: 'Web Development',
    description: 'Responsive, scalable websites and web apps, including front-end interfaces, back-end logic, and full-stack systems.'
  },
  {
    name: 'Mobile App Development',
    description: 'Designing and developing mobile apps for Android and iOS, optimized for performance, usability, and platform standards.'
  },
  {
    name: 'Cybersecurity',
    description: 'Vulnerability assessments, penetration testing, security patching & updates, authentication (OAuth2, SSO, 2FA), data encryption & monitoring.'
  },
  {
    name: 'AI, Data & Machine Learning',
    description: 'Data pipelines, ML/DL model development (e.g. facial/object recognition, chatbots), NLP solutions, predictive analytics, and visualization dashboards.'
  },
  {
    name: 'API Development & Integration',
    description: 'RESTful & GraphQL API design, development, documentation, versioning, deployment, and third-party integrations.'
  },
  {
    name: 'E-Commerce Development',
    description: 'Custom online stores, payment gateway integration, inventory management systems, and ongoing shop maintenance.'
  },
  {
    name: 'Game Development',
    description: '2D/3D game design, virtual & augmented reality experiences, mixed reality, and multiplayer networking.'
  },
  {
    name: 'Blockchain',
    description: 'Cryptocurrency development, smart-contract creation, blockchain integration, and DApp development.'
  },
  {
    name: 'Business Analytics',
    description: 'Analytics platform integration, custom event tracking, automated reporting, and KPI dashboard creation.'
  },
  {
    name: 'Education & Documentation',
    description: 'Technical manuals, user guides, courses, tutorials, workshops, and curriculum design for bootcamps.'
  },
  {
    name: 'Maintenance & Support',
    description: 'Ongoing bug fixes, version upgrades, performance tuning, and SLA-backed support packages.'
  }
];

const faq = [
  {
    q: 'How do you price a project?',
    a: 'All quotes are based on scope, timeline, and technologies. Email us with project details for a custom estimate.'
  },
  {
    q: 'What is your typical delivery time?',
    a: 'Depends on complexity: small projects (2–4 weeks), medium (1–3 months), large (3+ months).'
  },
  {
    q: 'Which industries do you serve?',
    a: 'We work across finance, healthcare, retail, manufacturing, and more—any organization needing tech and security.'
  },
  {
    q: 'Do you offer ongoing maintenance?',
    a: 'Yes. We have SLA-backed support packages covering updates, patches, and performance tuning.'
  },
  {
    q: 'How do you ensure security?',
    a: 'We follow OWASP and ISO standards, perform regular vulnerability scans, and use best-practice encryption and authentication.'
  }
];

const navList     = document.getElementById('nav-list');
const mainContent = document.getElementById('main-content');
const yearSpan    = document.getElementById('year');
const logoLink    = document.getElementById('logo-link');

yearSpan.textContent = new Date().getFullYear();

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

function showPage(page) {
  Array.from(navList.children).forEach(li =>
    li.classList.toggle('active', li.dataset.page === page)
  );
  mainContent.classList.remove('visible');
  setTimeout(() => {
    switch (page) {
      case 'home':     renderHome();    break;
      case 'about':    renderAbout();   break;
      case 'services': renderServices();break;
      case 'faq':      renderFAQ();     break;
      case 'contact':  renderContact(); break;
      default:         renderHome();
    }
    mainContent.classList.add('visible');
    mainContent.focus();
  }, 100);
}

function renderHome() {
  mainContent.innerHTML = `
    <section class="carousel">
      <div class="slides">
        <img src="photo1.png" alt="Slide 1">
        <img src="photo2.png" alt="Slide 2">
        <img src="photo3.png" alt="Slide 3">
        <img src="photo4.png" alt="Slide 4">
        <img src="photo5.png" alt="Slide 5">
      </div>
      <button class="carousel-button prev" aria-label="Previous slide">&lt;</button>
      <button class="carousel-button next" aria-label="Next slide">&gt;</button>
    </section>
    <section>
      <h1>About OmniSyn Technologies</h1>
      <p>OmniSyn is a Monterrey-based tech consultancy specializing in Cybersecurity, AI & Data, and custom software. We secure, optimize, and scale your digital footprint.</p>
    </section>
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
    <section>
      <h1>Get a Quote</h1>
      <p>Email us at <a href="mailto:contact@omnisyn.com.mx">contact@omnisyn.com.mx</a> with:</p>
      <ul>
        <li>Project overview & objectives</li>
        <li>Scope & timeline</li>
        <li>Budget range</li>
        <li>Technologies/platforms required</li>
        <li>Your name & company</li>
      </ul>
    </section>
  `;
  initCarousel();
}

function initCarousel() {
  const slides = document.querySelector('.slides');
  const imgs = slides.children;
  let idx = 0, total = imgs.length;
  const prev = document.querySelector('.prev');
  const next = document.querySelector('.next');

  function update() {
    slides.style.transform = `translateX(-${idx * 100}%)`;
  }
  prev.onclick = () => { idx = (idx - 1 + total) % total; update(); };
  next.onclick = () => { idx = (idx + 1) % total; update(); };
}

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

function renderFAQ() {
  mainContent.innerHTML = `
    <h1>FAQ</h1>
    ${faq.map(item => `
      <div class="faq-item">
        <h3>${item.q}</h3>
        <p>${item.a}</p>
      </div>
    `).join('')}
  `;
}

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

document.addEventListener('DOMContentLoaded', () => {
  buildNav();
  showPage('home');
});
