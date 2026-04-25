import { useContext } from 'react';

import Header from '../components/Header'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar';
import ProductSort from '../components/ProductSort';
import ProductCart from '../components/ProductCart';

import { ProductsContext } from '../src/context/ProductsContext';

function Home () {
    const products = useContext(ProductsContext).slice(0, 8);

    return (
        <>
            <Header />
            
            <main style={{
                padding: '30px 0',
                display: 'flex',
                gap: '10px'
            }}>
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
                        {products.length ?? 0} products
                        <ProductSort />
                    </div>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(4, 1fr)',
                        gap: '30px',
                    }}>
                        {products.map(product => (
                            <ProductCart product={product} />
                        ))}
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
};

export default Home