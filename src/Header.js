import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'

import logoWhite from './media/logo-white.png'

const Header = () => {
    const links = ['ACCUEIL', 'COLLECTIONS', 'MATIERES', 'CREATEUR']

    const [hovered, setHovered] = useState(false)

    const lineDisplaying = useSpring({
        opacity: hovered ? 1 : 0
    })

    return (
        <header
            className="h-40 z-10 relative w-screen header-blur"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <div className="h-full p-2">
                <img
                    src={logoWhite}
                    className="h-24 w-auto mx-auto"
                    style={{ zIndex: 'inherit' }}
                />
                <div
                    className="flex flex-row justify-around max-w-md mx-auto mt-4"
                    style={{ zIndex: 'inherit' }}
                >
                    {links.map(l => (
                        <Link key={l}>{l}</Link>
                    ))}
                </div>
            </div>
            <animated.div className="h-px bg-white" style={lineDisplaying} />
        </header>
    )
}

const Link = ({ children }) => {
    const [hovered, setHovered] = useState(false)

    const lineFading = useSpring({
        opacity: hovered ? 1 : 0
    })

    return (
        <span
            className="mx-3 relative cursor-pointer text-white"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{ zIndex: 'inherit' }}
        >
            {children}
            <animated.span
                className="h-px w-full bg-white absolute left-0"
                style={{ ...lineFading, top: '100%' }}
            ></animated.span>
        </span>
    )
}

export default Header
