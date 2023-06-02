interface ProductProps {
    product: IProduct
}

export interface IProduct {
    id: number,
    name: string,
    count: number,
    inCart: boolean
    price: string
}

const Product = ({ product }:ProductProps) => {


    return (
     <div>
         {product.inCart && "✔"}{product.id}
         {product.name}
     </div>
    )
}
export default Product;