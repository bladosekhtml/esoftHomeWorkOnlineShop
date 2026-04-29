const Button = ({ children, className='', ...attrs}) => {
    return (
        <button className={`button--default ${className}`} {...attrs}>
            {children}
        </button>
    );
};

export default Button;