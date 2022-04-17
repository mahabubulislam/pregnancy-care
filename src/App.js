
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Appoinment from './components/Appoinment/Appoinment';
import Header from './components/Header/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/appoinment' element={<Appoinment/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
