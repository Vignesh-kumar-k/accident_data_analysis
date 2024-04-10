import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './components/Signup';
import Login from './components/Login';
import Complaint from './components/complaint';
import Home from './components/Home';
import ShowComplaints from './components/ShowComplaint';
import PyHome from './pyserver/templates/PyHome';
import {ToastContainer} from 'react-toastify'

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Router>
        <Routes>
          <Route path='/'element={<Home/>}/>
          <Route path='/show' element={<ShowComplaints/>}/>
          <Route path='/register' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/home' element={<PyHome/>}/>
          <Route path='/submitcomplaint' element={<Complaint/>}/>

        </Routes>
      </Router>
    </div>
  );
}

export default App;