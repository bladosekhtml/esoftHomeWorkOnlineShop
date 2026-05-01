import { useContext, useMemo, useState } from 'react';

import Sidebar from '../components/Sidebar';
import ProductSort from '../components/product/ProductSort';
import ProductCard from '../components/product/ProductCard';

import ProductsContext from '../contexts/ProductsContext';

import { sortCallbacks } from '../data/sorts';
import FilterContext from '../contexts/FilterContext';

const ProductListContent = () => {
    const products = useContext(ProductsContext);

    const [sort, setSort] = useState('default');
    const [filter, setFilter] = useState({});

    const filteredProducts = useMemo(() => {
        let items = products;
        
        if (filter?.minCost && parseFloat(filter?.minCost) >= 0) items = items.filter(i => i.price >= parseFloat(filter['minCost'])); 
        if (filter?.minCost && parseFloat(filter?.maxCost) >= 0) items = items.filter(i => i.price <= parseFloat(filter['maxCost'])); 
        if (filter?.brand) items = items.filter(i => i.brand == filter.brand);

        return items;
    }, [filter, products]);

    return (
        <FilterContext.Provider value={{filter, setFilter}}>
            <Sidebar />
            <section style={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%'
            }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                }}>
                    {filteredProducts.length || 0} products
                    <ProductSort onChange={setSort} />
                </div>
                <div className='productList'>
                    {filteredProducts.sort(sortCallbacks(sort)).map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </section>
        </FilterContext.Provider>
    );
};

export default ProductListContent;