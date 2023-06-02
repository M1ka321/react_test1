
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

const Product = ({ product }: ProductProps) => {
  const {count,id,inCart, name, price} = product;
    return (
     <div>
       <span>{inCart && "✔"} </span>
       <span>{name}</span>
       <span>{count}</span>
       <span>{price}</span>
       <span>{price * count}</span>
     </div>
    )
}
export default Product;