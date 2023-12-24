import './App.css';
import Header from './Components/Header';
import Home from './Components/HomePage';
import About from './Components/About';
import Footer from './Components/Footer';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom"

function App() {
  return (
    <div>
      <Header appName = "App Name" />

      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
      </Router>

      <Footer/>
    </div>
  );
}

export default App;
