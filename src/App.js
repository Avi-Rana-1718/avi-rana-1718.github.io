import Nav from './components/Nav';
import Main from './components/Main';
import Blog from './components/Blog';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Nav />
    <Routes>
    <Route path="/" element={<Main/>} />
    <Route path="/blog" element={<Blog/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
