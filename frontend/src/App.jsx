import "./App.css";
import { Header } from "./components/Header";
import { SideBar } from "./components/SideBar";
import { Flowbite } from "flowbite-react";

function App() {
  return (
    <>
      <div className="p-5 bg-white dark:bg-gray-900 antialiased">
        <Flowbite>
          <Header />
          <SideBar />
        </Flowbite>
      </div>
    </>
  );
}

export default App;
