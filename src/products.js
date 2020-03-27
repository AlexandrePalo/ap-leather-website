import pouch1 from './media/pouch_1.jpg'
import pouch2 from './media/pouch_2.jpg'
import pouch3 from './media/pouch_3.jpg'
import travelWallet1 from './media/travel_wallet_1.jpg'
import travelWallet2 from './media/travel_wallet_2.jpg'
import c2ards1 from './media/2_cards_1.jpg'
import c2ards2 from './media/2_cards_2.jpg'
import c6ards1 from './media/6_cards_1.jpg'
import c6ards2 from './media/6_cards_2.jpg'
import c6ards3 from './media/6_cards_3.jpg'
import pen1 from './media/pen_1.jpg'
import pen2 from './media/pen_2.jpg'
import pen3 from './media/pen_3.jpg'
import badge1 from './media/badge_1.jpg'
import badge2 from './media/badge_2.jpg'
import badge3 from './media/badge_3.jpg'

export default [
    {
        id: 1,
        name: 'POCHETTE ZIP S & M',
        minPrice: 20,
        images: [pouch1, pouch2, pouch3],
        descriptions: [
            'Cette pochette permet de garder au chaud ce que vous voulez : de la monnaie, des bijoux, un objet sentimental, des outils, ...',
            'Disponible en deux tailles : S adaptée à un sac à main et L pour rester à la maison.'
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
        ]
    },
    {
        id: 2,
        name: 'PORTE PASSEPORT',
        minPrice: 30,
        images: [travelWallet1, travelWallet2],
        descriptions: [
            'Protégez votre passeport et ayez à disposition tous les documents nécessaires à votre voyage.',
            '2 poches "cartes", une poche centrale et un emplacement passeport.'
        ],
        colors: [
            {
                name: 'Vert agave',
                hex: '#0D231A'
            },
            { name: 'Fil lin blanc', hex: '#ffffff' }
        ]
    },
    {
        id: 3,
        name: 'ETUI 2 CARTES',
        minPrice: 20,
        images: [c2ards1, c2ards2],
        descriptions: [
            'Fin et léger, gardez à disposition dans votre poche 2 cartes.',
            'Parfait pour utiliser votre carte bancaire et un pass transport tous les jours. Fonctionne aussi en "sans contact" à travers le cuir.',
            '2 poches "cartes".'
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
        ]
    },
    {
        id: 4,
        name: 'PORTE 6 CARTES',
        minPrice: 30,
        images: [c6ards1, c6ards2, c6ards3],
        descriptions: [
            'Léger et minimaliste, idéal pour une poche de pantalon ou un petit sac à main.',
            'Permets de garder à porté de main 6 cartes (3 de chaque côté) et quelques billets dans la poche centrale.',
            '6 poches "cartes" et une poche centrale.'
        ],
        colors: [
            {
                name: 'Naturel',
                hex: '#edc7b8'
            },
            { name: 'Fil lin blanc', hex: '#ffffff' }
        ]
    },
    {
        id: 5,
        name: 'ETUI PLUME',
        minPrice: 10,
        images: [pen1, pen2, pen3],
        descriptions: [
            'Protéger votre stylo, plume ou autre, dans un etui en cuir minimalist et solide.'
        ],
        colors: [
            {
                name: 'Brun ocre',
                hex: '#ED9753'
            },
            { name: 'Fil lin blanc', hex: '#ffffff' }
        ]
    },
    {
        id: 6,
        name: 'PORTE BADGE',
        minPrice: 10,
        images: [badge1, badge2, badge3],
        descriptions: [
            "Garder votre badge d'entreprise avec style, dans un étui élégant en cuir.",
            "L'accès sans contact fonctionne également à travers le porte badge.",
            'Adapté pour une carte environ 86x56 mm (CB).'
        ],
        colors: [
            {
                name: 'Rouge pourpre',
                hex: '#712C32'
            },
            { name: 'Fil lin blanc', hex: '#ffffff' }
        ]
    }
]
