import './App.css';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import Login from './App/pages/LoginPage/LoginPage'
import Register from './App/pages/Registerpage/RegisterScreen'
// import LandingPage from './App/pages/LandingPage'
import  About from './App/pages/Aboutpage/AboutPage'
import Contact from './App/pages/Contactpage/ContactPage'

import Navbar from './App/components/Navbar'


function App() {
  return (
    <div className="App">
      <Router>
         <Navbar/>

         <Routes> 
         <Route path='/' element={<Login/>}></Route>
         <Route path='/register' element={<Register/>}></Route>
         <Route path='/about' element={<About/>}></Route>
         <Route path='/contact' element={<Contact/>}></Route>
        
       </Routes>
     </Router>
    </div>
  );
}

export default App;
