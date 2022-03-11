import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import Yut from "./pages/Yut/Yut";
import Terms from "./pages/Terms";
import Blog from "./pages/Blog";
import { useState } from "react";

const App = () => {
  const [dark, setDark] = useState<boolean>(false);

  const handleSetDark = (isDark: boolean) => {
    setDark(isDark)
  }

  return (
    <>
    <div className={dark ? 'dark' : ''}>
      <header>
        <Navbar isDark={dark} setViewMode={handleSetDark} />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Blog />} />
          <Route path="/yut" element={<Yut />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </main>
    </div>
    </>
  );
};

export default App;
