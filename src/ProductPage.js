import React, { useState } from 'react'

import Product from './Product'
import products from './products'

const ProductPage = () => {
    const [detailed, setDetailed] = useState(1)

    return (
        <div className="p-6" style={{ backgroundColor: 'hsl(120, 2%, 19%)' }}>
            {detailed ? (
                <Product {...products.find(p => p.id === detailed)} detailed />
            ) : null}
            <ProductList
                products={products.filter(p => p.id !== detailed)}
                onClickDiscover={id => {
                    setDetailed(id)
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    })
                }}
            />
        </div>
    )
}

const ProductList = ({ products, onClickDiscover }) => {
    return (
        <div className="flex flex-row items-start justify-center flex-wrap my-6">
            {products.map(p => (
                <Product
                    key={p.id}
                    {...p}
                    onClickDiscover={() => {
                        onClickDiscover && onClickDiscover(p.id)
                    }}
                />
            ))}
        </div>
    )
}

export default ProductPage
export { ProductList }
