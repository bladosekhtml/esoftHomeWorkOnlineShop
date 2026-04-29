import Link from "./Link";

const LinksList = ({ links, title = '', type='row' }) => {
    return (
        <div className={`linksList linksList--${type}`}>
            {title !== '' && <h4>{title}</h4>}
            <ul>
                {
                    links.map(link => <Link key={link.to} to={link.to}>{link.text}</Link>)
                }
            </ul>
        </div>
    );
};

export default LinksList;