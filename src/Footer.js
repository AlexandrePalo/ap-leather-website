import React, { useState } from 'react'
import { animated, useSpring } from 'react-spring'
import { ButtonLink } from './Product'

const Footer = () => {
    const socials = [
        {
            id: 1,
            viewBox: '0 0 9 17',
            d:
                'M5.842 17V9.246h2.653l.398-3.023h-3.05v-1.93c0-.874.246-1.47 1.526-1.47H9V.118C8.718.082 7.75 0 6.623 0 4.27 0 2.66 1.408 2.66 3.994v2.23H0v3.022h2.66V17h3.182z',
            link: 'https://www.google.com'
        },
        {
            id: 2,
            viewBox: '0 0 32 32',
            d:
                'M15.994 2.886c4.273 0 4.775.019 6.464.095 1.562.07 2.406.33 2.971.552.749.292 1.283.635 1.841 1.194s.908 1.092 1.194 1.841c.216.565.483 1.41.552 2.971.076 1.689.095 2.19.095 6.464s-.019 4.775-.095 6.464c-.07 1.562-.33 2.406-.552 2.971-.292.749-.635 1.283-1.194 1.841s-1.092.908-1.841 1.194c-.565.216-1.41.483-2.971.552-1.689.076-2.19.095-6.464.095s-4.775-.019-6.464-.095c-1.562-.07-2.406-.33-2.971-.552-.749-.292-1.283-.635-1.841-1.194s-.908-1.092-1.194-1.841c-.216-.565-.483-1.41-.552-2.971-.076-1.689-.095-2.19-.095-6.464s.019-4.775.095-6.464c.07-1.562.33-2.406.552-2.971.292-.749.635-1.283 1.194-1.841s1.092-.908 1.841-1.194c.565-.216 1.41-.483 2.971-.552 1.689-.083 2.19-.095 6.464-.095zm0-2.883c-4.343 0-4.889.019-6.597.095-1.702.076-2.864.349-3.879.743-1.054.406-1.943.959-2.832 1.848S1.251 4.473.838 5.521C.444 6.537.171 7.699.095 9.407.019 11.109 0 11.655 0 15.997s.019 4.889.095 6.597c.076 1.702.349 2.864.743 3.886.406 1.054.959 1.943 1.848 2.832s1.784 1.435 2.832 1.848c1.016.394 2.178.667 3.886.743s2.248.095 6.597.095 4.889-.019 6.597-.095c1.702-.076 2.864-.349 3.886-.743 1.054-.406 1.943-.959 2.832-1.848s1.435-1.784 1.848-2.832c.394-1.016.667-2.178.743-3.886s.095-2.248.095-6.597-.019-4.889-.095-6.597c-.076-1.702-.349-2.864-.743-3.886-.406-1.054-.959-1.943-1.848-2.832S27.532 1.247 26.484.834C25.468.44 24.306.167 22.598.091c-1.714-.07-2.26-.089-6.603-.089zm0 7.778c-4.533 0-8.216 3.676-8.216 8.216s3.683 8.216 8.216 8.216 8.216-3.683 8.216-8.216-3.683-8.216-8.216-8.216zm0 13.549c-2.946 0-5.333-2.387-5.333-5.333s2.387-5.333 5.333-5.333 5.333 2.387 5.333 5.333-2.387 5.333-5.333 5.333zM26.451 7.457c0 1.059-.858 1.917-1.917 1.917s-1.917-.858-1.917-1.917c0-1.059.858-1.917 1.917-1.917s1.917.858 1.917 1.917z',
            link: 'https://www.google.com'
        },
        {
            id: 3,
            viewBox: '328 355 335 276',
            d:
                'M 630, 425 A 195, 195 0 0 1 331, 600 A 142, 142 0 0 0 428, 570 A  70,  70 0 0 1 370, 523 A  70,  70 0 0 0 401, 521 A  70,  70 0 0 1 344, 455 A  70,  70 0 0 0 372, 460 A  70,  70 0 0 1 354, 370 A 195, 195 0 0 0 495, 442 A  67,  67 0 0 1 611, 380 A 117, 117 0 0 0 654, 363 A  65,  65 0 0 1 623, 401 A 117, 117 0 0 0 662, 390 A  65,  65 0 0 1 630, 425 Z',
            link: 'https://www.google.com'
        }
    ]

    return (
        <footer>
            <div className="h-px bg-primary-lighter" />
            <div className="flex flex-row py-8 px-3 items-start justify-between">
                <div className="w-1/3 px-4">
                    <span className="font-bold text-base text-secondary">
                        A PROPOS
                    </span>
                    <p className="text-justify text-sm mt-1">
                        <span className="font-bold">AP Leather</span> est créé,
                        développé et produit à Paris, en France.
                    </p>
                    <p className="text-justify text-sm mt-1">
                        L'objectif est de créer des produits en cuir élégants,
                        modernes et durables pour des objets de tous les jours.
                    </p>
                </div>
                <div className="px-4">
                    <span className="font-bold text-base text-secondary">
                        RESEAUX
                    </span>
                    <div className="flex flex-row mt-1">
                        {socials.map((s, i) => (
                            <SocialIcon
                                {...s}
                                index={i}
                                key={`footer-socials-${s.id}`}
                            />
                        ))}
                    </div>
                </div>
                <div className="w-1/3 px-4 flex flex-col">
                    <span className="font-bold text-base text-secondary">
                        CONTACT
                    </span>
                    <p className="text-justify text-sm mt-1">
                        N'hésitez pas à me contacter pour toutes vos questions.
                        Je peux fabriquer des produits à la demande pour une
                        couleur spécifique par exemple.
                    </p>
                    <p className="text-justify text-sm mt-1 mb-1">
                        Indiquez moi aussi vos souhaits d'objets futurs !
                    </p>
                    <ButtonLink small label="ME CONTACTER" />
                </div>
            </div>
        </footer>
    )
}

const SocialIcon = ({ id, viewBox, d, link, index }) => {
    const [hovered, setHovered] = useState(false)
    const fading = useSpring({
        color: hovered ? 'hsl(155, 40%, 20%)' : 'hsl(190, 3%, 40%)'
    })

    return (
        <svg
            key={`footer-socials-${id}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox={viewBox}
            className={`h-4 cursor-pointer ${index > 0 ? 'ml-4' : ''}`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <animated.path className="fill-current" d={d} style={fading} />
        </svg>
    )
}

export default Footer
