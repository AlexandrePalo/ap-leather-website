import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import { Link as LinkRouter, useLocation } from 'react-router-dom'
import logoWhite from './media/logo-white.png'

const Header = () => {
    const links = [
        { label: 'ACCUEIL', to: '/' },
        { label: 'COLLECTIONS', to: '/collections' },
        { label: 'MATIERES', to: '/materials' },
        { label: 'CREATEUR', to: '/creator' }
    ]

    const route = useLocation()
    const isHomeRoute = route.pathname === '/'

    return (
        <header
            className={`h-40 z-10 relative w-screen ${
                isHomeRoute ? 'header-blur' : ''
            }`}
            style={{
                backgroundColor: `${!isHomeRoute ? '#262b2c' : ''}`
            }}
        >
            <div className="h-full p-2">
                <img
                    src={logoWhite}
                    className="h-24 w-auto mx-auto"
                    style={{ zIndex: 'inherit' }}
                    alt="AP Leather logo"
                />
                <div
                    className="flex flex-row justify-around max-w-xl mx-auto mt-4"
                    style={{ zIndex: 'inherit' }}
                >
                    {links.map((l, i) => (
                        <Link
                            key={`header-link-${i}`}
                            to={l.to}
                            active={l.to === route.pathname}
                        >
                            {l.label}
                        </Link>
                    ))}
                </div>
            </div>
            <div className="h-px bg-white" />
        </header>
    )
}

const Link = ({ to, active, children }) => {
    const [hovered, setHovered] = useState(false)

    const lineFading = useSpring({
        opacity: hovered || active ? 1 : 0
    })

    return (
        <LinkRouter
            className="mx-3 relative cursor-pointer text-white"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{ zIndex: 'inherit' }}
            to={to}
        >
            {children}
            <animated.span
                className="h-px w-full bg-white absolute left-0"
                style={{ ...lineFading, top: '100%' }}
            ></animated.span>
        </LinkRouter>
    )
}

export default Header
