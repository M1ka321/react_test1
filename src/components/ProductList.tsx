import React from "react";
import product from "./product";
interface ProductListProps {
    products: product
}
export ProductList = ({products}: ProductListProps) => {
    const products = [
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
        }]
    const cardItems = products.map(product =>
        <li key={product.id}>
            {product.name}
        </li>
    );

    const ProductList = () => {
        return ({cardItems})

    }
}

