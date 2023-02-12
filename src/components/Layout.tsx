import { Route, Routes } from "react-router-dom";
import Header from "./Header/Header";

import routes from "../routes";
import Dashboard from "../screens/Dashboard";
const Layout = () => {
  return (
    <div>
      <Header />

      <div
        style={{
          backgroundImage:
            // "linear-gradient(to right, #0f0c29, #302b63, #24243e)",
            "linear-gradient(to right, #454c50, #1e3b4a, #1f2937)",
        }}
        className={` bg-white dark:bg-primaryDark`}
      >
        {routes.map((route, i) => {
          return <route.component key={i} />;
        })}
      </div>
    </div>
  );
};

export default Layout;
