
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Appoinment from './components/Appoinment/Appoinment';
import Blogs from './components/Blogs/Blogs';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/Notfound';
import RequirAuth from './components/RequirAuth/RequirAuth';
import Signup from './components/Signup/Signup';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/appoinment' element={
          <RequirAuth>
            <Appoinment />
          </RequirAuth>}>
        </Route>
        <Route path='login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/blogs' element={<Blogs />}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
