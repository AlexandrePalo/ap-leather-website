import React from 'react'
import { withRouter } from 'react-router-dom'
import products from './products'
import bgImg from './media/leather_bg_4.jpg'
import { ProductList } from './ProductPage'

const HomePage = props => {
    return (
        <div>
            <div className="w-screen -mt-40" style={{ zIndex: -1 }}>
                <div
                    className="bg-green-100 relative"
                    style={{
                        paddingBottom: '50%',
                        zIndex: 'inherit'
                    }}
                >
                    <img
                        className="absolute top-0 h-full w-full object-cover object-top z-0"
                        style={{ zIndex: 'inherit' }}
                        src={bgImg}
                        alt="leather tools background"
                    />
                </div>
            </div>
            <ProductList
                products={products}
                onDiscoverClick={id => {
                    props.history.push(`/collections/${id}`)
                }}
            />
        </div>
    )
}

export default withRouter(HomePage)
