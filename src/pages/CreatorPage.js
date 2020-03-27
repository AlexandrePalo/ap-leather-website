import React from 'react'
import creator from '../media/creator.jpg'

const CreatorPage = () => {
    return (
        <div className="my-10 px-6">
            <div className="flex flex-row items-center justify-start max-w-sm mx-auto mb-10">
                <div
                    className="rounded-full h-32 w-32 flex-shrink-0 bg-cover bg-center border-2 border-secondary mr-8"
                    style={{ backgroundImage: `url(${creator})` }}
                />
                <p className="text-base text-primary-lighter font-bold">
                    Ingénieur de formation, je suis avant tout{' '}
                    <span className="text-secondary">créateur</span>.
                </p>
            </div>
            <p className="text-base text-primary mt-6 max-w-xl mx-auto text-justify">
                En fabriquant ces objets, mon objectif est de fournir des
                produits simples, de qualité et durables pour une utilisation de
                tous les jours.
            </p>
            <p className="text-base text-primary mt-6 max-w-xl mx-auto">
                Le cuir, noble, pur et vivant, s'est imposé comme matière de
                choix.
            </p>
            <p className="text-base text-primary max-w-xl mx-auto mt-10 mb-10">
                Tous les objets sont fabriqués{' '}
                <span className="text-secondary font-bold">à la main</span>, à{' '}
                <span className="text-secondary font-bold">Paris</span> en
                France.
            </p>
        </div>
    )
}

export default CreatorPage
