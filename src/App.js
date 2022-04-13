import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import RequriedAuth from './components/RequiredAuth/RequriedAuth';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>

        <Route path='/products' element={
          <RequriedAuth>
            <Products></Products>
          </RequriedAuth>
        }></Route>

        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>

      </Routes>

    </div>
  );
}

export default App;
