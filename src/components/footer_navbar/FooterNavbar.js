import { Link } from 'react-router-dom';

const FooterNavbar = () => {
    return (
        <section>
            <div>
                <Link to="/info">Info</Link>
            </div>
            <div>
                <Link to="/">Logo</Link>
            </div>
            <div>
                <Link to="/contact">Contact</Link>
            </div>
        </section>
    )
}

export default FooterNavbar;