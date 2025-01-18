/** @format */

import {
  android,
  backend,
  calsnap,
  threejs_portfolio,
  comingSoon,
  creator,
  css,
  dypatil,
  figma,
  git,
  html,
  javascript,
  jobit,
  lcit,
  mobile,
  mongodb,
  nodejs,
  python,
  reactjs,
  redux,
  threejs,
  tradebulls,
  tripguide,
  typescript,
  web,
  zype,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "React Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Data Analyst",
    icon: creator,
  },
  {
    title: "Data Engineer",
    icon: creator,
  },
  {
    title: "Data Scientist",
    icon: creator,
  },
  {
    title: "ML Engineer",
    icon: creator,
  },
  {
    title: "Business Analyst",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Android",
    icon: android,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Software Developer",
    company_name: "Tradebulls Securities Pvt. Ltd.",
    icon: tradebulls,
    iconBg: "#383E56",
    date: "Dec 2020 - March 2023",
    points: [
      " Built a cross-platform mobile app using React Native, achieving over 100K downloads on the Play Store",
      " Implemented API calls and data handling using Axios and Redux to enhance app functionality.",
      "Improved app performance by creating reusable components and incorporating TypeScript for efficient coding practices.",
      "Conducted debugging, bug fixing, and thorough testing to ensure smooth app functionality and reliability.",
    ],
  },
  {
    title: "SDE - 1",
    company_name: "Easy Platform Services Pvt. Ltd.",
    icon: zype,
    iconBg: "#383E56",
    date: "Apr 2023 - Apr 2024",
    points: [
      "Designed and updated Android, iOS, and Web modules with React Native based on product and design team inputs.",
      "Worked closely with design, backend, QA, and product teams, contributing to agile processes and daily stand-ups.",
      "Addressed bugs reported by QA/users and conducted Proof of Concepts to explore and adopt new tools and techniques.",
      " Maintained detailed project documentation for knowledge sharing and process transparency across teams.",
    ],
  },
];

const qualifications = [
  {
    title: "Bachelors in Computer Engg.",
    company_name:
      "Dr. D. Y. Patil School of Engineering and Technology, Pune, India",
    icon: dypatil,
    iconBg: "#383E56",
    date: "Batch of 2020",
    points: [],
  },
  {
    title: "Post Graduate Diploma in A.I. & Data Science",
    company_name: "Loyalist College in Toronto, Canada",
    icon: lcit,
    iconBg: "#383E56",
    date: "Currently Pursuing",
    points: [],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Cal Snap",
    description:
      "Cal-Snap is a web application designed to assist users in tracking their daily caloric intake and exercise routines.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
    ],
    image: calsnap,
    source_code_link: "https://github.com/arish-panjwani/cal-snap-react",
  },
  {
    name: "3D Portfolio Website",
    description:
      "This is a 3D portfolio website made using react and three.js. It has a beautiful UI and is responsive and full of animations.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "three.js",
        color: "pink-text-gradient",
      },
    ],
    image: threejs_portfolio,
    source_code_link:
      "https://github.com/arish-panjwani/3D_developer_portfolio",
  },
  {
    name: "More Coming Soon...",
    description:
      "Fresh new innovative front-end, Data Visualisation and Data Science Projects coming soon!!!! Stay tuned for more updates.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "three.js",
        color: "pink-text-gradient",
      },
      {
        name: "python",
        color: "orange-text-gradient",
      },
      {
        name: "powerBI",
        color: "green-text-gradient",
      },
    ],
    image: comingSoon,
  },
  // {
  //   name: "Job IT",
  //   description:
  //     "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "restapi",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "scss",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: jobit,
  //   source_code_link: "https://github.com/",
  // },
  // {
  //   name: "Trip Guide",
  //   description:
  //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/",
  // },
];

export {
  experiences,
  projects,
  qualifications,
  services,
  technologies,
  testimonials,
};
