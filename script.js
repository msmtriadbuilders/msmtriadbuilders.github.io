// Toggle floating contact options on hover and click
const contactToggle = document.querySelector('.contact-toggle');
const contactOptions = document.querySelectorAll('.contact-option');

contactToggle.addEventListener('click', () => {
  contactOptions.forEach(item => item.classList.toggle('show'));
});

// Smooth scrolling for nav links and handle menu behavior
const navbarToggler = document.querySelector('.navbar-toggler');
const navbarCollapse = document.querySelector('.navbar-collapse');

navbarToggler.addEventListener('click', () => {
  navbarCollapse.classList.toggle('show');
});

// Highlight the active navigation link using Intersection Observer
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const id = entry.target.getAttribute('id');
    const navLink = document.querySelector(`.navbar .nav-link[href="#${id}"]`);

    document.querySelectorAll('.navbar .nav-link').forEach(link => {
      link.classList.remove('active'); // Remove previous highlight
    });

    if (entry.isIntersecting) {
      navLink.classList.add('active'); // Highlight current nav link
    }
  });
}, {
  threshold: 0.7
});

sections.forEach(section => observer.observe(section));

// Smooth scroll for nav links and close the navbar on mobile devices
document.querySelectorAll('.navbar .nav-link').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default anchor click behavior

    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }

    // Close the navbar on mobile devices
    if (window.innerWidth < 995) {
      navbarCollapse.classList.remove('show');
      navbarToggler.classList.remove('collapsed');
      navbarToggler.setAttribute('aria-expanded', 'false');
    }
  });
});

// Close the navbar when "Home" is clicked
const homeLink = document.querySelector('.navbar .nav-link[href="#home"]');
if (homeLink) {
  homeLink.addEventListener('click', () => {
    if (window.innerWidth < 995) {
      navbarCollapse.classList.remove('show');
      navbarToggler.classList.remove('collapsed');
      navbarToggler.setAttribute('aria-expanded', 'false');
    }
  });
}

function toggleOverlay(card) {
    card.classList.toggle('clicked');
}

// Add functionality to hide/show navbar on scroll
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar'); // Ensure you select the correct navbar element

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // User is scrolling down
        navbar.style.top = '-60px'; // Adjust this value based on your navbar height
    } else {
        // User is scrolling up
        navbar.style.top = '0';
    }
    lastScrollTop = scrollTop;
});
// Optional: Adds ripple effect on the cards to mimic Material interaction feedback
document.querySelectorAll('.contact-card, .map-card').forEach(card => {
  card.addEventListener('mousedown', function (e) {
      const ripple = document.createElement('span');
      ripple.className = 'ripple';
      ripple.style.left = `${e.clientX - this.offsetLeft}px`;
      ripple.style.top = `${e.clientY - this.offsetTop}px`;
      this.appendChild(ripple);

      setTimeout(() => {
          ripple.remove();
      }, 500);
  });
});

