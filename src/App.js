import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './pages/Home';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min"

function App() {
 
  return (
    <div className="App">
      <BrowserRouter>
      <div style={{marginBottom:'70px'}}><Navbar/></div>
        <Routes>
          <Route path='/' element={<Home/>} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
