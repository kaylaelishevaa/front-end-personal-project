import { useState } from "react";
import Header from "./components/01-Header";
import Sidebar from "./components/02-Sidebar";
import Home from "./pages/Home";

export default function App() {
  const [isSidebarOpen, setSidebarOpen] = useState<boolean>(false);

  const toggleSidebar = (): void => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="font-jost bg-beige-white text-dark-black">
      <Header toggleSidebar={toggleSidebar} />

      <div className="relative flex"> {isSidebarOpen && <Sidebar />}</div>

      <main className="w-full">
        <Home toggleSidebar={toggleSidebar} />
      </main>
    </div>
  );
}
