import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './styles/shoppy.css';
import Layout from './pages/Layout.jsx';
import Home from './pages/Home.jsx';
import Products from './pages/Products.jsx';
import Carts from './pages/Carts.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import DetailProduct from './pages/DetailProduct.jsx';
import NewProduct from './pages/NewProduct.jsx';
import CheckoutInfo from './pages/CheckoutInfo.jsx';
import PaymentSuccess from './pages/PaymentSuccess.js';
import MyPage from './pages/MyPage.jsx';


export default function App() {

  return (
    <div>
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Layout />} >
                  <Route index element={<Home />} />
                  <Route path='/all' element={<Products />} />
                  <Route path='/cart' element={<Carts />} />
                  <Route path='/login' element={<Login />} />
                  <Route path='/signup' element={<Signup />} />
                  <Route path='/products/:pid' element={<DetailProduct />} />                  
                  <Route path='/products/new' element={<NewProduct />} />
                  <Route path='/checkout' element={<CheckoutInfo />} />
                  <Route path='/payment/success' element={<PaymentSuccess />} />
                  <Route path='/mypage' element={<MyPage />} />
              </Route>
          </Routes>            
      </BrowserRouter>
    </div>
  );
}

