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
  category:
    | "web"
    | "mobile"
    | "fullstack"
    | "desktop"
    | "Frontend"
    | "Backend"
    | ("web" | "mobile" | "fullstack" | "desktop" | "Frontend" | "Backend")[];
}

export const projectsData: Project[] = [
  // wikaTalk
  {
    id: "1",
    title: "WikaTalk – Filipino Dialect Interpreter",
    description:
      "A feature-rich thesis project and monorepo combining a React Native mobile app and a React + Tailwind web platform. Built with Express.js and MongoDB, it leverages NLP for dialect translation, OCR text scanning, pronunciation guides, and gamified learning with coins, hints, and progress tracking—delivering an engaging, multilingual learning experience.",
    technologies: [
      "React Native (Expo)",
      "React",
      "Tailwind CSS",
      "Framer Motion",
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
    category: ["mobile", "fullstack"],
  },
  // weLearn
  {
    id: "2",
    title: "WeLearn – Web-Based Sorting Algorithms and Binary Operation Game",
    description:
      "An interactive MERN stack quiz platform designed to help students and enthusiasts learn sorting algorithms and binary operations through engaging, structured quizzes. Built as a Software Engineering 2 project.",
    technologies: [
      "MongoDB",
      "ExpressJS",
      "React",
      "Node.js",
      "Tailwind",
      "Framer Motion",
      "Zustand",
    ],
    liveUrl: "https://welearngame.vercel.app",
    githubUrl: "https://github.com/Adrian9502/WeLearn-SE2",
    imageUrl:
      "https://github.com/Adrian9502/WeLearn-SE2/blob/main/image.png?raw=true",
    featured: true,
    category: "fullstack",
  },
  // casa vista - hotel reservation
  {
    id: "9",
    title: "Casa Vista – Hotel Reservation System",
    description:
      "A full-featured web-based hotel booking system built with PHP and XAMPP that allows users to browse rooms, make reservations, and manage bookings online. The system includes both customer and admin dashboards for handling room availability, user feedback, and booking records. Designed with a clean, responsive UI and integrated with a MySQL database for real-time data management.",
    technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript", "XAMPP"],
    liveUrl: "",
    githubUrl:
      "https://github.com/Adrian9502/casa-vista-hotel-reservation-system",
    imageUrl:
      "https://github.com/Adrian9502/casa-vista-hotel-reservation-system/blob/main/img-thumb/1.png?raw=true",
    featured: true,
    category: ["web", "fullstack"],
  },
  // MERN Advanced Auth System
  {
    id: "3",
    title: "MERN – Advanced Authentication System",
    description:
      "An authentication system built with the MERN stack and Tailwind CSS, supporting user registration, email verification, and password recovery.",
    technologies: ["MongoDB", "ExpressJS", "React", "Node.js", "Tailwind"],
    liveUrl: "https://mern-advance-auth-system.vercel.app/login",
    githubUrl: "https://github.com/Adrian9502/mern-advance-auth-system",
    imageUrl:
      "https://github.com/Adrian9502/mern-advance-auth-system/blob/main/preview/login.png?raw=true",
    featured: false,
    category: ["web", "fullstack"],
  },
  // MERN Blog App
  {
    id: "4",
    title: "MERN Blog App",
    description:
      "A basic CRUD blog application built with the MERN stack, allowing users to create, read, update, and delete posts.",
    technologies: ["MongoDB", "ExpressJS", "React", "Node.js", "Tailwind"],
    liveUrl: "https://mern-blog-app-with-tailwind-frontend.vercel.app",
    githubUrl: "https://github.com/Adrian9502/mern-blog-app-with-tailwind",
    imageUrl:
      "https://github.com/Adrian9502/mern-blog-app-with-tailwind/blob/main/mern.png?raw=true",
    featured: true,
    category: ["web", "fullstack"],
  },
  // Arise
  {
    id: "5",
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
  // quickBuy
  {
    id: "6",
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
  // ALUtron
  {
    id: "7",
    title: "4-Bit ALU Simulator – Visual Arithmetic Logic Unit",
    description:
      "An interactive educational simulator built with React and ReactFlow that visualizes how a 4-bit Arithmetic Logic Unit works. Users can experiment with binary arithmetic and logic operations (AND, OR, ADD) through a real-time, drag-and-drop interface with animated logic gates and carry operations.",
    technologies: ["React", "TypeScript", "ReactFlow", "Tailwind CSS", "Vite"],
    liveUrl: "https://alutron-alu-simulator.vercel.app/",
    githubUrl: "https://github.com/Adrian9502/ALUtron",
    imageUrl: "https://github.com/Adrian9502/ALUtron/raw/main/display.png",
    featured: false,
    category: "web",
  },
  // Lazada clone ui
  {
    id: "8",
    title: "Lazada Mobile UI Clone – React Native E-Commerce Layout",
    description:
      "A React Native project that replicates the core UI design of the Lazada Mobile App. It includes five fully functional screens—Home, Like, Message, Cart, and Account—demonstrating a modern mobile shopping experience. Each screen showcases product displays, interactive navigation, and reusable styled components built with NativeWind for a clean, responsive interface.",
    technologies: ["React Native", "TypeScript", "NativeWind"],
    liveUrl: "",
    githubUrl: "https://github.com/Adrian9502/react-native-lazada-ui-clone",
    imageUrl:
      "https://github.com/Adrian9502/react-native-lazada-ui-clone/raw/main/overview.png",
    featured: false,
    category: "mobile",
  },

  // RN todo list
  {
    id: "10",
    title: "Todo List (React Native)",
    description:
      "A minimalist task management app built with React Native that lets users create, view, update, and delete tasks. It uses AsyncStorage for persistent local data storage, ensuring tasks remain saved even after app restarts. The interface features clean icons and intuitive controls for managing daily to-dos efficiently on mobile devices.",
    technologies: ["React Native", "React", "AsyncStorage"],
    liveUrl: "",
    githubUrl: "https://github.com/Adrian9502/react-native-todo-list",
    imageUrl:
      "https://github.com/Adrian9502/react-native-todo-list/blob/main/Untitled.png?raw=true",
    featured: false,
    category: "mobile",
  },
  // portfolio 2024
  {
    id: "11",
    title: "Portfolio 2024 (React + Tailwind)",
    description:
      "A personal portfolio website built with React and Tailwind CSS to showcase projects, skills, and achievements. Designed with responsive layouts, smooth Framer Motion animations, and a clean UI that adapts seamlessly across devices. The site includes links to GitHub, LinkedIn, and other profiles for easy access to my work and background.",
    technologies: [
      "React",
      "Tailwind CSS",
      "Vite",
      "Framer Motion",
      "HTML",
      "CSS",
      "JavaScript",
      "Git",
    ],
    liveUrl: "https://johnadrianbonto.vercel.app/",
    githubUrl: "https://github.com/Adrian9502/react-portfolio-2024",
    imageUrl:
      "https://github.com/Adrian9502/react-portfolio-2024/blob/main/image.png?raw=true",
    featured: true,
    category: "web",
  },
  // DESKTOP APPS
  {
    id: "12",
    title: "Inventory System (Java – Silog Express)",
    description:
      "A desktop-based inventory management application developed with Java and NetBeans GUI. It supports full CRUD (Create, Read, Update, Delete) operations for managing product records and integrates with a MySQL database for reliable data storage. The system was built for Silog Express and includes an injector setup for smooth database connectivity.",
    technologies: ["Java", "NetBeans", "MySQL"],
    liveUrl: "",
    githubUrl:
      "https://github.com/Adrian9502/Inventory-System-in-Java-GUI-w-MySQL-Database-",
    imageUrl:
      "https://github.com/Adrian9502/Inventory-System-in-Java-GUI-w-MySQL-Database-/raw/main/img-thumb/2.png",
    featured: false,
    category: ["desktop", "fullstack"],
  },
  {
    id: "13",
    title: "Riven Express Logistic (Java NetBeans)",
    description:
      "A simple warehouse inventory management system developed in Java using NetBeans 17. Built during first-year college, it uses ArrayList to manage stock data without relying on a database. The system supports core CRUD (Create, Read, Update, Delete) operations for tracking and updating raw material inventory efficiently in a local environment.",
    technologies: ["Java", "NetBeans", "ArrayList"],
    liveUrl: "",
    githubUrl:
      "https://github.com/Adrian9502/Inventory-System-without-database",
    imageUrl:
      "https://github.com/Adrian9502/Inventory-System-without-database/raw/main/img-thumb/2.png",
    featured: false,
    category: "desktop",
  },
  // BakeMart
  {
    id: "14",
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
  // Chef Bytes v2
  {
    id: "15",
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
  // Taste Bites
  {
    id: "16",
    title: "Taste Bites – Recipe App (v1)",
    description:
      "A React application that uses an external API to display recipes by category or region. Designed with Bootstrap and Hero Patterns.",
    technologies: ["React", "Bootstrap"],
    liveUrl: "https://tastebitesrecipes.vercel.app/",
    githubUrl: "https://github.com/Adrian9502/react-recipe-app-with-api",
    imageUrl:
      "https://github.com/Adrian9502/react-recipe-app-with-api/blob/main/thumb1.png?raw=true",
    featured: false,
    category: "web",
  },
  // Algorithm Quiz Game
  {
    id: "17",
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
  // Portfolio Template - Glitch
  {
    id: "18",
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
  // Datkilab
  {
    id: "19",
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
  // YouTube Clone
  {
    id: "20",
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
  // Facebook Clone
  {
    id: "21",
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
  // Expense Tracker
  {
    id: "22",
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
  // React 20 Exercises
  {
    id: "23",
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
  // To-Do List (React)
  {
    id: "24",
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
  // Weather App (React)
  {
    id: "25",
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
  // Color Picker App
  {
    id: "26",
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
  // Digital Clock and Date
  {
    id: "27",
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
  // YouTube Clone (HTML/CSS)
  {
    id: "28",
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
  // Weather App (JavaScript)
  {
    id: "29",
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
  // To-Do List (JavaScript)
  {
    id: "30",
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
  // Snake Game (JavaScript)
  {
    id: "31",
    title: "Snake Game (JavaScript)",
    description:
      "A simple classic Snake game built using HTML, CSS, and JavaScript.",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://js-snake-game-eta.vercel.app/",
    githubUrl: "https://github.com/Adrian9502/JS-Snake-Game",
    imageUrl:
      "https://github.com/Adrian9502/JS-Snake-Game/blob/main/image_2024-09-01_213726063.png?raw=true",
    featured: false,
    category: "web",
  },
  // Rock-Paper-Scissors (JavaScript)
  {
    id: "32",
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
  // Amazon Clone (JavaScript)
  {
    id: "33",
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
  // Ruby on rails todo list app with postgres database
  {
    id: "34",
    title: "To-Do Lists (Ruby on Rails)",
    description:
      "A fully functional To-Do List app built with Ruby on Rails and PostgreSQL. Implements CRUD functionality, MVC architecture, and Tailwind CSS styling. Deployed on Render with a cloud database (Neon Postgres).",
    technologies: ["Ruby on Rails", "PostgreSQL", "Tailwind CSS", "Render"],
    liveUrl: "https://rails-crash-course-todo-list.onrender.com/",
    githubUrl: "https://github.com/Adrian9502/rails-crash-course-todo-list",
    imageUrl:
      "https://raw.githubusercontent.com/Adrian9502/rails-crash-course-todo-list/main/image.png",
    featured: false,
    category: "web",
  },
];
