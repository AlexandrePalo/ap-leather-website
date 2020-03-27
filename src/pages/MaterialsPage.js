import React from 'react'
import butteroLeather from '../media/buttero_leather.jpg'
import filChinois from '../media/fil_chinois.jpg'
import coutureSellier from '../media/couture_sellier.jpg'

const MaterialPage = () => {
    return (
        <div className="max-w-4xl mx-auto px-6">
            <Material title="Cuir" img={butteroLeather} imgAlt="cuir Buttero">
                <p className="text-base text-primary mt-6">
                    Le cuir utilisé provient du nord de l'Italie, reconnu pour
                    son savoir-faire. Il est tanné en utilisant des tanins
                    naturels : ce procédé est appelé le "tannage végétal". Ce
                    tannage profère au cuir une grande qualité, un touché et une
                    couleur caractéristiques.
                </p>
                <p className="text-base text-primary mt-4">
                    Selon la disponibilté, les cuirs sont issus des tanneries{' '}
                    <span className="font-bold">Conceria Walpier</span> ou{' '}
                    <span className="font-bold">Tempesti</span>, en Italie.
                </p>
                <p className="text-base text-primary mt-4">
                    Evidemment, tous les cuirs sont de{' '}
                    <span className="font-bold">
                        véritables cuirs de vachette
                    </span>
                    . Ils peuvent être teints lors du processus de tannage, pour
                    obtenir par exemple les couleurs suivantes :
                </p>
                <div className="mt-4 flex flex-row flex-wrap">
                    <span className="text-sm flex flex-row items-center text-primary-lighter mr-4">
                        <span
                            className="rounded-full h-4 w-4 mr-1 inline-block"
                            style={{ backgroundColor: '#edc7b8' }}
                        />
                        Beige naturel (non teint)
                    </span>
                    <span className="text-sm flex flex-row items-center text-primary-lighter mr-4">
                        <span
                            className="rounded-full h-4 w-4 mr-1 inline-block"
                            style={{ backgroundColor: '#732812' }}
                        />
                        Brun cognac
                    </span>
                    <span className="text-sm flex flex-row items-center text-primary-lighter mr-4">
                        <span
                            className="rounded-full h-4 w-4 mr-1 inline-block"
                            style={{ backgroundColor: '#0D231A' }}
                        />
                        Vert agave
                    </span>
                    <span className="text-sm flex flex-row items-center text-primary-lighter mr-4">
                        <span
                            className="rounded-full h-4 w-4 mr-1 inline-block"
                            style={{ backgroundColor: '#712C32' }}
                        />
                        Rouge pourpre
                    </span>
                    <span className="text-sm flex flex-row items-center text-primary-lighter mr-4">
                        <span
                            className="rounded-full h-4 w-4 mr-1 inline-block"
                            style={{ backgroundColor: '#ED9753' }}
                        />
                        Brun ocre
                    </span>
                </div>
                <p className="text-sm text-primary-lighter mt-2">
                    D'autres couleurs sont disponibles à la demande.
                </p>
            </Material>
            <Material title="Fil" img={filChinois} imgAlt="fil au chinois">
                <p className="text-base text-primary mt-6">
                    Seul du <span className="font-bold">fil de lin</span> est
                    utilisé, de préférence fabriqué en France.
                </p>
                <p className="text-base text-primary mt-6">
                    Le lin, très résistant, est de premier choix pour la couture
                    du cuir. Il peut être teinté, mais nous utilisons quasiment
                    exclusivement du lin blanc pour son naturel.
                </p>
                <span className="mt-4 text-sm flex flex-row flex-wrap items-center text-primary-lighter">
                    <span
                        className="rounded-full h-4 w-4 mr-1 inline-block border border-solid border-primary-lighter border-px"
                        style={{ backgroundColor: '#ffffff' }}
                    />
                    Lin blanc
                </span>
                <p className="text-sm text-primary-lighter mt-2">
                    D'autres couleurs sont disponibles à la demande.
                </p>
            </Material>
            <Material
                title="Couture"
                img={coutureSellier}
                imgAlt="couture point sellier"
            >
                <p className="text-base text-primary mt-6">
                    Tous les objets sont{' '}
                    <span className="font-bold">cousus à la main</span>, selon
                    le <span className="font-bold">point sellier</span>.
                </p>
                <p className="text-base text-primary mt-6">
                    Ce point est très résistant et durable dans le temps. Il est
                    idéal pour tous les objets en cuir et donne un aspect
                    esthétique à la couture.
                </p>
            </Material>
        </div>
    )
}

const Material = ({ title, img, imgAlt, children }) => {
    return (
        <div className="flex flex-col sm:flex-row flex-start my-10">
            <div className="sm:w-2/3 sm:mr-8">
                <div className="relative w-full">
                    <span className="font-bold text-2xl text-secondary">
                        {title}
                    </span>
                    <div className="h-px w-full bg-secondary absolute left-0 top-full" />
                </div>
                {children}
            </div>
            <div className="sm:w-2/3 sm:pt-10 pt-4">
                <img
                    src={img}
                    alt={imgAlt}
                    className="object-cover object-center w-full h-full rounded-sm"
                    style={{ maxHeight: 400 }}
                />
            </div>
        </div>
    )
}

export default MaterialPage
