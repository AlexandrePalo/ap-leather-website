import React from 'react'
import './styles/tailwind.css'
import { Switch, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import MaterialPage from './pages/MaterialsPage'
import BrandPage from './pages/BrandPage'
import { LanguageProvider } from './langs/context'

function App() {
    const location = useLocation()

    return (
        <LanguageProvider>
            <Header />
            <Switch location={location}>
                <Route path="/" exact>
                    <HomePage />
                </Route>
                <Route path="/creations/:id?">
                    <ProductPage />
                </Route>
                <Route path="/material">
                    <MaterialPage />
                </Route>
                <Route path="/brand">
                    <BrandPage />
                </Route>
            </Switch>
            <Footer />
        </LanguageProvider>
    )
}

export default App
