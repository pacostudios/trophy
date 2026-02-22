import { Footer } from "./Footer";
import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";

const MainLayout = () => {
  return (
    <div className="layout min-h-screen flex flex-col">
      <Navbar />
      <main className="content flex-1 w-full overflow-x-hidden">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
