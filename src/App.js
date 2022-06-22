import './App.css';
import Header from './Components/Header/Header';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

// Router is a parent component, Routes is children which determine

function App() {
  return (
    <Router>
      <div>

      <Header />

      </div>
    </Router>
  );
}

export default App;
