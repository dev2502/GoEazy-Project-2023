import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import LoginPage from './Pages/LoginPage';
import CustomerLogin from './Pages/CustomerLogin';
import ShopKeeperLogin from './Pages/ShopKeeperLogin';
import CreateNewAcc from './Pages/CreateNewAcc';
import CustomerHomePage from './Pages/CustomerHomePage' ;
import ShopkeeperHomePage from './Pages/ShopkeeperHomePage' ;
import MyProfile from './Pages/MyProfile';
import MyOrders from './Pages/MyOrders';
import BillGenerator from './Pages/BillGenerator';
import Table from './Pages/Table';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage/>}/>
        <Route path='/customerLogin' element={<CustomerLogin/>}/>
        <Route path='/shopKeeperLogin' element={<ShopKeeperLogin/>}/>
        <Route path='/createNewAcc' element={<CreateNewAcc/>}/>
        <Route path='/customerHomePage' element={<CustomerHomePage/>}/>
        <Route path='/shopkeeperHomePage' element={<ShopkeeperHomePage/>}/>
        <Route path="/table" element={<Table/>} />
        <Route path='/loginPage' element={<LoginPage/>}/>
        <Route path='/myOrders' element={<MyOrders/>}/>
        <Route path='/myProfile' element={<MyProfile/>}/>
        <Route path='/billGenerator' element={<BillGenerator/>}/>
      </Routes>
    </BrowserRouter>

    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
