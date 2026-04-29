const Container = ({ children, classes='', ...attrs}) => {
    return (
        <div className={`container ${classes}`} {...attrs}>
            {children}
        </div>
    );
};

export default Container;