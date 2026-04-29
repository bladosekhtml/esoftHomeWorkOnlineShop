

const InputsContainer = ({ labelText, children, type='row', classes={}, ...attrs}) => {
    return (
        <label className={`inputsContainer inputsContainer--${type} ${classes}`} {...attrs}>
            <span className="label">{labelText}</span>
            {children}
        </label>
    );
};

export default InputsContainer;