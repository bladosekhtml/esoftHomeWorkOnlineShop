import { useContext } from "react";
import PageContent from "../../contexts/PageContext";

const Link = ({ to, children, className }) => {
    const {page, setPage} = useContext(PageContent);

    return (
        <a className={`link ${page === to ? 'active' : ''} ${className}`} onClick={() => {
            if (!to) return;

            setPage(to);
            window.history.pushState({}, '', `${to}`);
        }}>
            {children}
        </a>
    );
};

export default Link;