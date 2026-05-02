import { createHashRouter } from "react-router";
import Home from "./components/Home";
import ProjectPage from "./components/ProjectPage";

export const router = createHashRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/project/:slug",
    Component: ProjectPage,
  },
]);
