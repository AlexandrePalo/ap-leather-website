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

const en = {
    header: {
        links: [
            { label: 'HOME', to: '/' },
            { label: 'CREATIONS', to: '/creations' },
            { label: 'MATERIAL', to: '/material' },
            { label: 'THE BRAND', to: '/brand' }
        ]
    },
    footer: {
        about: {
            title: 'ABOUT',
            p1:
                'Products from the brand <span class="font-bold">AP Leather</span> are handmade in Paris, France',
            p2:
                'These elegant, modern and lasting leather accessories are going to come with you everyday.',
            p3:
                'This whole website, descriptions and pictures are Alexandre PALO exclusive property.'
        },
        networks: { title: 'SOCIAL NETWORKS' },
        contact: {
            title: 'CONTACT',
            p1:
                "Contact me for any questions you may have. I'm able to create articles on request (color, size, model, ...).",
            p2:
                'Do not hesitate to send me your suggestions in order to widen the collection !',
            buttonLabel: 'CONTACT ME'
        }
    },
    product: {
        discoverButton: { label: 'REVEAL' },
        purchaseButton: { label: 'PURCHASE' },
        price: 'FROM',
        detailed: {
            quality: {
                title: 'QUALITY',
                p:
                    'All articles are tailored in Paris with high-quality Italian leather and are fully handmade stitched with linen thread.'
            }
        }
    },
    brandPage: {
        p1:
            'Engineer by training, I put my technical expertise to good use to create simple, high-quality and sustainable articles.',
        p2:
            'Leather, fine and living, impose himself as the best material for their tailoring.',
        p3:
            "All products are <span class='text-secondary font-bold'>handmade</span> in <span class='text-secondary font-bold'>Paris</span>, France."
    },
    materialPage: {
        leather: {
            title: 'Leather',
            imgAlt: 'buttero leather',
            p1:
                'The leather use comes from northern Italy, known for its savoir-faire. It is tanned using natural tannins: this process is known as vegetal tanning. It gives leather a high quality, soft to the touch and a signature colors.',
            p2:
                "According to availability, leathers come from <span class='font-bold'>Conceria Walpier</span> or <span class='font-bold'>Tempesti</span> tanneries, in Italy.",
            p3:
                "Of course, all leather are <span class='font-bold'>genuine calfskin leather</span>. They may be dyed during the tanning process, to obtain for install the following colors:",
            p4: 'More colors may be available on demand.',
            colors: [
                {
                    label: 'Natural beige (undyed)',
                    hex: '#edc7b8'
                },
                {
                    label: 'Cognac brown',
                    hex: '#732812'
                },
                {
                    label: 'Agave green',
                    hex: '#0D231A'
                },
                {
                    label: 'Purple red',
                    hex: '#712C32'
                },
                {
                    label: 'Ocher brown',
                    hex: '#ED9753'
                }
            ]
        },
        thread: {
            title: 'Thread',
            imgAlt: 'au chinois thread',
            p1:
                "Only <span class='font-bold'>linen thread</span> is used, ideally from France.",
            p2:
                'Linen is very sturdy, it is the premium choice for leather stitching. It can be dyed, but we usually only use white linen for its natural.',
            p3: 'More colors may be available on demand.',
            color: {
                label: 'White linen',
                hex: '#ffffff'
            }
        },
        stitch: {
            title: 'Stitching',
            imgAlt: 'saddle stitch',
            p1:
                "All articles are <span class='font-bold'>hand stitched</span>, with the <span class='font-bold'>saddle stitch</span>.",
            p2:
                'This stitch is very resistant over time. It is ideal for all leather products and give a aesthetically look to stitches.'
        }
    },
    products: [
        {
            id: 1,
            name: 'ZIP POUCH S & L',
            minPrice: 20,
            images: [pouch1, pouch2, pouch3],
            descriptions: [
                'Coin purse or holdall, you decide !',
                'Zip fastening. 2 sizes available : S (about 12 cm wide) and M (about 15 cm wide).'
            ],
            colors: [
                {
                    name: 'Cognac brown',
                    hex: '#732812'
                },
                {
                    name: 'Agave green',
                    hex: '#0D231A'
                },
                { name: 'White linen thread', hex: '#ffffff' }
            ],
            link:
                'https://www.etsy.com/fr/listing/790664011/leather-zip-pouch-s-l'
        },
        {
            id: 2,
            name: 'PASSPORT WALLET',
            minPrice: 30,
            images: [travelWallet1, travelWallet2],
            descriptions: [
                'Protect your passport and all documents needed to your travel.',
                '2 card compartments, a central pocket and a passport spot.'
            ],
            colors: [
                {
                    name: 'Agave green',
                    hex: '#0D231A'
                },
                { name: 'White linen thread', hex: '#ffffff' }
            ],
            link:
                'https://www.etsy.com/fr/listing/790664485/leather-passport-wallet'
        },
        {
            id: 3,
            name: '2 CARDS CASE',
            minPrice: 20,
            images: [c2ards1, c2ards2],
            descriptions: [
                'With its minimalist size, the cards wallet will easily slip into your pocket.',
                'Perfect to have within easy reach your credit card and your transport pass. The thinness of the case allow you to use contact-free features throught leather, a daily valuable option !',
                '2 card compartments.'
            ],
            colors: [
                {
                    name: 'Cognac brown',
                    hex: '#732812'
                },
                {
                    name: 'Agave green',
                    hex: '#0D231A'
                },
                { name: 'White linen thread', hex: '#ffffff' }
            ],
            link:
                'https://www.etsy.com/fr/listing/776781946/leather-2-cards-case'
        },
        {
            id: 4,
            name: 'CARDS WALLET',
            minPrice: 30,
            images: [c6ards1, c6ards2, c6ards3],
            descriptions: [
                'Light and minimalist, the cards wallet includes 6 compartments (3 on each side) and a central pocket, ideal for a few bills.',
                'It will easily find its place in your vest pocket or inside your purse.',
                '6 card compartment and a central pocket.'
            ],
            colors: [
                {
                    name: 'Natural',
                    hex: '#edc7b8'
                },
                { name: 'White linen thread', hex: '#ffffff' }
            ],
            link:
                'https://www.etsy.com/fr/listing/790665063/leather-cards-wallet'
        },
        {
            id: 5,
            name: 'PEN HOLDER',
            minPrice: 10,
            images: [pen1, pen2, pen3],
            descriptions: [
                'This elegant case will protect your fountain or ballpoint pen during all your trips. A must-have !'
            ],
            colors: [
                {
                    name: 'Ocher brown',
                    hex: '#ED9753'
                },
                { name: 'White linen thread', hex: '#ffffff' }
            ],
            link: 'https://www.etsy.com/fr/listing/790661599/leather-pen-holder'
        },
        {
            id: 6,
            name: 'BADGE HOLDER',
            minPrice: 10,
            images: [badge1, badge2, badge3],
            descriptions: [
                'Protect your enterprise badge with style by using the chic leather holder.',
                'Thanks to its thinness, you are able to your badge through this holder.',
                'Suitable for a card about 86x56 mm (credit card format).'
            ],
            colors: [
                {
                    name: 'Purple red',
                    hex: '#712C32'
                },
                { name: 'White linen thread', hex: '#ffffff' }
            ],
            link:
                'https://www.etsy.com/fr/listing/776778930/leather-badge-holder'
        }
    ]
}

export default en
