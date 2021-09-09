import React from 'react'
import { IProduct } from '../../services/IProduct'

interface IProductView{
    product:IProduct
}
export const ProductView:React.FC<IProductView> = ({product}) => {
    return (
        <div>
            <p>Product ID: {product.productID}</p>
            <p>Product Name: {product.productName}</p>
        </div>
    )
}

