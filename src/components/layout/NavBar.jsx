import Styled from './NavStyle.jsx';

const {Nav, NavCenter, NavH1, NavStrong, StyledLink} = Styled;
export default function NavBar() {
    return (
        <Nav>
            <NavCenter>
                <StyledLink to="/users">USERS</StyledLink>

                <NavH1>
                    <NavStrong>FAKE</NavStrong> Products
                </NavH1>

                <StyledLink to="/products">PRODUCTS</StyledLink>
            </NavCenter>
        </Nav>
    );
}