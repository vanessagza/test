// script.js (ES6 module)
const navItems = [
    { title: 'About Us', page: 'about' },
    { title: 'Services', page: 'services' },
    { title: 'Contact Us', page: 'contact' }
  ];
  
  const services = [
    {
      name: 'Desktop Application Development',
      description: 'Native apps for Windows, macOS, and Linux that run offline or integrate with external systems.'
    },
    {
      name: 'Web Development',
      description: 'Responsive, scalable websites and web apps (front-end, back-end, full-stack).'
    },
    {
      name: 'Mobile App Development',
      description: 'Android & iOS apps optimized for performance and usability, including cross-platform frameworks.'
    },
    {
      name: 'Cybersecurity',
      description: 'Vulnerability assessments, penetration tests, security patching, 2FA/SSO integration, and monitoring.'
    },
    {
      name: 'AI, Data & Machine Learning',
      description: 'Data pipelines, ML/DL model development, NLP, predictive analytics, and visualization dashboards.'
    },
    {
      name: 'API Development & Integration',
      description: 'RESTful & GraphQL API design, documentation, versioning, and third-party service integration.'
    },
    {
      name: 'E-Commerce Development',
      description: 'Custom online stores, payment gateway integration, inventory management, and shop maintenance.'
    },
    {
      name: 'Game Development',
      description: '2D/3D games, virtual/augmented/mixed reality, multiplayer networking and interactive experiences.'
    },
    {
      name: 'Blockchain',
      description: 'Cryptocurrency creation, smart-contract development, and blockchain platform integration.'
    },
    {
      name: 'Business Analytics',
      description: 'Analytics platform setup, custom event tracking, automated reporting, and KPI dashboards.'
    },
    {
      name: 'Education & Documentation',
      description: 'Technical manuals, user guides, courses, workshops, and curriculum design for bootcamps.'
    },
    {
      name: 'Maintenance & Support',
      description: 'Ongoing bug fixes, version upgrades, performance tuning, and SLA-driven support.'
    }
  ];
  
  const navList     = document.getElementById('nav-list');
  const mainContent = document.getElementById('main-content');
  const yearSpan    = document.getElementById('year');
  
  yearSpan.textContent = new Date().getFullYear();
  
  // Build the main menu
  function buildNav() {
    navItems.forEach(({ title, page }) => {
      const li = document.createElement('li');
      li.textContent = title;
      li.dataset.page = page;
      navList.appendChild(li);
    });
  
    navList.addEventListener('click', e => {
      if (e.target.tagName === 'LI') {
        showPage(e.target.dataset.page);
      }
    });
  }
  
  // Render the selected page
  function showPage(page) {
    // Highlight active menu
    Array.from(navList.children).forEach(li => {
      li.classList.toggle('active', li.dataset.page === page);
    });
  
    // Fade out current content
    mainContent.classList.remove('visible');
  
    setTimeout(() => {
      switch (page) {
        case 'about':
          renderAbout();
          break;
        case 'services':
          renderServices();
          break;
        case 'contact':
          renderContact();
          break;
        default:
          renderAbout();
      }
      // Fade in new content
      mainContent.classList.add('visible');
      mainContent.focus();
    }, 100);
  }
  
  // About Us section
  function renderAbout() {
    mainContent.innerHTML = `
      <h1>About OmniSyn Technologies</h1>
      <p>OmniSyn Technologies is a Monterrey-based tech consultancy specializing in Cybersecurity, AI & Data, and custom software solutions. We partner with businesses to secure, optimize, and grow their digital footprint using the latest technologies and best practices.</p>
      <h2>Mission</h2>
      <p>Deliver cutting-edge technology solutions with uncompromising security standards.</p>
      <h2>Vision</h2>
      <p>Be the leading partner in technology innovation and cyber resilience for organizations worldwide.</p>
    `;
  }
  
  // Services section with live search
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
  
    // initial load
    populate();
  
    // live filter
    search.addEventListener('input', e => populate(e.target.value));
  }
  
  // Contact Us section
  function renderContact() {
    mainContent.innerHTML = `
      <h1>Contact Us</h1>
      <p>
        Email: <a href="mailto:contact@omnisyn.com.mx">contact@omnisyn.com.mx</a><br>
        Phone: <a href="tel:+528120784453">+52 81 2078 4453</a><br>
        Web: <a href="https://www.omnisyn.com.mx" target="_blank">www.omnisyn.com.mx</a>
      </p>
      <form action="mailto:contact@omnisyn.com.mx" method="POST" enctype="text/plain">
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" rows="6" required></textarea>
        <input type="submit" value="Send Message" />
      </form>
    `;
  }
  
  // Initialize on DOM load
  document.addEventListener('DOMContentLoaded', () => {
    buildNav();
    showPage('about');
  });
  
