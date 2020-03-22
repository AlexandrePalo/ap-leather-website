import React from 'react'
import butteroLeather from './media/buttero_leather.jpg'
import filChinois from './media/fil_chinois.jpg'
import coutureSellier from './media/couture_sellier.jpg'

const MaterialPage = () => {
    return (
        <div className="max-w-4xl mx-auto">
            <Material title="Cuir" img={butteroLeather}>
                <p className="text-base text-primary mt-6">
                    Le cuir utilisé provient du nord de l'Italie, reconnu pour
                    son savoir faire. Il est tanné en utilisant des tanins
                    naturels : le "tannage végétal". Ce tannage profère au cuir
                    une grande qualité, un touché, une couleur et une odeur
                    caractéristiques.
                </p>
                <p className="text-base text-primary mt-4">
                    Selon la disponibilté, les cuirs sont issus des tanneries{' '}
                    <span className="font-bold">Conceria Walpier</span> ou{' '}
                    <span className="font-bold">Tempesti</span>, en Italie.
                </p>
                <p className="text-base text-primary mt-4">
                    Evidemment, tous les cuirs sont{' '}
                    <span className="font-bold">véritables</span>, de{' '}
                    <span className="font-bold">vachettes</span>. Ils peuvent
                    être teints lors du processus de tannage, pour avoir par
                    exemple les couleurs suivantes :
                </p>
                <div className="mt-4 flex flex-row">
                    <span className="text-sm flex flex-row items-center text-primary-lighter">
                        <span
                            className="rounded-full h-4 w-4 mr-1 inline-block"
                            style={{ backgroundColor: '#edc7b8' }}
                        />
                        Beige naturel (non teint)
                    </span>
                    <span className="text-sm flex flex-row items-center text-primary-lighter ml-4">
                        <span
                            className="rounded-full h-4 w-4 ml-1 mr-1 inline-block"
                            style={{ backgroundColor: '#732812' }}
                        />
                        Brun cognac
                    </span>
                    <span className="text-sm flex flex-row items-center text-primary-lighter ml-4">
                        <span
                            className="rounded-full h-4 w-4 ml-1 mr-1 inline-block"
                            style={{ backgroundColor: '#0D231A' }}
                        />
                        Vert agave
                    </span>
                </div>
                <p className="text-sm text-primary-lighter mt-2">
                    D'autres couleurs sont disponibles à la demande.
                </p>
            </Material>
            <Material title="Fil" img={filChinois}>
                <p className="text-base text-primary mt-6">
                    Seul du <span className="font-bold">fil de lin</span> est
                    utilisé, de préférence fabriqué en France.
                </p>
                <p className="text-base text-primary mt-6">
                    Le lin est très résistant et est de premier choix pour la
                    couture du cuir. Il peut être teinté, mais nous utilisons
                    quasiment exclusivement du lin blanc pour son naturel.
                </p>
                <span className="mt-4 text-sm flex flex-row items-center text-primary-lighter">
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
            <Material title="Couture" img={coutureSellier}>
                <p className="text-base text-primary mt-6">
                    Tous les objets sont{' '}
                    <span className="font-bold">cousus à la main</span>, selon
                    le <span className="font-bold">point sellier</span>.
                </p>
                <p className="text-base text-primary mt-6">
                    Ce point est très résistant et durable dans le temps. Il
                    donne un estéthique particulier à la couture et est idéal
                    pour tous les objets en cuir.
                </p>
            </Material>
        </div>
    )
}

const Material = ({ title, img, children }) => {
    return (
        <div className="flex flex-row my-10">
            <div className="w-2/3 mr-8">
                <div className="relative w-full">
                    <span className="font-bold text-2xl text-secondary">
                        {title}
                    </span>
                    <div className="h-px w-full bg-secondary absolute left-0 top-full" />
                </div>
                {children}
            </div>
            <div className="w-2/3 pt-10">
                <img
                    src={img}
                    className="object-cover object-center w-full h-full rounded-sm"
                    style={{ maxHeight: 400 }}
                />
            </div>
        </div>
    )
}

export default MaterialPage
