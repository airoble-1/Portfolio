import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Ahmed Roble | Web Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my Portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, My name is',
  name: 'Ahmed',
  subtitle: ' I am an aspiring Web Developer',
  cta: 'Find out more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: `Hi I'm Ahmed a web developer with a passion for JavaScript. Learning to code and building web applications has been the most difficult yet rewarding undertaking in my life. I am driven by the constant challenge of finding solutions to problems and see it as an oppurtunity for growth. Over the course of my journey I've learned and practiced with core technologies such as HTML, CSS & Javascript and more modern tech like React.`,
  paragraphTwo: `But the journey does not end there! I'm working on improving my React skills with projects and I'm looking to pickup a framework like Next.js in the near future. My long term goal is to become a full stack developer able to transform great ideas into beatiful and functional products.`,
  paragraphThree: `Put simply I am a developer because want to be better today than yesterday and these project below are a great demostration of the that.`,
  resume: 'https://drive.google.com/file/d/1UfOCuJlXvYmznW32j9BXCYp3Nk-OcPcW/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'react-gallery-app.jpg',
    title: 'React Gallery App',
    info: `A lightweight gallery app that utilizes React library and the handy Create React App tool. Data is fetched from the Flickr API and displayed in the app. I also got the opportunity to work with a thrid-party library like React Router to manage routes.`,
    info2: `React, Context API, SASS`,
    url: 'https://react-app-gallery-ahmed.netlify.app/',
    repo: 'https://github.com/airoble-1/React-Gallery-App', // if no repo, the button will not show up
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
  {
    id: nanoid(),
    img: 'interactive_form.jpg',
    title: 'Interactive Form',
    info: 'A customized form for collecting information from attendees for a fictional conference. One of my first projects using JavaScript to interact with the DOM. It also comes fitted with client-side validation using regular expressions and implements good accessibility practices.',
    info2: 'HTML, SASS, JavaScript',
    url: 'https://airoble-1.github.io/Interactive-Form',
    repo: 'https://github.com/airoble-1/Interactive-Form/tree/gh-pages', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Want to get in touch? Awesome!',
  btn: 'Email Me',
  email: 'airoble2019@gmail.com',
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
