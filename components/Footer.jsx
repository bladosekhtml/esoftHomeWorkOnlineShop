import Link from "./Link";
function Footer () {
    return (
        <footer style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            borderTop: 'var(--border)',
            padding: '30px 0'
        }}>
            <Link to={'/About'}>About</Link>
            <Link to={'/Support'}>Support</Link>
            <Link to={'/Legal'}>Legal</Link>
            <Link to={'/Newsletter'}>Newsletter</Link>
            <span>
                © 2026 TechStore. All rights reserved.
            </span>
        </footer>
    );
}

export default Footer;