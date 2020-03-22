import React from 'react'
import './styles/tailwind.css'
import { Switch, Route, useLocation } from 'react-router-dom'
import { animated, useTransition } from 'react-spring'
import Header from './Header'
import Footer from './Footer'
import HomePage from './HomePage'
import ProductPage from './ProductPage'
import MaterialPage from './MaterialsPage'

function App() {
    const location = useLocation()
    const transitions = useTransition(location, location => location.pathname, {
        enter: { opacity: 1 },
        leave: { opacity: 0 }
    })

    return (
        <div>
            <Header />
            <Switch location={location}>
                <Route path="/" exact>
                    <HomePage />
                </Route>
                <Route path="/collections/:id?">
                    <ProductPage />
                </Route>
                <Route path="/material">
                    <MaterialPage />
                </Route>
            </Switch>
            <Footer />
        </div>
    )
}

export default App
