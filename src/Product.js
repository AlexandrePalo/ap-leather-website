import React, { useState } from 'react'
import { useSpring, animated, useRef, useChain } from 'react-spring'

const ProductCard = ({ images, name, minPrice, onClickDiscover }) => {
    const [imgHovered, setImgHovered] = useState(false)
    const zooming = useSpring({
        transform: imgHovered ? 'scale(1.25)' : 'scale(1.0)'
    })

    return (
        <div
            className="rounded-md flex flex-col justify-between m-4"
            style={{
                minWidth: '20em',
                width: '20em',
                height: '28em',
                backgroundColor: 'hsl(120, 0%, 90%)'
            }}
        >
            <div className="overflow-hidden" style={{ height: '80%' }}>
                <animated.img
                    onMouseEnter={() => setImgHovered(true)}
                    onMouseLeave={() => setImgHovered(false)}
                    src={images[0]}
                    className="w-full h-full object-cover object-center rounded-t-md"
                    style={zooming}
                />
            </div>
            <div className="flex flex-row p-4 items-center justify-between">
                <div className="flex flex-col">
                    <span className="text-gray-800 font-bold text-sm">
                        {name}
                    </span>
                    <span className="text-gray-600 text-xs">
                        A PARTIR DE {minPrice}€
                    </span>
                </div>
                <ButtonLink label="DECOUVRIR" onClick={onClickDiscover} />
            </div>
        </div>
    )
}

const ProductDetailed = ({ images, name, minPrice, descriptions, colors }) => {
    return (
        <div
            className="rounded-md flex flex-row justify-between max-w-screen-lg mx-auto mt-6 mb-12"
            style={{
                height: '28em',
                backgroundColor: 'hsl(120, 0%, 90%)'
            }}
        >
            <div className="flex flex-col p-4 items-start justify-between w-5/12">
                <div className="flex flex-col">
                    <span className="text-gray-800 font-bold text-2xl">
                        {name}
                    </span>
                </div>
                <div>
                    {descriptions.map((d, i) => (
                        <p
                            key={i}
                            className={`text-gray-700 text-md ${
                                i > 0 ? 'mt-2' : ''
                            }`}
                        >
                            {d}
                        </p>
                    ))}
                </div>
                <div className="flex flex-col">
                    <span className="text-lg text-gray-800 font-bold">
                        Qualité
                    </span>
                    <span className="text-gray-700 text-md mt-2">
                        Tous les articles sont créés à Paris avec du cuir
                        italien de grande qualité et cousus intégralement à la
                        main.
                    </span>
                    <div className="mt-2 flex flex-row">
                        {colors.map((c, i) => (
                            <span
                                key={i}
                                className={`text-gray-700 text-md flex flex-row items-center ${
                                    i > 0 ? 'ml-4' : ''
                                }`}
                            >
                                <span
                                    className="rounded-full h-4 w-4 ml-1 mr-1 inline-block"
                                    style={{ backgroundColor: c.hex }}
                                />
                                {c.name}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="flex flex-row items-center">
                    <ButtonLink
                        label="COMMANDER"
                        link="https://www.etsy.com/fr/"
                    />
                    <span className="text-gray-600 ml-4">
                        A PARTIR DE {minPrice}€
                    </span>
                </div>
            </div>
            <div className="w-7/12 h-full p-l-2">
                <Images images={images} />
            </div>
        </div>
    )
}

const Product = ({ detailed, ...rest }) => {
    if (detailed) {
        return <ProductDetailed {...rest} />
    }
    return <ProductCard {...rest} />
}

export default Product

const ButtonLink = ({ label, onClick, link }) => {
    const [hovered, setHovered] = useState(false)
    const backgroundSpreading = useSpring({
        width: hovered ? '100%' : '0%'
    })
    const coloring = useSpring({ color: hovered ? '#ffffff' : '#2d3748' })

    return (
        <a
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="h-8 w-32 border-solid border border-gray-800 rounded-sm relative cursor-pointer"
            onClick={onClick}
            href={link}
            target={link ? '_blank' : '_self'}
        >
            <animated.div
                className="absolute left-0 top-0 h-full bg-gray-800"
                style={backgroundSpreading}
            />
            <animated.span
                style={coloring}
                className="absolute left-0 top-0 w-full h-full flex items-center justify-center text-sm"
            >
                {label}
            </animated.span>
        </a>
    )
}

const Images = ({ images }) => {
    const [displayed, setDisplayed] = useState(0)

    return (
        <div className="relative h-full w-full">
            <div className="absolute top-0 right-0 flex flex-col">
                {images.map((img, i) => (
                    <Circle
                        key={i}
                        className="h-4 w-4 m-2 rounded-full border border-solid border-gray-600"
                        onClick={() => setDisplayed(i)}
                        displayed={i === displayed}
                    />
                ))}
            </div>
            <img
                src={images[displayed]}
                className="h-full w-full object-cover object-center rounded-r-md"
            />
        </div>
    )
}

const Circle = ({ displayed, ...rest }) => {
    const [hovered, setHovered] = useState(false)
    const emphasing = useSpring({
        backgroundColor: hovered ? '#2d3748' : displayed ? '#2d3748' : '#ffffff' // gray 800
    })
    return (
        <animated.div
            style={emphasing}
            {...rest}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        />
    )
}
