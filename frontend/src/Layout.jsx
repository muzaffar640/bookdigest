import { Header } from "./components/Header";
import { SideBar } from "./components/SideBar";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <Header />
      <SideBar />
      <Outlet />
    </>
  );
};
