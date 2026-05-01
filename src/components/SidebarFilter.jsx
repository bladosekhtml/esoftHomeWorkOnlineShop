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
    const {setFilter} = useContext(FilterContext);

    const brands = [...new Set(products.map(function (product) {
        return product.brand
    }))].map(brand => {return {value: brand, label: brand}})
    brands.unshift({label: 'All Products', value: ''});

    const handleSubmitForm = (e) => {
        e.preventDefault();
        const formData = Object.fromEntries(new FormData(e.target));
        setFilter(formData);
    };

    return (
        <form onSubmit={handleSubmitForm}>
            <InfoBlock>
                <h4>Filters</h4>
                <InputsContainer labelText='Brand' type="columns">
                    <Select name='brand' options={brands} placeholder='brand' />
                </InputsContainer>
                <InputsContainer labelText='Price Range' type="columns">
                    <span style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(2, 1fr)',
                        gap: '10px',
                    }}>
                        <InputText name='minCost' placeholder='0' />
                        <InputText name='maxCost' placeholder='5000' />
                    </span>
                </InputsContainer>
                <Button type='submit'>Apply Filters</Button>
            </InfoBlock>
        </form>
    );
};

export default SidebarFilter;