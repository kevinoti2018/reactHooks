import React from 'react'
import Header from './components/Header';
import Home from './components/Home';
import Cart from './components/Cart';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'

function App() {

  return (
    <BrowserRouter>
    <Header/>  
    <div>
    <Routes>
       <Route path='/' element={<Home  />} />
       <Route path='/cart' element={<Cart  />}  />
      </Routes>
     </div>
    </BrowserRouter>
  );
}

export default App;
