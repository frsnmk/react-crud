import React, { useState } from 'react'
import { ProductForm } from '../components/ProductForm'
import { ProductView } from '../components/ProductView'
import { IProduct } from '../services/IProduct'
// import { IProduct } from '../services/IProduct'

export const defaultProduct = {
    productID:'',
    productName:''
}
export const Product:React.FC = () => {
    const [product, setProduct] = useState<IProduct>(defaultProduct)
    return (
        <div>
            <ProductForm onProductChange = {setProduct} />
            <ProductView product = {product} />
        </div>
    )
}
