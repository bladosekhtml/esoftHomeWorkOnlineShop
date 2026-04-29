import Container from "../Container";
import LinksList from "../links/LinksList";
import InputsContainer from "../inputs/InputsContainer";
import InputEmail from "../inputs/InputEmail";
import Button from "../Button";

const aboutLinksList = [
    {to: '/about', text: 'About Us'},
    {to: '/careers', text: 'Careers'},
    {to: '/press', text: 'Press'},
];

const supportLinksList = [
    {to: '/contact', text: 'Contact'},
    {to: '/faq', text: 'FAQ'},
    {to: '/shopping', text: 'Shopping'},
];

const legalLinksList = [
    {to: '/privacy-policy', text: 'Privacy Policy'},
    {to: '/terms-of-service', text: 'Terms of Service'},
    {to: '/returns', text: 'Returns'},
];

const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <nav>
                    <LinksList links={aboutLinksList} title='About' type="columns" />
                    <LinksList links={supportLinksList} title='Support' type="columns" />
                    <LinksList links={legalLinksList} title='Legal' type="columns" />
                    <div className="footerBlock--subscribe">
                        <h4>Newsletter</h4>
                        <InputsContainer labelText='Subscribe for exclusive deals' type='columns' classes='inputsContainer--gray'>
                            <InputEmail placeholder='Email' />
                            <Button>Subscribe</Button>
                        </InputsContainer>
                    </div>
                </nav>
                <span className="copyright">
                    © 2026 TechStore. All rights reserved.
                </span>
            </Container>
        </footer>
    );
};

export default Footer;