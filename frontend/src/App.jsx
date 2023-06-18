import { useRoutes } from "react-router-dom";
import { routeConfig } from "./routes";

export const App = () => {
  return useRoutes(routeConfig);
};
