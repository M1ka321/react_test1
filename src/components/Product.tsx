import MyButton from "./MyButton";

export interface IProduct {
    id: number,
    name: string,
    count: number,
    inCart: boolean
    price: number
}

export interface ProductProps {
  product: IProduct
}


const onClickIncrement = () => {
  alert('стало больше ')
}

const onClickDecrement = () => {
  alert('стало меньше ')
}

const Product = ({ product }: ProductProps) => {
  const {count,id,inCart, name, price} = product;
    return (
     <div>
       <span>{inCart && "✔"} </span>
       <span>{name}</span>
       <span>{count}</span>
       <span>{price}</span>
       <span>{price * count}</span>
       <MyButton onClick={onClickIncrement}>+1</MyButton>
       <MyButton onClick={onClickDecrement}>-1</MyButton>
     </div>
    )
}
export default Product;