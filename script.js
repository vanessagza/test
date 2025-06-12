// script.js (ES6 module)
const navItems = [
  { title: 'Home',     page: 'home'    },
  { title: 'About Us', page: 'about'   },
  { title: 'Services', page: 'services'},
  { title: 'FAQ',      page: 'faq'     },
  { title: 'Contact Us', page: 'contact'}
];

const services = [
  { name: 'Desktop Application Development', description: 'Native apps for Windows, macOS, and Linux that run offline or integrate with external systems.' },
  { name: 'Web Development',                   description: 'Responsive, scalable websites and web apps, including front-end interfaces, back-end logic, and full-stack systems.' },
  { name: 'Mobile App Development',            description: 'Designing and developing mobile apps for Android and iOS, optimized for performance, usability, and platform standards.' },
  { name: 'Cybersecurity',                     description: 'Vulnerability assessments, penetration testing, security patching & updates, authentication (OAuth2, SSO, 2FA), data encryption & monitoring.' },
  { name: 'AI, Data & Machine Learning',       description: 'Data pipelines, ML/DL model development (e.g. facial/object recognition, chatbots), NLP solutions, predictive analytics, and visualization dashboards.' },
  { name: 'API Development & Integration',     description: 'RESTful & GraphQL API design, documentation, versioning, deployment, and third-party integrations.' },
  { name: 'E-Commerce Development',            description: 'Custom online stores, payment gateway integration, inventory management systems, and ongoing shop maintenance.' },
  { name: 'Game Development',                  description: '2D/3D game design, virtual & augmented reality experiences, mixed reality, and multiplayer networking.' },
  { name: 'Blockchain',                        description: 'Cryptocurrency development, smart-contract creation, blockchain integration, and DApp development.' },
  { name: 'Business Analytics',                description: 'Analytics platform integration, custom event tracking, automated reporting, and KPI dashboard creation.' },
  { name: 'Education & Documentation',         description: 'Technical manuals, user guides, courses, tutorials, workshops, and curriculum design for bootcamps.' },
  { name: 'Maintenance & Support',             description: 'Ongoing bug fixes, version upgrades, performance tuning, and SLA-backed support packages.' }
];

const faq = [
  { q: 'What services do you offer?', a: 'We provide end-to-end tech solutions: desktop, web & mobile apps; cybersecurity; AI & data science; API design; e-commerce; game dev; blockchain; analytics; docs; and ongoing maintenance.' },
  { q: 'How can I request a quote?', a: 'Email contact@omnisyn.com.mx with your project overview, objectives, scope, timeline, budget, required technologies, and your company details. We’ll send a tailored estimate.' },
  { q: 'Which industries do you serve?', a: 'We work across finance, healthcare, retail, manufacturing, education, and more—any organization needing robust, secure, and scalable technology.' },
  { q: 'Which tech stacks do you specialize in?', a: 'Our expertise includes React, Angular, Vue, Node.js, .NET, Java, Python, Kotlin/Swift, Unity/Unreal, TensorFlow/PyTorch, and major clouds (AWS/Azure/GCP).' },
  { q: 'Can you integrate with legacy systems?', a: 'Yes—our team builds APIs/connectors to bridge new solutions with existing ERPs, CRMs, and on-premise platforms for seamless data flow.' },
  { q: 'How do you ensure security?', a: 'We follow OWASP Top 10 and ISO 27001, perform vulnerability scans, penetration tests, implement encryption, secure auth (2FA/SSO), and continuous monitoring.' },
  { q: 'Is ongoing support available?', a: 'Absolutely. We offer SLA-backed packages covering bug fixes, performance tuning, version upgrades, and security patching to keep things running smoothly.' },
  { q: 'How do you handle data privacy?', a: 'We implement role-based access, encryption at rest/in transit, and comply with GDPR, HIPAA, or local privacy laws as needed.' },
  { q: 'Do you provide training?', a: 'We deliver customized workshops, tutorials, and detailed documentation so your team can manage, maintain, and extend the solutions we build.' },
  { q: 'What guarantees do you give?', a: 'All work undergoes rigorous QA. We include a 30-day post-delivery support window to iron out any issues and ensure your satisfaction.' }
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
  logoLink.addEventListener('click', e => { e.preventDefault(); showPage('home'); });
}

function showPage(page) {
  Array.from(navList.children).forEach(li =>
    li.classList.toggle('active', li.dataset.page === page)
  );
  mainContent.classList.remove('visible');
  setTimeout(() => {
    switch (page) {
      case 'home':     renderHome();     break;
      case 'about':    renderAbout();    break;
      case 'services': renderServices(); break;
      case 'faq':      renderFAQ();      break;
      case 'contact':  renderContact();  break;
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
        <img src="photo1.jpg" alt="Slide 1">
        <img src="photo2.jpg" alt="Slide 2">
        <img src="photo3.jpg" alt="Slide 3">
        <img src="photo4.jpg" alt="Slide 4">
        <img src="photo5.jpg" alt="Slide 5">
      </div>
      <button class="carousel-button prev" aria-label="Previous slide">&lt;</button>
      <button class="carousel-button next" aria-label="Next slide">&gt;</button>
    </section>
    <section>
      <h1>About OmniSyn Technologies</h1>
      <p>OmniSyn Technologies is a Monterrey-based tech company specializing in cybersecurity, custom software, and information technology services. We help businesses protect their digital assets through services like penetration testing, risk assessments, and cyber defense planning. We also design tailored software solutions — including AI-powered tools — to support each client’s operational goals. At OmniSyn, we combine innovation and security to help organizations grow with confidence.</p>
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
    <section class="quote-section">
      <h1>Get a Quote</h1>
      <p>Email us at <a href="mailto:contact@omnisyn.com.mx">contact@omnisyn.com.mx</a> including:</p>
      <ul>
        <li>Project overview & objectives</li>
        <li>Scope & expected timeline</li>
        <li>Budget range</li>
        <li>Technologies/platforms required</li>
        <li>Your name & company</li>
      </ul>
    </section>
    <section class="download-section">
      <button class="pdf-btn" onclick="downloadCatalogue()">Download Services Catalogue</button>
    </section>
  `;
  initCarousel();
}

// opens the PDF
window.downloadCatalogue = () => {
  window.open('OmniSyn_Services_Catalogue_2025.pdf', '_blank');
};

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
  setInterval(() => { idx = (idx + 1) % total; update(); }, 5000);
}

function renderAbout() {
  mainContent.innerHTML = `
    <h1>About OmniSyn Technologies</h1>
    <p>OmniSyn Technologies is a Monterrey-based tech company specializing in cybersecurity, custom software, and information technology services. We help businesses protect their digital assets through services like penetration testing, risk assessments, and cyber defense planning. We also design tailored software solutions — including AI-powered tools — to support each client’s operational goals. At OmniSyn, we combine innovation and security to help organizations grow with confidence.</p>
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
    <div class="contact-card">
      <p>For quotes or inquiries, please email <a href="mailto:contact@omnisyn.com.mx">contact@omnisyn.com.mx</a>. All quotes are handled via email. To help us respond quickly, include:</p>
      <ul>
        <li>Project overview & objectives</li>
        <li>Scope & expected timeline</li>
        <li>Budget range</li>
        <li>Specific technologies or requirements</li>
        <li>Your name & company details</li>
      </ul>
    </div>
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  buildNav();
  showPage('home');
});
