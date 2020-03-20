import React from 'react'
import './styles/tailwind.css'
import bgImg from './media/leather_bg_4.jpg'

import Header from './Header'
import ProductList from './ProductList'

function App() {
    return <ProductList />
    return (
        <div>
            <Header />
            <div className="w-screen -mt-40" style={{ zIndex: -1 }}>
                <div
                    className="bg-green-100 relative"
                    style={{ paddingBottom: '125%', zIndex: 'inherit' }}
                >
                    <img
                        className="absolute top-0 h-full w-full object-cover object-top z-0"
                        style={{ zIndex: 'inherit' }}
                        src={bgImg}
                    />
                </div>
            </div>
            <div style={{ paddingBottom: '300%' }} />
        </div>
    )
}

export default App
