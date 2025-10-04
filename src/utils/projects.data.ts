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
  category: "web" | "mobile" | "fullstack";
}

export const projectsData: Project[] = [
  {
    id: "1",
    title: "WeLearn - Web based sorting algorithms and binary operation game",
    description:
      "A Software Engineering 2 Project. This MERN stack application is an interactive quiz platform designed to help students and enthusiasts learn and practice sorting algorithms and binary operations through engaging, structured quizzes.",
    technologies: ["MongoDB", "ExpressJS", "React", "Node.js", "Tailwind"],
    liveUrl: "https://welearngame.vercel.app",
    githubUrl: "https://github.com/Adrian9502/WeLearn-SE2",
    imageUrl:
      "https://github.com/Adrian9502/WeLearn-SE2/blob/main/image.png?raw=true",
    featured: true,
    category: "fullstack",
  },
  {
    id: "2",
    title: "Arise - Game Review",
    description:
      "This is my first website project and also this is our first website project in school at 2nd year college. Finished - February 13, 2024",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://arise-game-review.vercel.app",
    githubUrl: "https://github.com/Adrian9502/Arise-Game-Review",
    imageUrl:
      "https://github.com/Adrian9502/Arise-Game-Review/blob/main/image_2024-09-01_214035526.png?raw=true",
    featured: false,
    category: "web",
  },
  {
    id: "3",
    title: "QuickBuy - E-Commerce",
    description:
      "An e-commerce website built with React, Tailwind CSS, and Redux uses an API to enable users to browse products, view details, and manage their shopping cart. It features a responsive design with product categories, a search function, and easy cart management.",
    technologies: ["React", "Tailwind", "Redux"],
    liveUrl: "https://react-e-commerce-deploy2-quickbuy.vercel.app",
    githubUrl: "https://github.com/Adrian9502/react-e-commerce",
    imageUrl:
      "https://github.com/Adrian9502/react-e-commerce/blob/main/img.png?raw=true",
    featured: true,
    category: "web",
  },
  {
    id: "4",
    title: "MERN - Advance Auth",
    description:
      "This is a simple authentication system built with the MERN stack (MongoDB, Express, React, Node.js) and styled using Tailwind CSS. The system supports user registration, email verification, and password recovery.",
    technologies: ["MongoDB", "ExpressJS", "React", "Node.js", "Tailwind"],
    liveUrl: "https://mern-advance-auth-system.vercel.app/login",
    githubUrl: "https://github.com/Adrian9502/mern-advance-auth-system",
    imageUrl:
      "https://github.com/Adrian9502/mern-advance-auth-system/blob/main/preview/login.png?raw=true",
    featured: true,
    category: "fullstack",
  },
  {
    id: "5",
    title: "Datkilab - Reverse your words",
    description:
      "Flip your words and mess with your friends! Watch your text get reversed. It's a fun way to confuse your group chats and have a laugh!",
    technologies: ["React", "Tailwind"],
    liveUrl: "https://react-datkilab.vercel.app",
    githubUrl: "https://github.com/Adrian9502/react-datkilab",
    imageUrl:
      "https://github.com/Adrian9502/react-datkilab/blob/main/image_2024-12-12_110522495.png?raw=true",
    featured: false,
    category: "web",
  },
  {
    id: "6",
    title: "MERN Blog App",
    description:
      "A basic blog app using the MERN stack (MongoDB, Express, React, Node.js) lets users create, read, update, and delete blog posts.",
    technologies: ["MongoDB", "ExpressJS", "React", "Node.js", "Tailwind"],
    liveUrl: "https://mern-blog-app-with-tailwind-frontend.vercel.app",
    githubUrl: "https://github.com/Adrian9502/mern-blog-app-with-tailwind",
    imageUrl:
      "https://github.com/Adrian9502/mern-blog-app-with-tailwind/blob/main/mern.png?raw=true",
    featured: true,
    category: "fullstack",
  },
  {
    id: "7",
    title: "BakeMart - Cafe and Bakery",
    description:
      "I created this website UI for my Graphic Design subject, using React and Tailwind CSS for its development.",
    technologies: ["React", "Tailwind"],
    liveUrl: "https://bakemart-cafe-and-bakery-deploy.vercel.app/",
    githubUrl: "https://github.com/Adrian9502/bakemart-cafe-and-bakery",
    imageUrl:
      "https://github.com/Adrian9502/bakemart-cafe-and-bakery/blob/main/preview/1.png?raw=true",
    featured: false,
    category: "web",
  },
  {
    id: "8",
    title: "Youtube Clone React",
    description:
      "This project is a simple YouTube clone made with React and Tailwind CSS, using an API to allow users to search for and watch videos, as well as browse available content.",
    technologies: ["React", "Tailwind"],
    liveUrl: "https://react-tailwind-youtube-clone-kohl.vercel.app",
    githubUrl: "https://github.com/Adrian9502/react-tailwind-youtube-clone",
    imageUrl:
      "https://github.com/Adrian9502/react-tailwind-youtube-clone/blob/main/yt.png?raw=true",
    featured: false,
    category: "web",
  },
  {
    id: "9",
    title: "Taste Bites - Recipe App 1",
    description:
      "This is a React-based application that uses an API to let users search for recipes and display them by category or region. Built with Bootstrap and Hero Patterns.",
    technologies: ["React", "Bootstrap"],
    liveUrl: "https://react-recipe-app-with-api-vercel.vercel.app",
    githubUrl: "https://github.com/Adrian9502/react-recipe-app-with-api",
    imageUrl:
      "https://github.com/Adrian9502/react-recipe-app-with-api/blob/main/thumb1.png?raw=true",
    featured: false,
    category: "web",
  },
  {
    id: "10",
    title: "Algorithm Quiz Game",
    description:
      "Prototype from our Software Engineering 1 subject. It aims to teach students how algorithms and binary operations work.",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://js-quiz-game-pixel-theme.vercel.app",
    githubUrl: "https://github.com/Adrian9502/js-quiz-game-pixel-theme",
    imageUrl:
      "https://github.com/Adrian9502/js-quiz-game-pixel-theme/blob/main/github-img/image3.png?raw=true",
    featured: false,
    category: "web",
  },
  {
    id: "11",
    title: "Portfolio Template - Glitch",
    description:
      "This is the mini project i've created with purple theme and glitch,flick effect animation with customized glowing cursor.",
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
    id: "12",
    title: "Facebook Clone",
    description:
      "A simple Facebook clone built with React, Tailwind CSS, React Icons, and React Loader Spinner. The app features a header, sidebar, main content area, and a contacts section on the right.",
    technologies: ["React", "Tailwind"],
    liveUrl: "https://react-tailwind-facebook-clone.vercel.app",
    githubUrl: "https://github.com/Adrian9502/react-tailwind-facebook-clone",
    imageUrl:
      "https://github.com/Adrian9502/react-tailwind-facebook-clone/blob/main/fb.png?raw=true",
    featured: false,
    category: "web",
  },
  {
    id: "13",
    title: "Expense Tracker",
    description:
      "This React app helps you track your expenses and income. You can add transaction details and see them updated in real time on a chart. A list of transactions is also displayed below the chart.",
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
    id: "14",
    title: "React 20 Exercises App",
    description:
      "This project is a collection of 20 simple React exercises that demonstrate various concepts and functionalities in React. Each component showcases a different feature or tool, providing a comprehensive overview of practical React use cases.",
    technologies: ["React", "Tailwind"],
    liveUrl: "https://react-20-exercises-vercel-deployment.vercel.app",
    githubUrl: "https://github.com/Adrian9502/react-20-exercises",
    imageUrl:
      "https://github.com/Adrian9502/react-20-exercises/blob/main/image_2024-08-31_204614257.png?raw=true",
    featured: false,
    category: "web",
  },
  {
    id: "15",
    title: "Chef Bytes - Recipe App 2",
    description:
      "This Recipe App lets users search for recipes instantly as they type. Users can see recipe details, including ingredients, and add recipes to their favorites. They can also view and remove recipes from their favorites list.",
    technologies: ["React", "Tailwind"],
    liveUrl: "https://react-tailwind-recipe-app-2-vercel-deploy.vercel.app",
    githubUrl: "https://github.com/Adrian9502/react-tailwind-recipe-app-2",
    imageUrl:
      "https://github.com/Adrian9502/react-tailwind-recipe-app-2/blob/main/img.png?raw=true",
    featured: false,
    category: "web",
  },
  {
    id: "16",
    title: "To Do List - React",
    description:
      "This project is a simple todo list application built using React + Vite and Bootstrap. Understanding how useState work in ReactJS",
    technologies: ["React", "Bootstrap"],
    liveUrl: "https://todolist-vercel-five.vercel.app",
    githubUrl: "https://github.com/Adrian9502/react-to-do-list",
    imageUrl:
      "https://github.com/Adrian9502/react-to-do-list/blob/main/thumbnail.png?raw=true",
    featured: false,
    category: "web",
  },
  {
    id: "17",
    title: "Weather App",
    description:
      "This project is a simple weather application built using React and the OpenWeather API. It allows users to search for and view the current weather conditions in any city around the world.",
    technologies: ["React", "Bootstrap"],
    liveUrl: "https://weather-app-vercel-sepia.vercel.app",
    githubUrl: "https://github.com/Adrian9502/react-weather-app",
    imageUrl:
      "https://github.com/Adrian9502/react-weather-app/blob/main/image_2024-09-01_125741737.png?raw=true",
    featured: false,
    category: "web",
  },
  {
    id: "18",
    title: "Color Picker App",
    description:
      "A simple Color Picker application built with React. This app allows users to select and view different colors. Understanding how useState work in ReactJS",
    technologies: ["React", "CSS"],
    liveUrl: "https://react-color-picker-iota.vercel.app",
    githubUrl: "https://github.com/Adrian9502/react-color-picker",
    imageUrl:
      "https://github.com/Adrian9502/react-color-picker/blob/main/image_2024-09-22_203349362.png?raw=true",
    featured: false,
    category: "web",
  },
  {
    id: "19",
    title: "Digital Clock and Date",
    description:
      "JavaScript digital clock and date using dayjs external library",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://js-digital-clock-and-date.vercel.app",
    githubUrl: "https://github.com/Adrian9502/JS-digital-clock-and-date",
    imageUrl:
      "https://github.com/Adrian9502/JS-digital-clock-and-date/blob/main/thumbnail.png?raw=true",
    featured: false,
    category: "web",
  },
  {
    id: "20",
    title: "Youtube Clone - CSS",
    description:
      "Made from YouTube tutorial (supersimpleDev) 6 hours HTML, CSS course. I've learned a lot from this project and understand how css work.",
    technologies: ["HTML", "CSS"],
    liveUrl: "https://adrian9502.github.io/YouTube-Clone/",
    githubUrl: "https://github.com/Adrian9502/YouTube-Clone",
    imageUrl:
      "https://github.com/Adrian9502/YouTube-Clone/blob/main/youtube.png?raw=true",
    featured: false,
    category: "web",
  },
  {
    id: "21",
    title: "Weather App - JavaScript",
    description:
      "A weather app built with vanilla JavaScript that fetches real-time weather data from an API, helping me understand how fetching works.",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://adrian9502.github.io/JS-Weather-app/",
    githubUrl: "https://github.com/Adrian9502/JS-Weather-app",
    imageUrl:
      "https://github.com/Adrian9502/JS-Weather-app/blob/main/image_2024-09-01_202617828.png?raw=true",
    featured: false,
    category: "web",
  },
  {
    id: "22",
    title: "To Do List - JavaScript",
    description:
      "Simple JavaScript To-Do List app to manage tasks efficiently.",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://js-to-do-list-vert.vercel.app",
    githubUrl: "https://github.com/Adrian9502/JS-ToDo-List",
    imageUrl:
      "https://github.com/Adrian9502/JS-ToDo-List/blob/main/image_2024-09-01_205205278.png?raw=true",
    featured: false,
    category: "web",
  },
  {
    id: "23",
    title: "Snake Game - JavaScript",
    description: "A simple Snake game built with HTML, CSS, and JavaScript",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://js-quiz-game-pixel-theme.vercel.app",
    githubUrl: "https://github.com/Adrian9502/JS-Snake-Game",
    imageUrl:
      "https://github.com/Adrian9502/JS-Snake-Game/blob/main/image_2024-09-01_213726063.png?raw=true",
    featured: false,
    category: "web",
  },
  {
    id: "24",
    title: "Rock-Paper-Scissors",
    description: "Simple rock paper scissors in javascript.",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://js-rock-paper-scissors-ruddy.vercel.app",
    githubUrl: "https://github.com/Adrian9502/JS-rock-paper-scissors",
    imageUrl:
      "https://github.com/Adrian9502/js-rock-paper-scissors/blob/main/img-thumb/2.png?raw=true",
    featured: false,
    category: "web",
  },
  {
    id: "25",
    title: "Amazon clone - Vanilla JS",
    description:
      "This Amazon clone project, inspired by a YouTube tutorial, uses the Fetch API and covers concepts like async/await, promises, and URL parameters. It significantly boosted my JavaScript skills.",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://js-amazon-clone.vercel.app",
    githubUrl: "https://github.com/Adrian9502/js-amazon-clone",
    imageUrl:
      "https://github.com/Adrian9502/js-amazon-clone/blob/main/img-thumb/1.png?raw=true",
    featured: false,
    category: "web",
  },
];
