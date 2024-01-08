"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Products = void 0;
var index_1 = require("./../../config/index");
exports.Products = {
    slug: 'products',
    admin: {
        useAsTitle: 'name',
        hidden: function (_a) {
            var user = _a.user;
            return user.role !== 'admin';
        },
    },
    access: {},
    fields: [
        {
            name: 'user',
            type: 'relationship',
            relationTo: 'users',
            hasMany: false,
            admin: {
                condition: function () { return false; },
            },
        },
        {
            name: 'name',
            label: 'Name',
            type: 'text',
            required: true,
        },
        {
            name: 'description',
            type: 'textarea',
            label: 'Product details',
        },
        {
            name: 'price',
            label: 'Price in USD',
            min: 0,
            max: 1000,
            type: 'number',
            required: true,
        },
        {
            name: 'size',
            label: 'Size',
            type: 'number',
            min: 12,
            max: 50,
            required: true,
        },
        {
            name: 'category',
            label: 'Category',
            type: 'select',
            options: index_1.PRODUCT_CATEGORIES.map(function (_a) {
                var label = _a.label, value = _a.value;
                return ({ label: label, value: value });
            }),
            required: true,
        },
        {
            name: 'approvedForSale',
            label: 'Product status',
            type: 'select',
            defaultValue: 'pending',
            access: {
                create: function (_a) {
                    var req = _a.req;
                    return req.user.role === 'admin';
                },
                read: function (_a) {
                    var req = _a.req;
                    return req.user.role === 'admin';
                },
                update: function (_a) {
                    var req = _a.req;
                    return req.user.role === 'admin';
                },
            },
            options: [
                {
                    label: 'Pending verification',
                    value: 'pending',
                },
                {
                    label: 'Approved',
                    value: 'approved',
                },
                {
                    label: 'Denied',
                    value: 'denied',
                },
            ],
        },
        {
            name: 'priceId',
            access: {
                create: function () { return false; },
                read: function () { return false; },
                update: function () { return false; },
            },
            type: 'text',
            admin: {
                hidden: true,
            },
        },
        {
            name: 'stripeId',
            access: {
                create: function () { return false; },
                read: function () { return false; },
                update: function () { return false; },
            },
            type: 'text',
            admin: {
                hidden: true,
            },
        },
        {
            name: 'images',
            type: 'array',
            label: 'Product images',
            minRows: 1,
            maxRows: 4,
            required: true,
            labels: {
                singular: 'Image',
                plural: 'Images',
            },
            fields: [
                {
                    name: 'image',
                    type: 'upload',
                    relationTo: 'media',
                    required: true,
                },
            ],
        },
    ],
};
