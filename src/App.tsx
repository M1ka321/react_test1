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
  const handleClickOne = () => {
  }
  const showAlert = () => {
    alert('Нажата кнопка 1')
  }
  const showAlert2 = () => {
    alert('Нажата кнопка 2')
  }
  const [count, setCount] = useState<number>(0)
  const onIncrement = () => {
    setCount(count + 1)
  }
  const onDecrement = () => {
    setCount(count - 1)
  }

  const [productList, setProductList] = useState<IProduct[]>([])

  const addProduct = (product:IProduct) => {
    setProductList([...productList])
  }

  return (
    <div>
      <MyForm/>
      {/*<h1> Мое первое приложение (нет)</h1>*/}
      {/*<Profile/>*/}
      {/*<Counter*/}
      {/*  count = {count}*/}
      {/*  onIncrement={onIncrement}*/}
      {/*  onDecrement={onDecrement}*/}
      {/*/>*/}
      {/*<Counter*/}
      {/*  count = {count}*/}
      {/*  onIncrement={onIncrement}*/}
      {/*  onDecrement={onDecrement}*/}
      {/*/>*/}
      {/*<MyButton onClick={showAlert} >кнопка</MyButton>*/}
      {/*<MyButton onClick={showAlert2} >кнопка</MyButton>*/}
      {/*<ProductList products={products}/>*/}
    </div>
  );
}

export default App;
