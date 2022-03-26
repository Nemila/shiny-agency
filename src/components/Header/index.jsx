import styled from "styled-components";
import { Container } from "../Styled/Container.styled";
import { StyledLink } from "../Styled/Link.styled";


const StyledNav = styled.nav`
    border-bottom: 1px solid lightgrey;
`


function Header() {

    return (
        <StyledNav>
            <Container>
                <StyledLink to="/"> Home </StyledLink>
                <StyledLink to="/survey/1" > Survey </StyledLink>
                <StyledLink to="/freelances"> Freelances </StyledLink>
            </Container>
        </StyledNav>
    )
}
export default Header;