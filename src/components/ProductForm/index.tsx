import React, { ChangeEvent, useState } from 'react'
import { defaultProduct } from '../../pages/Product'
import { IProduct } from '../../services/IProduct'

interface onProductChangedFunction{
    (product:IProduct):void
}

interface IProductForm{
    onProductChange:onProductChangedFunction
}

export const ProductForm:React.FC<IProductForm> = ({onProductChange}) => {
    const [product, setProduct] = useState<IProduct>(defaultProduct)
    
    const onProductIDChanged = (productID:string) => {
        setProduct({...product, productID})
        onProductChange({...product, productID})
        
    }
    
    const onProductNameChanged = (productName:string) => {
        setProduct({...product, productName})
        onProductChange({...product, productName})
    }
    return (
        <div>
            <input name="IDProduct" value={product.productID} onChange = {(e:ChangeEvent<HTMLInputElement>)=>onProductIDChanged(e.target.value)}/>
            <input name="productName" value={product.productName} onChange = {(e:ChangeEvent<HTMLInputElement>)=>onProductNameChanged(e.target.value)}/>
        </div>
    )
}
