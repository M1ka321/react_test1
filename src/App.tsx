import React, {useState} from 'react';
import './App.css';
import MyButton from "./components/MyButton";
import Profile from "./components/profile";
import Product, {IProduct} from "./components/Product";
import {ProductList} from "./components/ProductList";
import {Counter} from "./components/Counter";
import {MyForm} from "./components/MyForm";
import product from "./components/Product";

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

  const [count, setCount] = useState<number>(0)
  const onIncrement = () => {
    setCount(count + 1)
  }
  const onDecrement = () => {
    setCount(count - 1)
  }

  const [productList, setProductList] = useState<IProduct[]>([{id:1, count:1, name:'gst', inCart:false, price: 10}])

  const addProduct = (product:IProduct) => {
    setProductList([...productList, product])
  }

  return (
    <div>
      <MyForm/>
      <ProductList products={productList}/>
      <Counter count={count} onIncrement={onIncrement} onDecrement={onDecrement}/>
      <Counter count={count} onIncrement={onIncrement} onDecrement={onDecrement}/>
    </div>
  );
}

export default App;
