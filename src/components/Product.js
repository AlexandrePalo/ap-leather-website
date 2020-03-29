import React, { useState, useRef, useContext } from 'react'
import useDimensions from 'react-use-dimensions'
import { useSpring, useSprings, animated } from 'react-spring'
import { useDrag } from 'react-use-gesture'
import LanguageContext from '../langs/context'

const ProductCard = ({ images, name, minPrice, onDiscoverClick }) => {
    const lang = useContext(LanguageContext)
    const { product } = lang.dictionary

    const [imgHovered, setImgHovered] = useState(false)
    const zooming = useSpring({
        transform: imgHovered ? 'scale(1.25)' : 'scale(1.0)'
    })

    return (
        <div className="rounded-md flex flex-col justify-between bg-primary-very-lighter m-3 w-20em h-28em">
            <div
                className="overflow-hidden rounded-t-md"
                style={{ height: '80%' }}
                onClick={onDiscoverClick}
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
                <div className="flex flex-col mr-4">
                    <span className="text-secondary font-bold text-sm">
                        {name}
                    </span>
                    <span className="text-primary-lighter text-xs">
                        {product.price} {minPrice}€
                    </span>
                </div>
                <ButtonLink
                    label={product.discoverButton.label}
                    onClick={onDiscoverClick}
                />
            </div>
        </div>
    )
}

const ProductDetailed = ({
    id,
    images,
    name,
    minPrice,
    link,
    descriptions,
    colors,
    undetail
}) => {
    const lang = useContext(LanguageContext)
    const { product } = lang.dictionary

    const [closeHovered, setCloseHovered] = useState(false)
    const fading = useSpring({
        color: closeHovered ? 'hsl(155, 40%, 20%)' : 'hsl(190, 3%, 40%)'
    })
    const [ref, { width }] = useDimensions()

    return (
        <div className="rounded-md flex flex-col sm:flex-row justify-between max-w-screen-lg mx-auto bg-primary-very-lighter mb-8">
            <div className="flex flex-col p-4 sm:w-5/12">
                <div className="w-full relative mb-4">
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
                <div className="flex flex-col mt-4">
                    <span className="text-sm font-bold text-primary-darker">
                        {product.detailed.quality.title}
                    </span>
                    <span className="text-sm mt-2 text-primary">
                        {product.detailed.quality.p}
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
                <div className="sm:flex flex-row items-center hidden mt-4">
                    <ButtonLink
                        label={product.purchaseButton.label}
                        link={link}
                    />
                    <span className="text-primary-lighter ml-4 text-sm">
                        {product.price} {minPrice}€
                    </span>
                </div>
            </div>
            <div
                className="h-88 sm:w-7/12 sm:h-i overflow-hidden relative sm:rounded-r-md"
                ref={ref}
            >
                {width && <Images images={images} width={width} />}
            </div>
            <div className="flex flex-row items-center sm:hidden p-4 text-sm">
                <ButtonLink label={product.purchaseButton.label} link={link} />
                <span className="text-primary-lighter ml-4">
                    {product.price} {minPrice}€
                </span>
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

const Images = ({ images, width }) => {
    const V_THRESHOLD = 0.3

    const [xPos, setXPos] = useState(0)
    const [springs, set] = useSprings(images.length, i => ({
        transform: `translate(${i * width}px)`
    }))

    // Hook to reset xPos if images props is changed (ie product changed)
    const imagesRef = useRef(images)
    if (JSON.stringify(imagesRef.current) !== JSON.stringify(images)) {
        imagesRef.current = images
        setXPos(xp => 0)
    }

    const bind = useDrag(({ last, vxvy: [vx, vy] }) => {
        if (last) {
            // swipe left
            if (vx < -V_THRESHOLD && -xPos < images.length - 1) {
                setXPos(xp => xp - 1)
            }
            // swipe right
            else if (vx > V_THRESHOLD && xPos < 0) {
                setXPos(xp => xp + 1)
            }
        }
    })
    set(i => ({
        transform: `translate(${(i + xPos) * width}px)`
    }))

    return (
        <div>
            <div className="absolute top-0 right-0 flex flex-col z-10">
                {images.map((img, i) => (
                    <Circle
                        key={`product-detailed-image-circle-${i}`}
                        className="h-3 w-3 m-2 rounded-full border border-solid border-secondary"
                        displayed={i === -xPos}
                        onClick={() => setXPos(xp => -i)}
                    />
                ))}
            </div>
            {springs.map((props, i) => (
                <animated.div
                    {...bind()}
                    style={{ ...props, willChange: 'transform' }}
                    className="absolute h-full w-full"
                    key={`product-detailed-image-${i}`}
                >
                    <animated.div
                        style={{
                            backgroundImage: `url(${images[i]})`,
                            willChange: 'transform'
                        }}
                        className="h-full w-full bg-cover bg-center"
                    />
                </animated.div>
            ))}
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
    const displayedRef = useRef(displayed)
    if (displayed !== displayedRef.current) {
        setHovered(false)
        displayedRef.current = displayed
    }
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
