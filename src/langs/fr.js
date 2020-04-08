import pouch1 from '../media/compressed/pouch_1-compressor.jpg'
import pouch2 from '../media/compressed/pouch_2-compressor.jpg'
import pouch3 from '../media/compressed/pouch_3-compressor.jpg'
import travelWallet1 from '../media/compressed/travel_wallet_1-compressor.jpg'
import travelWallet2 from '../media/compressed/travel_wallet_2-compressor.jpg'
import c2ards1 from '../media/compressed/2_cards_1-compressor.jpg'
import c2ards2 from '../media/compressed/2_cards_2-compressor.jpg'
import c6ards1 from '../media/compressed/6_cards_1-compressor.jpg'
import c6ards2 from '../media/compressed/6_cards_2-compressor.jpg'
import c6ards3 from '../media/compressed/6_cards_3-compressor.jpg'
import pen1 from '../media/compressed/pen_1-compressor.jpg'
import pen2 from '../media/compressed/pen_2-compressor.jpg'
import pen3 from '../media/compressed/pen_3-compressor.jpg'
import badge1 from '../media/compressed/badge_1-compressor.jpg'
import badge2 from '../media/compressed/badge_2-compressor.jpg'
import badge3 from '../media/compressed/badge_3-compressor.jpg'

const fr = {
    header: {
        links: [
            { label: 'ACCUEIL', to: '/' },
            { label: 'CREATIONS', to: '/creations' },
            { label: 'MATERIAUX', to: '/material' },
            { label: 'LA MARQUE', to: '/brand' }
        ]
    },
    footer: {
        about: {
            title: 'A PROPOS',
            p1:
                'Les articles de la marque <span class="font-bold">AP Leather</span> sont confectionnés, à la main, à Paris, en France.',
            p2:
                'Ces accessoires en cuir élégants, modernes et durables vous accompagneront tous les jours.',
            p3:
                "L'ensemble de ce site web, descriptions et photos sont la propriété exclusive d'Alexandre PALO."
        },
        networks: { title: 'RESEAUX' },
        contact: {
            title: 'CONTACT',
            p1:
                'Contactez-moi pour toutes vos questions. Je peux fabriquer des produits à la demande (couleur, taille, modèle, ...).',
            p2:
                "N'hésitez pas à m'envoyez vous suggestions pour agrandir la collection !",
            buttonLabel: 'ME CONTACTER'
        }
    },
    product: {
        discoverButton: { label: 'DECOUVRIR' },
        purchaseButton: { label: 'COMMANDER' },
        price: 'A PARTIR DE',
        detailed: {
            quality: {
                title: 'QUALITE',
                p:
                    'Tous les articles sont confectionnés à Paris avec du cuir italien de grande qualité et sont cousus intégralement à la main au fil de lin.'
            }
        }
    },
    brandPage: {
        p1:
            'Ingénieur de formation, je mets à profit mes compétences techniques pour créer des produits simples, de qualité et durables.',
        p2:
            "Le cuir, noble et vivant, s'est imposé comme un matériau de choix pour leur confection.",
        p3:
            "Tous les articles sont fabriqués <span class='text-secondary font-bold'>à la main</span>, à <span class='text-secondary font-bold'>Paris</span> en France."
    },
    materialPage: {
        leather: {
            title: 'Cuir',
            imgAlt: 'cuir buttero',
            p1:
                "Le cuir utilisé provient du nord de l'Italie, reconnu pour son savoir-faire. Il est tanné en utilisant des tanins naturels : ce procédé est appelé le tannage végétal. Ce tannage profère au cuir une grande qualité, un touché et une couleur caractéristiques.",
            p2:
                "Selon la disponibilté, les cuirs sont issus des tanneries <span class='font-bold'>Conceria Walpier</span> ou <span class='font-bold'>Tempesti</span>, en Italie.",
            p3:
                "Evidemment, tous les cuirs sont de <span class='font-bold'>véritables cuirs de vachette</span>. Ils peuvent être teints lors du processus de tannage, pour obtenir par exemple les couleurs suivantes :",
            p4: "D'autres couleurs sont disponibles à la demande.",
            colors: [
                {
                    label: 'Beige naturel (non teint)',
                    hex: '#edc7b8'
                },
                {
                    label: 'Brun cognac',
                    hex: '#732812'
                },
                {
                    label: 'Vert agave',
                    hex: '#0D231A'
                },
                {
                    label: 'Rouge pourpre',
                    hex: '#712C32'
                },
                {
                    label: 'Brun ocre',
                    hex: '#ED9753'
                }
            ]
        },
        thread: {
            title: 'Fil',
            imgAlt: 'fil au chinois',
            p1:
                "Seul du <span class='font-bold'>fil de lin</span> est utilisé, de préférence fabriqué en France.",
            p2:
                'Le lin, très résistant, est de premier choix pour la couture du cuir. Il peut être teinté, mais nous utilisons quasiment exclusivement du lin blanc pour son naturel.',
            p3: "D'autres couleurs sont disponibles à la demande.",
            color: {
                label: 'Lin blanc',
                hex: '#ffffff'
            }
        },
        stitch: {
            title: 'Couture',
            imgAlt: 'couture point sellier',
            p1:
                "Tous les objets sont <span class='font-bold'>cousus à la main</span>, selon le <span class='font-bold'>point sellier</span>.",
            p2:
                'Ce point est très résistant et durable dans le temps. Il est idéal pour tous les objets en cuir et donne un aspect esthétique à la couture.'
        }
    },
    products: [
        {
            id: 1,
            name: 'POCHE ZIP S & L',
            minPrice: 20,
            images: [pouch1, pouch2, pouch3],
            descriptions: [
                'Porte-monnaie ou pochette fourre-tout, à vous de décider !',
                'Fermeture par zip. Disponible en deux tailles : S (environ 12 cm de large) et M (environ 15 cm de large).'
            ],
            colors: [
                {
                    name: 'Brun cognac',
                    hex: '#732812'
                },
                {
                    name: 'Vert agave',
                    hex: '#0D231A'
                },
                { name: 'Fil lin blanc', hex: '#ffffff' }
            ],
            link:
                'https://www.etsy.com/fr/listing/790664011/leather-zip-pouch-s-l'
        },
        {
            id: 2,
            name: 'PORTE PASSEPORT',
            minPrice: 30,
            images: [travelWallet1, travelWallet2],
            descriptions: [
                'Protégez votre passeport et tous les documents nécessaires à votre voyage.',
                '2 compartiments "cartes", une poche centrale et un emplacement passeport.'
            ],
            colors: [
                {
                    name: 'Vert agave',
                    hex: '#0D231A'
                },
                { name: 'Fil lin blanc', hex: '#ffffff' }
            ],
            link:
                'https://www.etsy.com/fr/listing/790664485/leather-passport-wallet'
        },
        {
            id: 3,
            name: 'ETUI 2 CARTES',
            minPrice: 20,
            images: [c2ards1, c2ards2],
            descriptions: [
                'Avec son format minimaliste, ce porte-cartes se glissera facilement dans votre poche.',
                "Parfait pour garder à portée de main votre carte bancaire et votre pass transport. La finesse de cet étui permet d'utiliser le sans contact à travers le cuir, une fonctionnalité bien appréciable au quotidien !",
                '2 compartiments "cartes".'
            ],
            colors: [
                {
                    name: 'Brun cognac',
                    hex: '#732812'
                },
                {
                    name: 'Vert agave',
                    hex: '#0D231A'
                },
                { name: 'Fil lin blanc', hex: '#ffffff' }
            ],
            link:
                'https://www.etsy.com/fr/listing/776781946/leather-2-cards-case'
        },
        {
            id: 4,
            name: 'PORTE CARTES',
            minPrice: 30,
            images: [c6ards1, c6ards2, c6ards3],
            descriptions: [
                "Léger et minimaliste, ce porte-cartes comporte 6 emplacements (3 sur chaque face) ainsi qu'une poche centrale, idéale pour y ranger quelques billets.",
                'Il trouvera facilement sa place dans la poche de votre veste ou dans votre sac à main.',
                '6 compartiments "cartes" et une poche centrale.'
            ],
            colors: [
                {
                    name: 'Naturel',
                    hex: '#edc7b8'
                },
                { name: 'Fil lin blanc', hex: '#ffffff' }
            ],
            link:
                'https://www.etsy.com/fr/listing/790665063/leather-cards-wallet'
        },
        {
            id: 5,
            name: 'ETUI PLUME',
            minPrice: 10,
            images: [pen1, pen2, pen3],
            descriptions: [
                'Cet élégant étui protégera votre stylo plume ou bille lors de vos déplacements. Un indispensable !'
            ],
            colors: [
                {
                    name: 'Brun ocre',
                    hex: '#ED9753'
                },
                { name: 'Fil lin blanc', hex: '#ffffff' }
            ],
            link: 'https://www.etsy.com/fr/listing/790661599/leather-pen-holder'
        },
        {
            id: 6,
            name: 'PORTE-BADGE',
            minPrice: 10,
            images: [badge1, badge2, badge3],
            descriptions: [
                "Protégez votre badge d'entreprise avec style en le glissant dans cet élégant étui en cuir.",
                'Grâce à sa faible épaisseur, vous pouvez utiliser votre carte à travers le porte-badge sans contact.',
                "Adapté pour une carte d'environ 86x56 mm (format carte bancaire)."
            ],
            colors: [
                {
                    name: 'Rouge pourpre',
                    hex: '#712C32'
                },
                { name: 'Fil lin blanc', hex: '#ffffff' }
            ],
            link:
                'https://www.etsy.com/fr/listing/776778930/leather-badge-holder'
        }
    ]
}

export default fr
