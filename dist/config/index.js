"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PRODUCT_CATEGORIES = void 0;
exports.PRODUCT_CATEGORIES = [
    {
        label: 'Foot Wears',
        value: 'foot_wears',
        featured: [
            {
                name: 'Editor picks',
                href: "/products?category=foot_wears",
            },
            {
                name: 'New Arrivals',
                href: '/products?category=foot_wears&sort=desc',
            },
            {
                name: 'Bestsellers',
                href: '/products?category=foot_wears',
            },
        ],
    },
    {
        label: 'Hoodie',
        value: 'hoodie',
        featured: [
            {
                name: 'Favorite Hoodie Picks',
                href: "/products?category=hoodie",
            },
            {
                name: 'New Arrivals',
                href: '/products?category=hoodie&sort=desc',
            },
            {
                name: 'Bestselling Hoodie',
                href: '/products?category=hoodie',
            },
        ],
    },
    {
        label: 'Trousers',
        value: 'trousers',
        featured: [
            {
                name: 'Favorite Trousers Picks',
                href: "/products?category=hoodie",
            },
            {
                name: 'New Arrivals',
                href: '/products?category=Trousers&sort=desc',
            },
            {
                name: 'Bestselling Trousers',
                href: '/products?category=Trousers',
            },
        ],
    },
    {
        label: 'Pants',
        value: 'pants',
        featured: [
            {
                name: 'Favorite Pants Picks',
                href: "/products?category=hoodie",
            },
            {
                name: 'New Arrivals',
                href: '/products?category=pants&sort=desc',
            },
            {
                name: 'Bestselling pants',
                href: '/products?category=pants',
            },
        ],
    },
];
