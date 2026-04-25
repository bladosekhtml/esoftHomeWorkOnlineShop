function Button({ children }) {
    return (
        <button style={{
            backgroundColor: '#000',
            color: '#fff',
            textAlign: 'center',
            borderRadius: 'var(--border-radius)',
            padding: '10px',
        }}>
            {children}
        </button>
    );
}

export default Button;