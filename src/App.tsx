import { AppShell } from "@mantine/core";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Profile from "./pages/Profile";

const App = () => {
  return (
    <AppShell
      padding="md"
      header={<Navbar></Navbar>}
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/about" element={<div>about</div>} />
        <Route path="/blog" element={<div>blogs</div>} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </AppShell>
  );
};

export default App;
