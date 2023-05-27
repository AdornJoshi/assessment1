import './App.css';
import Navbar from './components/Navbar';
import { Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import Addblog from './components/Addblog'
function App() {
  return (
    <div className="App">
      <Navbar/>
   <Routes>
    
    <Route path='/Stud'element={<Home/>}/>
    <Route path='/Me'element={<Addblog/>}/>
    
   </Routes>
    </div>
  )
}

export default App;
