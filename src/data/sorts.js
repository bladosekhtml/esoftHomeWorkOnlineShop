const productSortOptions = [
    {
        label: 'Default',
        value: 'default',
    },
    {
        label: 'Price: Low to High',
        value: 'priceFromMin',
    },
    {
        label: 'Price: High to Low',
        value: 'priceFromMax',
    },
];

const sortCallbacks = (sortType) => {
    switch (sortType) {
        case 'priceFromMin': return (a, b) => a['price'] - b['price'];
        case 'priceFromMax': return (a, b) => b['price'] - a['price'];
        default: return (a, b) => a['id'] - b['id'];
    }
};

export { productSortOptions, sortCallbacks };