import './App.css';
import { Routes, Route } from 'react-router-dom' 
import AllStars from './components/AllStars';
import Star from './components/Star'

function App() {
  return (
    <div className="App">
      <h1>Dev Environment</h1>
      <Routes>
        <Route path="/" element={<AllStars />} />
        <Route path="/star/:toi" element={<Star />} />
      </Routes>
    </div>

  );
}

export default App;
