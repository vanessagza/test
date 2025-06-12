// script.js
const pages = [
    {
      title: 'About',
      slug: 'about',
      content: `
        <h1>About OmniSyn Technologies</h1>
        <p>OmniSyn Technologies is a Monterrey-based startup specializing in Cybersecurity, Artificial Intelligence, and custom SaaS solutions. Our mission is to help organizations of any size secure, optimize, and scale their digital assets through cutting-edge technology and local expertise.</p>
        <h2>Mission</h2>
        <p>Deliver cutting-edge technology solutions with uncompromising security standards.</p>
        <h2>Vision</h2>
        <p>Be the leading partner in technology innovation and cyber resilience for businesses worldwide.</p>
      `
    },
    {
      title: 'Desktop Apps',
      slug: 'desktop-apps',
      content: `
        <h1>Desktop Application Development</h1>
        <p>Building powerful native applications for Windows, macOS, and Linux that run offline or integrate with external systems.</p>
        <ul>
          <li>Windows</li>
          <li>macOS</li>
          <li>Linux</li>
        </ul>
      `
    },
    {
      title: 'Web Dev',
      slug: 'web-dev',
      content: `
        <h1>Web Development</h1>
        <p>Creating responsive and scalable websites and web apps, including front-end interfaces, back-end logic, and full-stack systems.</p>
        <ul>
          <li>Front-end development</li>
          <li>Back-end development</li>
          <li>Full-stack development</li>
        </ul>
      `
    },
    {
      title: 'Mobile Apps',
      slug: 'mobile-apps',
      content: `
        <h1>Mobile App Development</h1>
        <p>Designing and developing mobile apps for Android and iOS, optimized for performance, usability, and platform standards.</p>
        <ul>
          <li>Android</li>
          <li>iOS</li>
          <li>Cross-platform</li>
        </ul>
      `
    },
    {
      title: 'Cybersecurity',
      slug: 'cybersecurity',
      content: `
        <h1>Cybersecurity</h1>
        <p>Protecting digital systems through comprehensive security services:</p>
        <ul>
          <li>Vulnerability assessment</li>
          <li>Penetration testing</li>
          <li>Security patching & updates</li>
          <li>Authentication (OAuth2, SSO, 2FA)</li>
          <li>Data encryption & secure storage</li>
          <li>Monitoring</li>
        </ul>
      `
    },
    {
      title: 'AI & Data',
      slug: 'ai-data',
      content: `
        <h1>AI, Data & Machine Learning</h1>
        <p>Building intelligent systems with data pipelines, ML models, and AI tools:</p>
        <ul>
          <li>AI-powered apps</li>
          <li>Natural Language Processing (NLP)</li>
          <li>Data scraping & pipeline automation</li>
          <li>Data analysis & visualization</li>
          <li>ML/DL model development (facial/object recognition, chatbots, voice assistants, speech-to-text, anomaly detection, text summarization)</li>
        </ul>
      `
    },
    {
      title: 'APIs',
      slug: 'api',
      content: `
        <h1>API Development & Integration</h1>
        <ul>
          <li>RESTful & GraphQL API development</li>
          <li>API documentation</li>
          <li>Versioning & deployment</li>
          <li>Third-party integrations</li>
        </ul>
      `
    },
    {
      title: 'E-Commerce',
      slug: 'ecommerce',
      content: `
        <h1>E-Commerce Development</h1>
        <ul>
          <li>Custom online stores</li>
          <li>Shop maintenance</li>
          <li>Payment gateway integration</li>
          <li>Inventory management systems</li>
        </ul>
      `
    },
    {
      title: 'Game Dev',
      slug: 'game-dev',
      content: `
        <h1>Game Development</h1>
        <ul>
          <li>2D/3D game design</li>
          <li>Virtual & Augmented Reality</li>
          <li>Mixed Reality experiences</li>
          <li>Multiplayer networking</li>
        </ul>
      `
    },
    {
      title: 'Blockchain',
      slug: 'blockchain',
      content: `
        <h1>Blockchain</h1>
        <ul>
          <li>Cryptocurrency development</li>
          <li>Blockchain integration</li>
        </ul>
      `
    },
    {
      title: 'Analytics',
      slug: 'analytics',
      content: `
        <h1>Business Analytics</h1>
        <ul>
          <li>Analytics platform integration</li>
          <li>Custom event tracking</li>
          <li>Reporting automation</li>
        </ul>
      `
    },
    {
      title: 'Education',
      slug: 'education',
      content: `
        <h1>Education & Documentation</h1>
        <ul>
          <li>Technical docs & user manuals</li>
          <li>Courses, tutorials & workshops</li>
          <li>Curriculum design for bootcamps</li>
        </ul>
      `
    },
    {
      title: 'Support',
      slug: 'support',
      content: `
        <h1>Maintenance & Support</h1>
        <ul>
          <li>Ongoing bug fixes & updates</li>
          <li>Version upgrades</li>
          <li>App maintenance</li>
        </ul>
      `
    },
    {
      title: 'Contact',
      slug: 'contact',
      content: `
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
      `
    }
  ];
  
  const navList     = document.getElementById('nav-list');
  const mainContent = document.getElementById('main-content');
  const yearSpan    = document.getElementById('year');
  
  // set footer year
  yearSpan.textContent = new Date().getFullYear();
  
  // build navigation
  function buildNav() {
    pages.forEach(pg => {
      const li = document.createElement('li');
      li.textContent = pg.title;
      li.dataset.slug = pg.slug;
      navList.appendChild(li);
    });
    navList.addEventListener('click', e => {
      if (e.target.tagName === 'LI') {
        location.hash = e.target.dataset.slug;
      }
    });
  }
  
  // render a page by its slug
  function renderPage(slug) {
    const page = pages.find(p => p.slug === slug) || pages[0];
    // highlight nav
    Array.from(navList.children).forEach(li =>
      li.classList.toggle('active', li.dataset.slug === page.slug)
    );
    // inject content
    mainContent.classList.remove('visible');
    setTimeout(() => {
      mainContent.innerHTML = page.content;
      mainContent.classList.add('visible');
      mainContent.focus();
    }, 100);
  }
  
  // handle hash changes
  window.addEventListener('hashchange', () => {
    renderPage(location.hash.slice(1));
  });
  
  // initialize
  document.addEventListener('DOMContentLoaded', () => {
    buildNav();
    renderPage(location.hash.slice(1) || pages[0].slug);
  });
  
