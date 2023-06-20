import { useState } from "react";
import { Header } from "./components/Header";
import { SideBar } from "./components/SideBar";
import { Outlet } from "react-router-dom";
import { Flowbite } from "flowbite-react";

export const Layout = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  console.log("ismenuopen", isMenuOpen);
  return (
    <div className="h-screen p-5 bg-white dark:bg-gray-900 antialiased">
      <Flowbite>
        <Header isMenuOpen={isMenuOpen} onMenuToggle={setMenuOpen} />
        <SideBar
          className={`z-40  ease-in-out duration-300 ${
            isMenuOpen
              ? "translate-x-0 "
              : "-translate-x-full !bg-transparent !dark:bg-red-400"
          }`}
        />
        <Outlet />
      </Flowbite>
    </div>
  );
};
