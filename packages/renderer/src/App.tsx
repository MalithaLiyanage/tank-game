import './App.css';
import MainMenu from './pages/MainMenu';
import About from './pages/About';
import Options from './pages/Options';
import { Route, Routes } from 'react-router-dom'
import Arena from './pages/Arena';


function App() {

  return (
    <div className="App">
        <div>
            <Routes>   
                <Route path="/play" element={<Arena />} />
                <Route path="/options" element={<Options />} />
                <Route path="/about" element={<About />} />
                <Route path="/" element={<MainMenu />} />
            </Routes>
        </div>
    </div>
  )
}

export default App
