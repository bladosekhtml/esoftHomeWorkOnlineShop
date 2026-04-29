const InfoBlock = ({ children, className='', ...attrs }) => {
    return (
        <div className={`infoBlock ${className}`} {...attrs}>
            {children}
        </div>
    );
};

export default InfoBlock;