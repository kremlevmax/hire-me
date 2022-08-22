import visitAfrica from "../../images/visitAfrica.png";
import adoptGoodBoy from "../../images/adoptGoodBoy.png";
import todoList from "../../images/todoList.png";
import reactogram from "../../images/reactogram.png";
import blog from "../../images/blog.png";
import lusaka from "../../images/lusaka.png";

export const projectCards = [
  {
    screenshot: lusaka,
    name: "Lusaka School page",
    tools: ["NextJS", "HTML", "CSS Modules", "Sass"],
    description:
      "Responsive Landing page built with NextJS, Sass and CSS Modules",
    source: "https://github.com/kremlevmax/lusaka",
    online: "https://lusaka.vercel.app/",
  },
  {
    screenshot: blog,
    name: "Blog app",
    tools: [
      "React",
      "Redux Toolkit",
      "HTML",
      "CSS",
      "Firebase Firestore",
      "Firebase Cloud Storage",
    ],
    description:
      "A blog application with implementation of firebase authentication and keeping of blog posts in firebase cloud store",
    source: "https://github.com/kremlevmax/blog-app-redux-toolkit",
    online: "https://kremlevmax.github.io/blog-app-redux-toolkit/",
  },
  {
    screenshot: reactogram,
    name: "Reactogram",
    tools: [
      "React",
      "HTML",
      "CSS",
      "Firebase Firestore",
      "Firebase Cloud Storage",
      "Framer Motion",
    ],
    description:
      "Upload and view your favorite pictures at this responsive page",
    source: "https://github.com/kremlevmax/reactogram",
    online: "https://kremlevmax.github.io/reactogram/",
  },
  {
    screenshot: todoList,
    name: "ToDo app",
    tools: [
      "React",
      "HTML",
      "CSS",
      "React Router",
      "Firebase Authentication",
      "Cloud Firestore",
    ],
    description:
      "Save your daily routine todos, mark them as done and delete them at this responsive page with Firebase Authentication",
    source: "https://github.com/kremlevmax/todo-list",
    online: "https://kremlevmax.github.io/todo-list/",
  },
  {
    screenshot: visitAfrica,
    name: "Visit Africa",
    tools: ["HTML", "JavaScript", "Sass", "Boxicons"],
    description:
      "Responsive landing page layout with a burger menu and a video background built with HTML, Sass and vanilla JavaScript",
    source: "https://github.com/kremlevmax/visit-africa",
    online: "https://kremlevmax.github.io/visit-africa/",
  },
];
