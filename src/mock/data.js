import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Ahmed Roble | Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my Portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, My name is',
  name: 'Ahmed',
  subtitle: ' I am an aspiring Developer',
  cta: 'Find out more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: `Hi I'm Ahmed a web developer with a passion for JavaScript. Learning to code and building web applications has been the most difficult yet rewarding undertaking in my life. I am driven by the constant challenge of finding solutions to problems and see it as an oppurtunity for growth. Over the course of my journey I've learned and practiced with core technologies such as HTML, CSS & Javascript and more modern tech like React.`,
  paragraphTwo: `But the journey does not end there! I'm working on improving my React skills with projects and I'm looking to pickup a framework like Next.js in the near future. My long term goal is to become a full stack developer able to transform great ideas into beatiful and functional products.`,
  paragraphThree: `Put simply I am a developer because want to be better today than yesterday and these project below are a great demostration of the that.`,
  resume: 'https://drive.google.com/file/d/1bS2dEf0z2BkwhhgfBZfLWzPGRvwM5CuL/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'devhunter.jpg',
    title: 'DevHunter Web Platform',
    info: `A full-stack web platform for developers to showcase their projects and collaborate to learn and improve skills.`,
    info2: `The client side was built using CSS Modules, React, React Router & Apollo Client w/ GraphQL. The API was created using Strapi, a headless CMS and data is stored in a PostgreSQL database.`,
    url: 'https://dev-hunter.netlify.app/',
    repo: 'https://github.com/airoble-1/Developer-Showcase-Client', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'cocktail_db.jpg',
    title: 'React Gallery App',
    info: `A lightweight React web application that retrieves cocktail data from public API and consumes in the front-end. Ability to search for a particular cocktail and see details including instructions on how to make and what ingredients to add. Built from John Smilga's React course.`,
    info2: `CSS , React, React Router`,
    url: 'https://the-react-cocktails-db.netlify.app/',
    repo: 'https://github.com/airoble-1/reactjs-cocktail-api', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'space_tourism.png',
    title: 'Space Tourism Website',
    info: `Developed and deployed responsive and accessible landing page following design specifications on Frontend Mentor. The goal is to improve my web layout skills by building a realistic project and add some interactivity with JavaScript. `,
    info2: `HTML, SCSS, JavaScript`,
    url: 'https://space-tourism-99.netlify.app/html/',
    repo: 'https://github.com/airoble-1/Frontend_Mentor_Challenges/tree/main/space-tourism-website-main', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'webapp_dashboard.jpg',
    title: 'WebApp Dashboard',
    info: 'A beautiful and responsive web dashboard complete with JavaScript-driven charts and graphs. User settings are saved in local storage.',
    info2: 'HTML, SASS, JavaScript, Chart.js',
    url: 'https://airoble-1.github.io/web_app_dashboard_v3.2/',
    repo: 'https://github.com/airoble-1/web_app_dashboard_v3.2/tree/gh-pages', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'phrase_hunter.jpg',
    title: 'Phrase Hunter - OOP',
    info: 'Here is a fun, guess the phrase game. I built this after being introduced to object-oriented JavaScript and the theories of OOP in order to create code that is more readable, better organized easily maintained.',
    info2: 'HTML, SASS, JavaScript',
    url: 'https://airoble-1.github.io/Phrase-Hunter-Game-Show-App/',
    repo: 'https://github.com/airoble-1/Phrase-Hunter-Game-Show-App/tree/gh-pages', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Want to get in touch? Awesome!',
  btn: 'Email Me',
  email: 'airoble1@myseneca.ca',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/ahmedroble',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/airoble-1',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
