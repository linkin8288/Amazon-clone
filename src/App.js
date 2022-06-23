import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Router is a parent component, Routes is children which determine

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Home />
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/checkout" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
