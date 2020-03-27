import React from 'react'
import './styles/tailwind.css'
import { Switch, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import MaterialPage from './pages/MaterialsPage'
import CreatorPage from './pages/CreatorPage'

function App() {
    const location = useLocation()

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
                <Route path="/creator">
                    <CreatorPage />
                </Route>
            </Switch>
            <Footer />
        </div>
    )
}

export default App
