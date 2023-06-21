import { useState } from "react";
import { Header } from "./components/Header";
import { SideBar } from "./components/SideBar";
import { Outlet } from "react-router-dom";
import { Flowbite } from "flowbite-react";

export const Layout = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <div className="h-screen p-5 bg-white dark:bg-gray-900 antialiased relative">
      <Flowbite>
        <Header isMenuOpen={isMenuOpen} onMenuToggle={setMenuOpen} />
        <div className="flex flex-col md:flex-row-reverse">
          <div className="flex-grow">
            <Outlet />
          </div>
          {isMenuOpen && (
            <div className="fixed inset-0 z-50 bg-gray-900 bg-opacity-50 md:hidden">
              <SideBar />
            </div>
          )}
          {!isMenuOpen && (
            <div className="hidden md:block">
              <SideBar />
            </div>
          )}
        </div>
      </Flowbite>
    </div>
  );
};
