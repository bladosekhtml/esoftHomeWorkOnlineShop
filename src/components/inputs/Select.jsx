const Select = ({ options = [], valueKey = 'value', labelKey = 'label' , ...attrs}) => {
    return (
        <select className='input--default'{...attrs}>
            {options.map((option) => (
                <option key={option?.[valueKey]} value={option?.[valueKey]}>{option?.[labelKey]}</option>
            ))};
        </select>
    );
};

export default Select;