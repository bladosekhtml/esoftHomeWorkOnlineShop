function Container({ children, ...attrs }) {
    return (
        <div className='container' {...attrs}>
            {children}
        </div>
    );
};

export default Container;