import Home from "../screens/Home";
import About from "../screens/About";
import Projects from "../screens/Projects";
import Project from "../screens/Project";
import Components from "../screens/Components";
import Page404 from "../screens/Page404";
import Contact from "../screens/Contact";
import Skills from "../screens/Skills";
/**
 * ⚠ These are internal routes!
 * They will be rendered inside the app, using the default `containers/Layout`.
 * If you want to add a route to, let's say, a landing page, you should add
 * it to the `App`'s router, exactly like `Login`, `CreateAccount` and other pages
 * are routed.
 *
 * If you're looking for the links rendered in the SidebarContent, go to
 * `routes/sidebar.js`
 */
const routes = [
  {
    path: "/", // the url
    component: Home, // view rendered
  },
  {
    path: "about", // the url
    component: About, // view rendered
  },
  {
    path: "skills", // the url
    component: Skills, // view rendered
  },
  // {
  //   path: "components", // the url
  //   component: Components, // view rendered
  // },
  {
    path: "projects", // the url
    component: Projects, // view rendered
  },
  {
    path: "contact", // the url
    component: Contact, // view rendered
  },
  {
    path: "projects/:projectName", // the url
    component: Project, // view rendered
  },
  // {
  //   path: "/404",
  //   component: Page404,
  // },
];

export default routes;
