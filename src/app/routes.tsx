import { createBrowserRouter } from "react-router";
import Home from "./components/Home";
import ProjectPage from "./components/ProjectPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/project/:slug",
    Component: ProjectPage,
  },
]);
