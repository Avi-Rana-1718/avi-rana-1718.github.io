import Nav from './components/Nav';
import Main from './components/Main';
import Blog from './components/Blog';

import NotFound from './components/NotFound';

import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Nav />
    <Routes>
    <Route path="/" element={<Main/>} />
    <Route path="/blog/:id" element={<Blog/>} />
    {/* Redirect links */}
    <Route path="/github" element={<Github />} />
    <Route path="/linkedin" element={<LinkedIn />} />
    <Route path="/twitter" element={<Twitter />} />
    <Route path="*" element={<NotFound />} />
    </Routes>
    </BrowserRouter>
  );
}

function Github() {
  window.location.replace("https://github.com/Avi-Rana-1718");
}
function LinkedIn() {
  window.location.replace("https://www.linkedin.com/in/avi-rana/");
}
function Twitter() {
  window.location.replace("https://twitter.com/home");
}

export default App;
