import React, { useContext } from 'react'
import { withRouter } from 'react-router-dom'
import { useSpring, animated } from 'react-spring'
import bgImg from '../media/leather_bg_4.jpg'
import { ProductList } from './ProductPage'
import LanguageContext from '../langs/context'

const HomePage = props => {
    const lang = useContext(LanguageContext)
    const { products } = lang.dictionary

    const deZooming = useSpring({
        transform: 'scale(1.0)',
        from: { transform: 'scale(1.20)' },
        config: { tension: 60 }
    })

    return (
        <div className="pb-8">
            <div className="w-screen -mt-40 mb-8" style={{ zIndex: -1 }}>
                <div
                    className="h-full relative overflow-hidden"
                    style={{
                        paddingBottom: '50%',
                        zIndex: 'inherit',
                        minHeight: 700
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
                    props.history.push(`/creations/${id}`)
                }}
            />
        </div>
    )
}

export default withRouter(HomePage)
