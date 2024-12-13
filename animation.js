export function animation(){
  // Home section animations
  const profileDetail = document.querySelector('.profile-detail');
  if (profileDetail) {
    profileDetail.style.animation = 'slide-in-left 1s ease forwards';
  }

  const profilePic = document.querySelector('.profile-pic');
  if (profilePic) {
    profilePic.style.animation = 'slide-in-right 1s ease forwards';
  }

  // About section animations
  const aboutContent = document.querySelector('.about-content');
  const aboutObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'fade-in 1s ease forwards';
      }
    });
  }, {
    threshold: 0.3
  });

  if (aboutContent) {
    aboutObserver.observe(aboutContent);
  }

  // Skills animations
  const skillCards = document.querySelectorAll('.skill-card');
  const skillsObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'slide-up 0.5s ease forwards';
        entry.target.style.opacity = 1;
      }
    });
  }, {
    threshold: 0.2
  });

  skillCards.forEach(card => {
    card.style.opacity = 0;
    skillsObserver.observe(card);
  });

  // Projects animations
  const projectCards = document.querySelectorAll('.project-card');
  const projectsObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'scale-in 0.5s ease forwards';
        entry.target.style.opacity = 1;
      }
    });
  }, {
    threshold: 0.2
  });

  projectCards.forEach(card => {
    card.style.opacity = 0;
    projectsObserver.observe(card);
  });

  // Contact form animations
  const contactForm = document.querySelector('.contact-form');
  const contactObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'slide-in-bottom 1s ease forwards';
      }
    });
  }, {
    threshold: 0.3
  });

  if (contactForm) {
    contactObserver.observe(contactForm);
  }

  // Glowing dots animation
  const glowingDots = document.querySelectorAll('.glowing');
  glowingDots.forEach(dot => {
    dot.style.animation = 'colorChange 5s linear infinite';
  });
}
