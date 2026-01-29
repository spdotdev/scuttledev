import './style.css'

const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;

const sunIcon = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
`;

const moonIcon = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
`;

// Check for saved theme preference or default to dark (Enver style)
const currentTheme = localStorage.getItem('theme') || 'dark';
html.setAttribute('data-theme', currentTheme);
updateIcon(currentTheme);

themeToggle.addEventListener('click', () => {
  const current = html.getAttribute('data-theme');
  const next = current === 'light' ? 'dark' : 'light';

  html.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  updateIcon(next);
});

function updateIcon(theme) {
  // If theme is dark, we want to show the Sun (to toggle to light) or Moon?
  // Standard UI: Dark Mode is active -> Show Sun (symbolizing "Switch to Light")
  // Or: Show Moon to indicate "Night Mode is On".
  // Usually toggle buttons show what state you *will* switch to (Sun icon if currently Dark) OR what state you are *in* (Moon if currently Dark).
  // Let's go with: Show Sun when in Dark Mode (to switch to light), Show Moon when in Light Mode (to switch to dark).

  if (theme === 'dark') {
    themeToggle.innerHTML = sunIcon;
    themeToggle.setAttribute('aria-label', 'Switch to Light Mode');
  } else {
    themeToggle.innerHTML = moonIcon;
    themeToggle.setAttribute('aria-label', 'Switch to Dark Mode');
  }
}

// Sticky Footer Behavior
const stickyFooter = document.getElementById('sticky-footer');
const fullFooter = document.getElementById('full-footer');

function handleStickyFooter() {
  if (!stickyFooter || !fullFooter) return;

  const footerRect = fullFooter.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  // Hide sticky footer when full footer is visible
  if (footerRect.top < windowHeight) {
    stickyFooter.classList.add('hidden');
  } else {
    stickyFooter.classList.remove('hidden');
  }
}

window.addEventListener('scroll', handleStickyFooter);
window.addEventListener('resize', handleStickyFooter);
handleStickyFooter(); // Initial check

// ===== Tech Canvas Animation =====
const canvas = document.getElementById('tech-canvas');
if (canvas) {
  const ctx = canvas.getContext('2d');
  let nodes = [];
  const nodeCount = 50;
  const connectionDistance = 150;
  const primaryColor = '#5454D4'; // Blurple

  function resizeCanvas() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }

  function createNodes() {
    nodes = [];
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        radius: Math.random() * 2 + 1,
      });
    }
  }

  function drawNodes() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw connections
    ctx.strokeStyle = primaryColor;
    ctx.lineWidth = 0.5;

    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < connectionDistance) {
          const opacity = 1 - (distance / connectionDistance);
          ctx.strokeStyle = `rgba(84, 84, 212, ${opacity * 0.4})`;
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.stroke();
        }
      }
    }

    // Draw nodes
    for (const node of nodes) {
      ctx.beginPath();
      ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
      ctx.fillStyle = primaryColor;
      ctx.fill();
    }
  }

  function updateNodes() {
    for (const node of nodes) {
      node.x += node.vx;
      node.y += node.vy;

      // Bounce off edges
      if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
      if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

      // Keep in bounds
      node.x = Math.max(0, Math.min(canvas.width, node.x));
      node.y = Math.max(0, Math.min(canvas.height, node.y));
    }
  }

  function animate() {
    updateNodes();
    drawNodes();
    requestAnimationFrame(animate);
  }

  // Initialize
  resizeCanvas();
  createNodes();
  animate();

  window.addEventListener('resize', () => {
    resizeCanvas();
    createNodes();
  });
}

// ===== QR Modal Logic =====
const qrModal = document.getElementById('qr-modal');
const openQrBtn = document.getElementById('open-qr-modal');
const closeQrBtn = document.getElementById('close-qr-modal');
const qrOverlay = document.getElementById('qr-modal-overlay');

if (qrModal && openQrBtn && closeQrBtn && qrOverlay) {
  const openModal = () => {
    qrModal.classList.add('active');
    qrModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden'; // Prevent scrolling
  };

  const closeModal = () => {
    qrModal.classList.remove('active');
    qrModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = ''; // Restore scrolling
  };

  openQrBtn.addEventListener('click', openModal);
  closeQrBtn.addEventListener('click', closeModal);
  qrOverlay.addEventListener('click', closeModal);

  // Close on Escape key
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && qrModal.classList.contains('active')) {
      closeModal();
    }
  });
}

// ===== Service Modal Logic =====
const serviceModal = document.getElementById('service-modal');
const serviceModalBody = document.getElementById('service-modal-body');
const closeServiceBtn = document.getElementById('close-service-modal');
const serviceOverlay = document.getElementById('service-modal-overlay');
const serviceLinks = document.querySelectorAll('.pillar-link');

if (serviceModal && serviceModalBody && closeServiceBtn && serviceOverlay) {
  const openServiceModal = (content) => {
    serviceModalBody.innerHTML = content;
    serviceModal.classList.add('active');
    serviceModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Re-bind any internal links if necessary
    const internalLinks = serviceModalBody.querySelectorAll('a[href^="/#"]');
    internalLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        closeServiceModal();
      });
    });
  };

  const closeServiceModal = () => {
    serviceModal.classList.remove('active');
    serviceModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  serviceLinks.forEach(link => {
    link.addEventListener('click', async (e) => {
      const href = link.getAttribute('href');
      // Only intercept internal service pages, not external or section anchors
      if (href.startsWith('/services/')) {
        e.preventDefault();
        try {
          const response = await fetch(href);
          const html = await response.text();
          const parser = new DOMParser();
          const doc = parser.parseFromString(html, 'text/html');
          const content = doc.querySelector('main').innerHTML;

          // Clean up content: remove the padding-top if it exists in the fetched main
          const tempDiv = document.createElement('div');
          tempDiv.innerHTML = content;
          const mainSection = tempDiv.querySelector('.services');
          if (mainSection) {
            // Remove the "Back to Services" link inside the modal since we have a close button
            const backLink = mainSection.querySelector('.pillar-link');
            if (backLink && backLink.textContent.includes('Back to Services')) {
              backLink.parentElement.remove();
            }

            // Also remove "Get in Touch" CTA button from the modal
            const ctaBtn = mainSection.querySelector('.cta-button');
            if (ctaBtn && ctaBtn.textContent.includes('Get in Touch')) {
              ctaBtn.parentElement.remove();
            }

            openServiceModal(mainSection.innerHTML);
          } else {
            openServiceModal(content);
          }
        } catch (error) {
          console.error('Error fetching service content:', error);
          window.location.href = href; // Fallback to normal navigation
        }
      }
    });
  });

  closeServiceBtn.addEventListener('click', closeServiceModal);
  serviceOverlay.addEventListener('click', closeServiceModal);

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && serviceModal.classList.contains('active')) {
      closeServiceModal();
    }
  });
}
