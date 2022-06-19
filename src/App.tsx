import { Route, Routes } from 'react-router-dom';
import Profile from './pages/Profile';
import Home from './pages/Home';
import Terms from './pages/Terms';
import Blog from './pages/Blog';
import Navbar from './components/Navbar';
import { useUser } from './services/authContext';

const App = () => {
  const { isDarkMode } = useUser();

  return typeof isDarkMode === 'boolean' ? (
    <>
      <div className={isDarkMode ? 'dark' : ''}>
        <header>
          <Navbar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<Blog />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </main>
      </div>
    </>
  ) : (
    <></>
  );
};

export default App;
