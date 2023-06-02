import React from 'react';
import './App.css';
import MyButton from "./components/myButton";
import Profile from "./components/profile";
import Product from "./components/product";
import product from "./components/product";

function App() {

  return (
    <div>
      <h1> Мое первое приложение (нет)</h1>
      <MyButton/>
      <Profile/>
      <ProductList products={Product}/>
    </div>
  );
}

export default App;
