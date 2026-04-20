const products = [
    {
        id: 1,
        name: "Eros",
        brand: "Versace",
        type: "Eau de Toilette",
        gender: "Men",
        size: "100ml",
        price: 12500,
        image: "/versace-eros.webp",
        category: "Oriental Woody",
    },
    {
        id: 2,
        name: "Night Pour Homme II",
        brand: "Zara",
        type: "Eau de Parfum",
        gender: "Men",
        size: "100ml",
        price: 4500,
        image: "/night-pure-homme.webp",
        category: "Aquatic Fresh",
    },
    {
        id: 3,
        name: "Miss Dior",
        brand: "Dior",
        type: "Eau de Parfum",
        gender: "Women",
        size: "100ml",
        price: 18000,
        image: "/miss-dior.webp",
        category: "Floral",
    },
    {
        id: 4,
        name: "Bluebell",
        brand: "Penhaligon's",
        type: "Eau de Toilette",
        gender: "Women",
        size: "100ml",
        price: 22000,
        image: "/bluebell.webp",
        category: "Fresh Floral",
    },
    {
        id: 5,
        name: "Flora",
        brand: "Vision Scents",
        type: "Eau de Toilette",
        gender: "Women",
        size: "50ml",
        price: 3500,
        image: "/vision-flora.webp",
        category: "Floral Fruity",
    },
    {
        id: 6,
        name: "Obsession",
        brand: "Calvin Klein",
        type: "Eau de Toilette",
        gender: "Men",
        size: "75ml",
        price: 9500,
        image: "/obsession.webp",
        category: "Oriental Spicy",
    },
    {
        id: 7,
        name: "Smokey",
        brand: "OG Luxury",
        type: "Eau de Parfum",
        gender: "Unisex",
        size: "100ml",
        price: 6500,
        image: "/smokey.webp",
        category: "Smoky Woody",
    },
    {
        id: 8,
        name: "Flora Gorgeous Gardenia",
        brand: "Gucci",
        type: "Eau de Parfum",
        gender: "Women",
        size: "100ml",
        price: 21000,
        image: "/gucci-flora.webp",
        category: "Floral Fruity",
    },
];

export { products }

import { Droplet, Droplets, Sparkles, Wind } from 'lucide-react'

const experiences = [
    {
        icon: <Wind size={40} />,
        title: "Top Notes",
        desc: "The first impression — bright, fresh, and fleeting. Lasts 15–30 minutes.",
    },
    {
        icon: <Droplets size={40} />,
        title: "Heart Notes",
        desc: "The soul of the fragrance — rich, full-bodied, and lasting for hours.",
    },
    {
        icon: <Droplet size={40} />,
        title: "Base Notes",
        desc: "The foundation — deep, warm, and lingers on skin all day.",
    },
    {
        icon: <Sparkles size={40} />,
        title: "Sillage",
        desc: "The trail you leave behind — the invisible signature of your scent.",
    },
];

export { experiences }