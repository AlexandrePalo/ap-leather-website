import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'

const ProductCard = ({ images, name, minPrice, onDiscoverClick }) => {
    const [imgHovered, setImgHovered] = useState(false)
    const zooming = useSpring({
        transform: imgHovered ? 'scale(1.25)' : 'scale(1.0)'
    })

    return (
        <div
            className="rounded-md flex flex-col justify-between bg-primary-very-lighter m-3"
            style={{
                width: '19em',
                height: '28em'
            }}
        >
            <div
                className="overflow-hidden rounded-t-md"
                style={{ height: '80%' }}
            >
                <animated.img
                    onMouseEnter={() => setImgHovered(true)}
                    onMouseLeave={() => setImgHovered(false)}
                    src={images[0]}
                    className="w-full h-full object-cover object-center"
                    style={zooming}
                />
            </div>
            <div className="flex flex-row p-4 items-center justify-between">
                <div className="flex flex-col">
                    <span className="text-secondary font-bold text-sm">
                        {name}
                    </span>
                    <span className="text-primary-lighter text-xs">
                        A PARTIR DE {minPrice}€
                    </span>
                </div>
                <ButtonLink label="DECOUVRIR" onClick={onDiscoverClick} />
            </div>
        </div>
    )
}

const ProductDetailed = ({
    id,
    images,
    name,
    minPrice,
    descriptions,
    colors,
    undetail
}) => {
    const [closeHovered, setCloseHovered] = useState(false)
    const fading = useSpring({
        color: closeHovered ? 'hsl(155, 40%, 20%)' : 'hsl(190, 3%, 40%)'
    })

    return (
        <div
            className="rounded-md flex flex-row justify-between max-w-screen-lg mx-auto bg-primary-very-lighter mb-8"
            style={{
                height: '28em'
            }}
        >
            <div className="flex flex-col p-4 items-start justify-between w-5/12">
                <div className="w-full relative">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="h-6 w-6 absolute top-0 right-0 mt-1 cursor-pointer"
                        onClick={undetail}
                        onMouseEnter={() => setCloseHovered(true)}
                        onMouseLeave={() => setCloseHovered(false)}
                    >
                        <animated.path
                            className="fill-current"
                            style={fading}
                            fillRule="evenodd"
                            d="M15.78 14.36a1 1 0 0 1-1.42 1.42l-2.82-2.83-2.83 2.83a1 1 0 1 1-1.42-1.42l2.83-2.82L7.3 8.7a1 1 0 0 1 1.42-1.42l2.83 2.83 2.82-2.83a1 1 0 0 1 1.42 1.42l-2.83 2.83 2.83 2.82z"
                        />
                    </svg>
                    <span className="font-bold text-2xl text-secondary">
                        {name}
                    </span>
                    <div className="h-px w-full bg-secondary absolute left-0 top-full" />
                </div>
                <div>
                    {descriptions.map((d, i) => (
                        <p
                            key={`product-${id}-description-${i}`}
                            className={`text-base text-primary ${
                                i > 0 ? 'mt-2' : ''
                            }`}
                        >
                            {d}
                        </p>
                    ))}
                </div>
                <div className="flex flex-col">
                    <span className="text-sm font-bold text-primary-darker">
                        QUALITE
                    </span>
                    <span className="text-sm mt-2 text-primary">
                        Tous les articles sont créés à Paris avec du cuir
                        italien de grande qualité et sont cousus intégralement à
                        la main au fil de lin.
                    </span>
                    <div className="mt-2 flex flex-row">
                        {colors.map((c, i) => (
                            <span
                                key={`product-${id}-color-${i}`}
                                className={`text-sm flex flex-row items-center text-primary-lighter ${
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
                    <span className="text-primary-lighter ml-4">
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

const ButtonLink = ({ label, onClick, link, small = false }) => {
    const [hovered, setHovered] = useState(false)
    const backgroundSpreading = useSpring({
        width: hovered ? '100%' : '0%'
    })
    const coloring = useSpring({
        color: hovered ? '#ffffff' : 'hsl(155, 40%, 20%)' // secondary default
    })

    return (
        <a
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className={`${
                small ? 'h-6 w-32' : 'h-8 w-32'
            } border-solid border border-secondary rounded-sm relative cursor-pointer`}
            onClick={onClick}
            href={link}
            target={link ? '_blank' : '_self'}
        >
            <animated.div
                className="absolute left-0 top-0 h-full bg-secondary"
                style={backgroundSpreading}
            />
            <animated.span
                style={coloring}
                className={`absolute left-0 top-0 w-full h-full flex items-center justify-center ${
                    small ? 'text-xs' : 'text-sm'
                }`}
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
                        key={`image-${i}`}
                        className="h-4 w-4 m-2 rounded-full border border-solid border-secondary"
                        onClick={() => setDisplayed(i)}
                        displayed={i === displayed}
                    />
                ))}
            </div>
            <img
                src={images[displayed]}
                className="h-full w-full object-cover object-center rounded-r-md"
                alt={`product n°${displayed + 1}`}
            />
        </div>
    )
}

const Circle = ({ displayed, ...rest }) => {
    const [hovered, setHovered] = useState(false)
    const emphasing = useSpring({
        backgroundColor: hovered
            ? 'hsl(155, 40%, 20%)'
            : displayed
            ? 'hsl(155, 40%, 20%)'
            : '#ffffff' // secondary default
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

export { ButtonLink }
