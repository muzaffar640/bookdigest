import { Header } from "./components/Header";
import { SideBar } from "./components/SideBar";
import { Outlet } from "react-router-dom";
import { Flowbite } from "flowbite-react";
export const Layout = () => {
  return (
    <div className="h-screen p-5 bg-white dark:bg-gray-900 antialiased">
      <Flowbite>
        <Header />
        <SideBar />
        <Outlet />
      </Flowbite>
    </div>
  );
};
