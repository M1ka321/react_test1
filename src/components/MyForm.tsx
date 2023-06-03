import {useState} from "react";
import {MyInput} from "./MyInput";
import MyButton from "./MyButton";
import {IProduct} from "./Product";

const initValue: IProduct = {
  id: 0,
  count: 1,
  inCart: false,
  name: "",
  price: 0,
}


export const MyForm = () => {

  const [product, setProduct] = useState(initValue);
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    console.log(e.target.value)
  }
  return (
    <form>
      <MyInput handleChange={handleChange} name="name" value={product.name}/>
      <MyInput handleChange={handleChange} name="count" value={product.count}/>
      <MyInput handleChange={handleChange} name="price" value={product.price}/>
      <MyButton onClick={()=>{}}>Добавить товар</MyButton>
    </form>
  )
}