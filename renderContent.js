export function RenderContent(){
  // ----------------RENDERING HOME SECTION-------------------//
  const homeDetails = {
    greetTxt: `Hello visitor, I'm`,
    name: 'Cute Meowish',
    profilePhoto: 'profile.jpg',
    welcomeTxt: 'Welcome to my personal website.',
    fbLink: '',
    tiktokLink: '',
    instagramLink: '',
    ytLink: ''
  }

  const homeHTML = `
    <div class="profile-detail">
      <p>${homeDetails.greetTxt}</p>
      <h1 class="my-name gradient-word">${homeDetails.name}</h1>
      <h2 class="display-skills gradient-word"></h2>
      <p>${homeDetails.welcomeTxt}</p>
      <div class="my-social-media-accounts">
        <a
          class="social-media"
          target="_blank"
          href="${homeDetails.fbLink}">
          <img src="./images and icons/icons/facebook (2).png" alt="fb icon" />
        </a>
        <a
          class="social-media"
          target="_blank"
          href="${homeDetails.tiktokLink}">
          <img src="./images and icons/icons/tik-tok.png" alt="tiktok icon" />
        </a>
        <a
          class="social-media"
          target="_blank"
          href="${homeDetails.ytLink}">
          <img src="./images and icons/icons/youtube.png" alt="YT icon" />
        </a>
        <a class="social-media" target="_blank" href="${homeDetails.instagramLink}">
          <img src="./images and icons/icons/instagram (1).png" alt="insta icon" />
        </a>
      </div>
    </div>

    <div class="profile-pic">
      <div id="first-layer">
        <img
          id="profile-img"
          src="./images and icons/images/${homeDetails.profilePhoto}"
          alt="profile photo"
        />
      </div>
    </div>
  `;

  document.querySelector('.home-section').innerHTML = homeHTML;

  // ----------------RENDERING ABOUT SECTION-------------------//
  const aboutDetails = {
    title: 'About Me',
    description: `I am a passionate web developer with a strong foundation in front-end development. I specialize in creating responsive and user-friendly websites that provide seamless experiences across all devices.`,
    aboutPhoto: 'about-photo.jpg'
  }

  const aboutHTML = `
    <div class="about-title">
      <h2>${aboutDetails.title}</h2>
    </div>
    <div class="about-content">
      <div class="about-photo">
        <img src="./images and icons/images/${aboutDetails.aboutPhoto}" alt="about photo">
      </div>
      <div class="about-description">
        <p>${aboutDetails.description}</p>
      </div>
    </div>
  `;

  document.querySelector('.about-section').innerHTML = aboutHTML;

  // ----------------RENDERING SKILLS SECTION-------------------//
  const skillsDetails = {
    title: 'My Skills',
    skills: [
      {
        name: 'HTML',
        icon: 'html.png',
        description: 'Proficient in HTML5 and semantic markup'
      },
      {
        name: 'CSS',
        icon: 'css.png',
        description: 'Strong understanding of CSS3, including Flexbox and Grid'
      },
      {
        name: 'JavaScript',
        icon: 'js.png',
        description: 'Experience with modern JavaScript (ES6+) and DOM manipulation'
      }
    ]
  }

  const skillsHTML = `
    <div class="skills-title">
      <h2>${skillsDetails.title}</h2>
    </div>
    <div class="skills-content">
      ${skillsDetails.skills.map(skill => `
        <div class="skill-card">
          <img src="./images and icons/icons/${skill.icon}" alt="${skill.name} icon">
          <h3>${skill.name}</h3>
          <p>${skill.description}</p>
        </div>
      `).join('')}
    </div>
  `;

  document.querySelector('.my-skills-section').innerHTML = skillsHTML;

  // ----------------RENDERING PROJECTS SECTION-------------------//
  const projectsDetails = {
    title: 'My Projects',
    projects: [
      {
        name: 'Portfolio Website',
        image: 'project1.jpg',
        description: 'A responsive portfolio website built with HTML, CSS, and JavaScript',
        link: '#'
      },
      {
        name: 'Task Manager',
        image: 'project2.jpg',
        description: 'A simple task management application with local storage',
        link: '#'
      }
    ]
  }

  const projectsHTML = `
    <div class="projects-title">
      <h2>${projectsDetails.title}</h2>
    </div>
    <div class="projects-content">
      ${projectsDetails.projects.map(project => `
        <div class="project-card">
          <img src="./images and icons/images/${project.image}" alt="${project.name} screenshot">
          <h3>${project.name}</h3>
          <p>${project.description}</p>
          <a href="${project.link}" target="_blank" class="view-project">View Project</a>
        </div>
      `).join('')}
    </div>
  `;

  document.querySelector('.projects-section').innerHTML = projectsHTML;

  // ----------------RENDERING CONTACT SECTION-------------------//
  const contactDetails = {
    title: 'Contact Me',
    email: 'example@email.com',
    phone: '+1234567890'
  }

  const contactHTML = `
    <div class="contact-title">
      <h2>${contactDetails.title}</h2>
    </div>
    <div class="contact-content">
      <div class="contact-info">
        <p>Email: ${contactDetails.email}</p>
        <p>Phone: ${contactDetails.phone}</p>
      </div>
      <form class="contact-form">
        <input type="text" placeholder="Your Name" required>
        <input type="email" placeholder="Your Email" required>
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  `;

  document.querySelector('.contact-section').innerHTML = contactHTML;
}
