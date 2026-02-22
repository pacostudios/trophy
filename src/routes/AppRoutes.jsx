import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import { Index } from "../pages/home/Index";
import { TrophiesIndex } from "../pages/trophies/TrophiesIndex";
import { ContactIndex } from "../pages/contact/ContactIndex";
import { SportsIndex } from "../pages/sports/SportsIndex";
import { UniformIndex } from "../pages/uniforms/UniformIndex";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Index />} />
          <Route path="trophies" element={<TrophiesIndex />} />
          <Route path="sports" element={<SportsIndex />} />
          <Route path="uniforms" element={<UniformIndex />} />
          <Route path="contact" element={<ContactIndex />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
