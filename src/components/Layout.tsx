import { Route, Routes } from "react-router-dom";
import Header from "./Header/Header";

import routes from "../routes";
import Dashboard from "../screens/Dashboard";
const Layout = () => {
  return (
    <div>
      <Header />

      <div className={` bg-white text-white overflow-hidden`}>
        {routes.map((route, i) => {
          return <route.component key={i} />;
        })}
      </div>
    </div>
  );
};

export default Layout;
