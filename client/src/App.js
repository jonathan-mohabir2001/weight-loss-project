import './App.css';

import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import GetBook from './components/GetBook';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>

        <Route path="/purchase" element={<GetBook />}></Route>
      </Routes>
    </div>
  );
}

export default App;
