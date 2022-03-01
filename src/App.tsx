import { Route, Routes } from "react-router-dom";
import { AppShell } from "@mantine/core";
import Navbar from "./components/Navbar";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import "./styles/App.scss";

const App = () => {
  return (
    <AppShell
      padding="md"
      header={<Navbar></Navbar>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<div>about</div>} />
        <Route path="/yut" element={<div>Yut</div>} />
        <Route path="/blog" element={<div>blogs</div>} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </AppShell>
  );
};

export default App;
