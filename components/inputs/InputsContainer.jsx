function InputsContainer({ labelText, children }) {
    return (
        <label style={{
            display: 'flex',
            flexDirection: 'column'
        }}>
            <span>{labelText}</span>
            {children}
        </label>
    );
};

export default InputsContainer;