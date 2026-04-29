import Container from "../Container";
import LinksList from "../links/LinksList";
import Link from "../links/Link";

import logo from '../../assets/logo.png';
import profileIcon from '../../assets/icons/profile.svg';
import cartIcon from '../../assets/icons/cart.svg';

const links = [
    {to: '/tv', text: 'TV'},
    {to: '/phone', text: 'Phone'},
    {to: '/laptop', text: 'Laptop'},
];

const Header = () => {
    return (
        <header className="header">
            <Container>
                <Link to='/catalog'><img alt='Логотип' src={logo} /></Link>
                <nav>
                    <LinksList links={links} />
                </nav>
                <span className='header__actions'>
                    <Link to='/profile'><img src={profileIcon} alt='Профиль' /></Link>
                    <Link to='/cart'><img src={cartIcon} alt='Корзина' /></Link>
                </span>
            </Container>
        </header>
    );
};

export default Header;