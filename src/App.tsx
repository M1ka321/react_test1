import React from 'react';
import './App.css';
import MyButton from "./components/myButton";
import Profile from "./components/profile";
import Product, {IProduct} from "./components/Product";
import {ProductList} from "./components/ProductList";

function App() {
  const products: IProduct[] = [
    {
      id: 1,
      name: "apple",
      count: 2,
      price: 100,
      inCart: true,
    },
    {
      id: 2,
      name: "Grape",
      count: 3,
      price: 200,
      inCart: true,
    },]
  return (
    <div>
      <h1> Мое первое приложение (нет)</h1>
      <Profile/>
      <MyButton/>
      <ProductList products={products}/>
    </div>
  );
}

export default App;
