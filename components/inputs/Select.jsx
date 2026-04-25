function Select({ options = [], ...attrs}) {
    return (
        <select className='defaultInput'{...attrs}>
            {options.map((option) => (
                <option value={option.value}>{option.text}</option>
            ))};
        </select>
    );
};

export default Select;