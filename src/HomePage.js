import React from 'react'
import { withRouter } from 'react-router-dom'
import { useSpring, animated } from 'react-spring'
import products from './products'
import bgImg from './media/leather_bg_4.jpg'
import { ProductList } from './ProductPage'

const HomePage = props => {
    const deZooming = useSpring({
        transform: 'scale(1.0)',
        from: { transform: 'scale(1.20)' },
        config: { tension: 60 }
    })

    return (
        <div>
            <div className="w-screen -mt-40" style={{ zIndex: -1 }}>
                <div
                    className="relative overflow-hidden"
                    style={{
                        paddingBottom: '50%',
                        zIndex: 'inherit'
                    }}
                >
                    <animated.img
                        className="absolute top-0 h-full w-full object-cover object-top z-0"
                        style={{ ...deZooming, zIndex: 'inherit' }}
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
