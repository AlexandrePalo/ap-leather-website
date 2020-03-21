import React from 'react'
import './styles/tailwind.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom'
import Header from './Header'
import ProductPage from './ProductPage'
import HomePage from './HomePage'

function App() {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/" exact>
                    <HomePage />
                </Route>
                <Route path="/collections/:id">
                    <ProductPage />
                </Route>
            </Switch>
        </Router>
    )
}

export default App
