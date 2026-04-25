import Link from "./Link";

function Header () {
    return (
        <header style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '10px',
            padding: '30px 0',
            borderBottom: 'var(--border)',
        }}>
            <img alt='тут логотип' src='/logo.png' />
            <nav style={{
                marginRight: 'auto',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
            }}>
                <Link to='/tv'>TV</Link>
                <Link>Phone</Link>
                <Link>Laptop</Link>
            </nav>
            <span style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
            }}>
                <Link><svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.6668 26.3333C15.1271 26.3333 15.5002 25.9602 15.5002 25.5C15.5002 25.0398 15.1271 24.6667 14.6668 24.6667C14.2066 24.6667 13.8335 25.0398 13.8335 25.5C13.8335 25.9602 14.2066 26.3333 14.6668 26.3333Z" stroke="#0A0A0A" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M23.8333 26.3333C24.2936 26.3333 24.6667 25.9602 24.6667 25.5C24.6667 25.0398 24.2936 24.6667 23.8333 24.6667C23.3731 24.6667 23 25.0398 23 25.5C23 25.9602 23.3731 26.3333 23.8333 26.3333Z" stroke="#0A0A0A" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.7085 9.70833H11.3752L13.5918 20.0583C13.6731 20.4374 13.8841 20.7762 14.1883 21.0165C14.4925 21.2569 14.8709 21.3836 15.2585 21.375H23.4085C23.7878 21.3744 24.1556 21.2444 24.451 21.0065C24.7465 20.7687 24.9519 20.4371 25.0335 20.0667L26.4085 13.875H12.2668" stroke="#0A0A0A" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</Link>
                <Link><svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.8332 25.5V23.8333C23.8332 22.9493 23.482 22.1014 22.8569 21.4763C22.2317 20.8512 21.3839 20.5 20.4998 20.5H15.4998C14.6158 20.5 13.7679 20.8512 13.1428 21.4763C12.5177 22.1014 12.1665 22.9493 12.1665 23.8333V25.5" stroke="#0A0A0A" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.9998 17.1667C19.8408 17.1667 21.3332 15.6743 21.3332 13.8333C21.3332 11.9924 19.8408 10.5 17.9998 10.5C16.1589 10.5 14.6665 11.9924 14.6665 13.8333C14.6665 15.6743 16.1589 17.1667 17.9998 17.1667Z" stroke="#0A0A0A" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</Link>
            </span>
        </header>
    );
}

export default Header;