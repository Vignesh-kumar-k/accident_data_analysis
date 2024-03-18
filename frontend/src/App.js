import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import Complaint from './components/complaint';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/register' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/submitcomplaint' element={<Complaint/>}/>

        </Routes>
      </Router>
    </div>
  );
}

export default App;