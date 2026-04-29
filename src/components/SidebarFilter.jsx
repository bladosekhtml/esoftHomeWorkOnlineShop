import { useContext } from "react";

import InputsContainer from "./inputs/InputsContainer";
import Select from "./inputs/Select";
import InputText from "./inputs/InputText";
import Button from "./Button";
import InfoBlock from "./InfoBlock";

import ProductsContext from '../contexts/ProductsContext';
import FilterContext from "../contexts/FilterContext";


const SidebarFilter = () => {
    const products = useContext(ProductsContext);
    const {handleChangeFilter} = useContext(FilterContext);

    const brands = [...new Set(products.map(function (product) {
        return product.brand
    }))].map(brand => {return {value: brand, label: brand}})
    brands.unshift({label: 'All Products', value: ''});

    return (
        <InfoBlock>
            <h4>Filters</h4>
            <InputsContainer labelText='Brand' type="columns">
                <Select options={brands} placeholder='brand' onChange={(e) => handleChangeFilter('brand', e.target.value)} />
            </InputsContainer>
            <InputsContainer labelText='Price Range' type="columns">
                <span style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '10px',
                }}>
                    <InputText placeholder='0' onChange={e => handleChangeFilter('minCost', e.target.value)} />
                    <InputText placeholder='5000' onChange={e => handleChangeFilter('maxCost', e.target.value)} />
                </span>
            </InputsContainer>
            <Button>Apply Filters</Button>
        </InfoBlock>
    );
};

export default SidebarFilter;