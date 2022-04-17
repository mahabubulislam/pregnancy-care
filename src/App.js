
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Appoinment from './components/Appoinment/Appoinment';
import Header from './components/Header/Header';
import Login from './components/Login/Login';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/appoinment' element={<Appoinment/>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
