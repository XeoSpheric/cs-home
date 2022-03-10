import { Route, Routes } from "react-router-dom";
import { AppShell } from "@mantine/core";
import Navbar from "./components/Navbar";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import "./styles/App.scss";
import Yut from "./pages/Yut/Yut";
import Terms from "./pages/Terms";
import Blog from "./pages/Blog";

const App = () => {
  return (
    <AppShell
      padding="md"
      header={<Navbar></Navbar>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Blog />} />
        <Route path="/yut" element={<Yut />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </AppShell>
  );
};

export default App;
