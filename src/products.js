import pouch1 from './media/pouch_1.jpg'
import pouch2 from './media/pouch_2.jpg'
import pouch3 from './media/pouch_3.jpg'
import travelWallet1 from './media/travel_wallet_1.jpg'
import travelWallet2 from './media/travel_wallet_2.jpg'
import cards1 from './media/cards_1.jpg'
import cards2 from './media/cards_2.jpg'

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
        name: 'PORTE 2 CARTES',
        minPrice: 20,
        images: [cards1, cards2],
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
        images: [cards1, cards2],
        descriptions: [
            'Léger et minimaliste, idéal pour une poche de pantalon ou un petit sac à main.',
            'Permets de garder à porté de main 6 cartes et quelques billets dans la poche centrale.',
            '6 poches "cartes" et une poche centrale.'
        ],
        colors: [
            {
                name: 'Naturel',
                hex: '#edc7b8'
            },
            { name: 'Fil lin blanc', hex: '#ffffff' }
        ]
    }
]
