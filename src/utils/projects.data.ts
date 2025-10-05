export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl: string;
  imageUrl: string;
  featured: boolean;
  category: "web" | "mobile" | "fullstack" | "Frontend" | "Backend";
}

export const projectsData: Project[] = [
  {
    id: "1",
    title: "WikaTalk – Filipino Dialect Interpreter",
    description:
      "A feature-rich thesis project: a mobile app for translating and learning 10 Filipino dialects, built with React Native and Express.js. It combines NLP-powered translation, OCR text scanning, pronunciation guides, and gamified learning with coins, hints, and progress tracking for an engaging language experience.",
    technologies: [
      "React Native (Expo)",
      "TypeScript",
      "Express.js",
      "MongoDB",
      "Zustand",
      "OCR",
      "NLP",
    ],
    liveUrl: "https://wikatalk.vercel.app/",
    githubUrl:
      "https://github.com/Adrian9502/wikatalk-thesis-speech-interpreter",
    imageUrl:
      "https://github.com/Adrian9502/wikatalk-thesis-speech-interpreter/raw/main/web-ui.png",
    featured: true,
    category: "mobile",
  },

  {
    id: "2",
    title: "WeLearn – Web-Based Sorting Algorithms and Binary Operation Game",
    description:
      "An interactive MERN stack quiz platform designed to help students and enthusiasts learn sorting algorithms and binary operations through engaging, structured quizzes. Built as a Software Engineering 2 project.",
    technologies: ["MongoDB", "ExpressJS", "React", "Node.js", "Tailwind"],
    liveUrl: "https://welearngame.vercel.app",
    githubUrl: "https://github.com/Adrian9502/WeLearn-SE2",
    imageUrl:
      "https://github.com/Adrian9502/WeLearn-SE2/blob/main/image.png?raw=true",
    featured: true,
    category: "fullstack",
  },
  {
    id: "3",
    title: "Arise – Game Review Website",
    description:
      "A web project developed as a first college website assignment, showcasing basic front-end structure and design concepts learned during the second year.",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://arise-game-review.vercel.app",
    githubUrl: "https://github.com/Adrian9502/Arise-Game-Review",
    imageUrl:
      "https://github.com/Adrian9502/Arise-Game-Review/blob/main/image_2024-09-01_214035526.png?raw=true",
    featured: false,
    category: "web",
  },
  {
    id: "4",
    title: "QuickBuy – E-Commerce Website",
    description:
      "An e-commerce platform built with React, Tailwind CSS, and Redux that allows users to browse products, view details, and manage their carts. It features product categories, search functionality, and a responsive design.",
    technologies: ["React", "Tailwind", "Redux"],
    liveUrl: "https://react-e-commerce-deploy2-quickbuy.vercel.app",
    githubUrl: "https://github.com/Adrian9502/react-e-commerce",
    imageUrl:
      "https://github.com/Adrian9502/react-e-commerce/blob/main/img.png?raw=true",
    featured: true,
    category: "web",
  },
  {
    id: "5",
    title: "MERN – Advanced Authentication System",
    description:
      "An authentication system built with the MERN stack and Tailwind CSS, supporting user registration, email verification, and password recovery.",
    technologies: ["MongoDB", "ExpressJS", "React", "Node.js", "Tailwind"],
    liveUrl: "https://mern-advance-auth-system.vercel.app/login",
    githubUrl: "https://github.com/Adrian9502/mern-advance-auth-system",
    imageUrl:
      "https://github.com/Adrian9502/mern-advance-auth-system/blob/main/preview/login.png?raw=true",
    featured: true,
    category: "fullstack",
  },
  {
    id: "6",
    title: "Datkilab – Reverse Your Words",
    description:
      "A fun web app that reverses any text input, letting users playfully confuse their friends and group chats.",
    technologies: ["React", "Tailwind"],
    liveUrl: "https://react-datkilab.vercel.app",
    githubUrl: "https://github.com/Adrian9502/react-datkilab",
    imageUrl:
      "https://github.com/Adrian9502/react-datkilab/blob/main/image_2024-12-12_110522495.png?raw=true",
    featured: false,
    category: "web",
  },
  {
    id: "7",
    title: "MERN Blog App",
    description:
      "A basic CRUD blog application built with the MERN stack, allowing users to create, read, update, and delete posts.",
    technologies: ["MongoDB", "ExpressJS", "React", "Node.js", "Tailwind"],
    liveUrl: "https://mern-blog-app-with-tailwind-frontend.vercel.app",
    githubUrl: "https://github.com/Adrian9502/mern-blog-app-with-tailwind",
    imageUrl:
      "https://github.com/Adrian9502/mern-blog-app-with-tailwind/blob/main/mern.png?raw=true",
    featured: true,
    category: "fullstack",
  },
  {
    id: "8",
    title: "BakeMart – Café and Bakery Website",
    description:
      "A front-end website UI for a café and bakery, built with React and Tailwind CSS as part of a Graphic Design subject.",
    technologies: ["React", "Tailwind"],
    liveUrl: "https://bakemart-cafe-and-bakery-deploy.vercel.app/",
    githubUrl: "https://github.com/Adrian9502/bakemart-cafe-and-bakery",
    imageUrl:
      "https://github.com/Adrian9502/bakemart-cafe-and-bakery/blob/main/preview/1.png?raw=true",
    featured: false,
    category: "web",
  },
  {
    id: "9",
    title: "YouTube Clone (React)",
    description:
      "A YouTube-like app built with React and Tailwind CSS that lets users search, browse, and watch videos using a public API.",
    technologies: ["React", "Tailwind"],
    liveUrl: "https://react-tailwind-youtube-clone-kohl.vercel.app",
    githubUrl: "https://github.com/Adrian9502/react-tailwind-youtube-clone",
    imageUrl:
      "https://github.com/Adrian9502/react-tailwind-youtube-clone/blob/main/yt.png?raw=true",
    featured: false,
    category: "web",
  },
  {
    id: "10",
    title: "Taste Bites – Recipe App (v1)",
    description:
      "A React application that uses an external API to display recipes by category or region. Designed with Bootstrap and Hero Patterns.",
    technologies: ["React", "Bootstrap"],
    liveUrl: "https://react-recipe-app-with-api-vercel.vercel.app",
    githubUrl: "https://github.com/Adrian9502/react-recipe-app-with-api",
    imageUrl:
      "https://github.com/Adrian9502/react-recipe-app-with-api/blob/main/thumb1.png?raw=true",
    featured: false,
    category: "web",
  },
  {
    id: "11",
    title: "Algorithm Quiz Game",
    description:
      "A prototype quiz game developed for Software Engineering 1 to help students understand how algorithms and binary operations work.",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://js-quiz-game-pixel-theme.vercel.app",
    githubUrl: "https://github.com/Adrian9502/js-quiz-game-pixel-theme",
    imageUrl:
      "https://github.com/Adrian9502/js-quiz-game-pixel-theme/blob/main/github-img/image3.png?raw=true",
    featured: false,
    category: "web",
  },
  {
    id: "12",
    title: "Portfolio Template – Glitch",
    description:
      "A mini portfolio project with a purple glitch-themed interface, flicker animations, and a custom glowing cursor.",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://portfolio-template-with-glitch-animations.vercel.app",
    githubUrl:
      "https://github.com/Adrian9502/portfolio-template-with-glitch-animations",
    imageUrl:
      "https://github.com/Adrian9502/portfolio-template-with-glitch-animations/blob/main/img-thumb/1.png?raw=true",
    featured: false,
    category: "web",
  },
  {
    id: "13",
    title: "Facebook Clone (React)",
    description:
      "A React and Tailwind CSS project replicating Facebook's layout, including a header, sidebar, main feed, and contacts section.",
    technologies: ["React", "Tailwind"],
    liveUrl: "https://react-tailwind-facebook-clone.vercel.app",
    githubUrl: "https://github.com/Adrian9502/react-tailwind-facebook-clone",
    imageUrl:
      "https://github.com/Adrian9502/react-tailwind-facebook-clone/blob/main/fb.png?raw=true",
    featured: false,
    category: "web",
  },
  {
    id: "14",
    title: "Expense Tracker",
    description:
      "A React app that tracks income and expenses in real time, visualized through charts and transaction lists.",
    technologies: ["React", "Tailwind", "Chakra UI", "Apex Chart"],
    liveUrl:
      "https://react-expense-tracker-using-chakra-ui-and-apexchart.vercel.app",
    githubUrl:
      "https://github.com/Adrian9502/react-expense-tracker-using-chakra-ui-and-apexchart",
    imageUrl:
      "https://raw.githubusercontent.com/Adrian9502/react-expense-tracker-using-chakra-ui-and-apexchart/main/img1.png",
    featured: false,
    category: "web",
  },
  {
    id: "15",
    title: "React 20 Exercises App",
    description:
      "A collection of 20 mini React exercises demonstrating various React concepts, hooks, and state management techniques.",
    technologies: ["React", "Tailwind"],
    liveUrl: "https://react-20-exercises-vercel-deployment.vercel.app",
    githubUrl: "https://github.com/Adrian9502/react-20-exercises",
    imageUrl:
      "https://github.com/Adrian9502/react-20-exercises/blob/main/image_2024-08-31_204614257.png?raw=true",
    featured: false,
    category: "web",
  },
  {
    id: "16",
    title: "Chef Bytes – Recipe App (v2)",
    description:
      "A recipe application that lets users search recipes instantly, view ingredients, and manage favorite recipes in real time.",
    technologies: ["React", "Tailwind"],
    liveUrl: "https://react-tailwind-recipe-app-2-vercel-deploy.vercel.app",
    githubUrl: "https://github.com/Adrian9502/react-tailwind-recipe-app-2",
    imageUrl:
      "https://github.com/Adrian9502/react-tailwind-recipe-app-2/blob/main/img.png?raw=true",
    featured: false,
    category: "web",
  },
  {
    id: "17",
    title: "To-Do List (React)",
    description:
      "A simple to-do list app built with React + Vite and Bootstrap, focused on mastering useState and component reactivity.",
    technologies: ["React", "Bootstrap"],
    liveUrl: "https://todolist-vercel-five.vercel.app",
    githubUrl: "https://github.com/Adrian9502/react-to-do-list",
    imageUrl:
      "https://github.com/Adrian9502/react-to-do-list/blob/main/thumbnail.png?raw=true",
    featured: false,
    category: "web",
  },
  {
    id: "18",
    title: "Weather App (React)",
    description:
      "A weather app built with React and the OpenWeather API that displays real-time weather data for cities worldwide.",
    technologies: ["React", "Bootstrap"],
    liveUrl: "https://weather-app-vercel-sepia.vercel.app",
    githubUrl: "https://github.com/Adrian9502/react-weather-app",
    imageUrl:
      "https://github.com/Adrian9502/react-weather-app/blob/main/image_2024-09-01_125741737.png?raw=true",
    featured: false,
    category: "web",
  },
  {
    id: "19",
    title: "Color Picker App",
    description:
      "A simple React app that allows users to select, view, and explore color combinations, emphasizing useState and component updates.",
    technologies: ["React", "CSS"],
    liveUrl: "https://react-color-picker-iota.vercel.app",
    githubUrl: "https://github.com/Adrian9502/react-color-picker",
    imageUrl:
      "https://github.com/Adrian9502/react-color-picker/blob/main/image_2024-09-22_203349362.png?raw=true",
    featured: false,
    category: "web",
  },
  {
    id: "20",
    title: "Digital Clock and Date",
    description:
      "A digital clock and date app built with JavaScript and the Day.js library for accurate time formatting.",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://js-digital-clock-and-date.vercel.app",
    githubUrl: "https://github.com/Adrian9502/JS-digital-clock-and-date",
    imageUrl:
      "https://github.com/Adrian9502/JS-digital-clock-and-date/blob/main/thumbnail.png?raw=true",
    featured: false,
    category: "web",
  },
  {
    id: "21",
    title: "YouTube Clone (HTML/CSS)",
    description:
      "A static front-end clone of YouTube built through a 6-hour HTML and CSS course, designed to reinforce layout and styling fundamentals.",
    technologies: ["HTML", "CSS"],
    liveUrl: "https://adrian9502.github.io/YouTube-Clone/",
    githubUrl: "https://github.com/Adrian9502/YouTube-Clone",
    imageUrl:
      "https://github.com/Adrian9502/YouTube-Clone/blob/main/youtube.png?raw=true",
    featured: false,
    category: "web",
  },
  {
    id: "22",
    title: "Weather App (JavaScript)",
    description:
      "A vanilla JavaScript weather app that fetches real-time weather data from an API, reinforcing the use of Fetch and async/await.",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://adrian9502.github.io/JS-Weather-app/",
    githubUrl: "https://github.com/Adrian9502/JS-Weather-app",
    imageUrl:
      "https://github.com/Adrian9502/JS-Weather-app/blob/main/image_2024-09-01_202617828.png?raw=true",
    featured: false,
    category: "web",
  },
  {
    id: "23",
    title: "To-Do List (JavaScript)",
    description:
      "A basic JavaScript to-do list app that helps users manage daily tasks efficiently.",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://js-to-do-list-vert.vercel.app",
    githubUrl: "https://github.com/Adrian9502/JS-ToDo-List",
    imageUrl:
      "https://github.com/Adrian9502/JS-ToDo-List/blob/main/image_2024-09-01_205205278.png?raw=true",
    featured: false,
    category: "web",
  },
  {
    id: "24",
    title: "Snake Game (JavaScript)",
    description:
      "A simple classic Snake game built using HTML, CSS, and JavaScript.",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://js-quiz-game-pixel-theme.vercel.app",
    githubUrl: "https://github.com/Adrian9502/JS-Snake-Game",
    imageUrl:
      "https://github.com/Adrian9502/JS-Snake-Game/blob/main/image_2024-09-01_213726063.png?raw=true",
    featured: false,
    category: "web",
  },
  {
    id: "25",
    title: "Rock-Paper-Scissors (JavaScript)",
    description:
      "A lightweight web game built with JavaScript for quick and fun interaction.",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://js-rock-paper-scissors-ruddy.vercel.app",
    githubUrl: "https://github.com/Adrian9502/JS-rock-paper-scissors",
    imageUrl:
      "https://github.com/Adrian9502/js-rock-paper-scissors/blob/main/img-thumb/2.png?raw=true",
    featured: false,
    category: "web",
  },
  {
    id: "26",
    title: "Amazon Clone (JavaScript)",
    description:
      "An Amazon-style e-commerce clone built with vanilla JavaScript and the Fetch API, applying async/await, promises, and URL parameter concepts.",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://js-amazon-clone.vercel.app",
    githubUrl: "https://github.com/Adrian9502/js-amazon-clone",
    imageUrl:
      "https://github.com/Adrian9502/js-amazon-clone/blob/main/img-thumb/1.png?raw=true",
    featured: false,
    category: "web",
  },
];
