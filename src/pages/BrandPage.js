import React from 'react'
import creator from '../media/creator.jpg'

const CreatorPage = () => {
    return (
        <div className="my-10 px-6">
            <div className="flex flex-row items-start justify-start max-w-xl mx-auto mb-10">
                <div
                    className="rounded-full h-32 w-32 flex-shrink-0 bg-cover bg-center border-2 border-secondary mr-8"
                    style={{ backgroundImage: `url(${creator})` }}
                />
                <div className="">
                    <p className="text-base text-primary">
                        Ingénieur de formation, je mets à profit mes compétences
                        techniques pour créer des produits simples, de qualité
                        et durables.
                    </p>
                    <p className="text-base text-primary mt-6 max-w-xl mx-auto text-justify">
                        Le cuir, noble et vivant, s'est imposé comme un matériau
                        de choix pour leur confection.
                    </p>
                    <p className="text-base text-primary max-w-xl mx-auto mt-10 mb-10">
                        Tous les articles sont fabriqués{' '}
                        <span className="text-secondary font-bold">
                            à la main
                        </span>
                        , à{' '}
                        <span className="text-secondary font-bold">Paris</span>{' '}
                        en France.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CreatorPage
