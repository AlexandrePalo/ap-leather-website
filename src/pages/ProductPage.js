import React, { useEffect, useContext } from 'react'
import { useParams, withRouter } from 'react-router-dom'
import Product from '../components/Product'
import LanguageContext from '../langs/context'

const ProductPage = ({ history }) => {
    const lang = useContext(LanguageContext)
    const { products } = lang.dictionary

    let { id: detailed } = useParams()
    detailed = Number(detailed)

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }, [detailed])

    return (
        <div className="py-8 px-6" style={{ backgroundColor: '#262b2c' }}>
            {detailed ? (
                <Product
                    {...products.find(p => p.id === detailed)}
                    detailed
                    undetail={() => history.push('/creations')}
                />
            ) : null}
            <ProductList
                products={products.filter(p => p.id !== detailed)}
                onDiscoverClick={id => {
                    history.push(`/creations/${id}`)
                }}
            />
        </div>
    )
}

const ProductList = ({ products, onDiscoverClick }) => {
    return (
        <div className="flex flex-row items-start justify-center flex-wrap">
            {products.map(p => (
                <Product
                    key={p.id}
                    {...p}
                    onDiscoverClick={() => onDiscoverClick(p.id)}
                />
            ))}
        </div>
    )
}

export default withRouter(ProductPage)
export { ProductList }
