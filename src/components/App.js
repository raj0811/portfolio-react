
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar';
import About from './About';
import Projects from './Projects';
import Experience from './Experience';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/project" element={<Projects />} />
          <Route exact path="/experience" element={<Experience />} />
          
        </Routes>

      </Router>
    </div>
  );
}

export default App;
