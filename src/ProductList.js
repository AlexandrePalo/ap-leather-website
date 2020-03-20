import React, { useState } from 'react'

import Product from './Product'
import products from './products'

const ProductList = () => {
    const [detailed, setDetailed] = useState(1)

    return (
        <div className="p-6" style={{ backgroundColor: 'hsl(120, 2%, 19%)' }}>
            {detailed ? (
                <Product {...products.find(p => p.id === detailed)} detailed />
            ) : null}
            <div className="flex flex-row items-start justify-center flex-wrap mt-12">
                {products
                    .filter(p => p.id !== detailed)
                    .map(p => (
                        <Product
                            key={p.id}
                            {...p}
                            onClickDiscover={() => {
                                setDetailed(detailed === p.id ? p.id + 1 : p.id)
                            }}
                        />
                    ))}
            </div>
        </div>
    )
}

export default ProductList
