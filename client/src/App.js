import './App.css';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import Login from './App/pages/LoginPage/LoginPage'
import Register from './App/pages/Registerpage/RegisterScreen'
// import LandingPage from './App/pages/LandingPage'
import  About from './App/pages/Aboutpage/AboutPage'
import Contact from './App/pages/Contactpage/ContactPage'
import Home from './App/pages/Homepage/Homepage'
import Navbar from './App/components/Navbar'
import Jobs from './App/pages/Jobspage/Jobspage';

function App() {
  return (
    <div className="App">
      <Router>
         <Navbar/>

         <Routes> 
         <Route path='/' element={<Login/>}></Route>
         <Route path='/register' element={<Register/>}></Route>
         <Route path='/about' element={<About/>}></Route>
         <Route path='/home' element={<Home/>}></Route>
         <Route path='/contact' element={<Contact/>}></Route>
         <Route path='/jobs' element={<Jobs/>}></Route>
       </Routes>
     </Router>
    </div>
  );
}

export default App;
