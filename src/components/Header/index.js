import styled from "styled-components";
import { Link } from "react-router-dom";
import logoImg from "../../assets/Vector.svg";

const StyledNav = styled.nav`
  width: 100%;
  min-height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const NavWrapper = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  padding: 1rem;
  @media screen and (max-width: 768px) {
    justify-content: center;
    gap: 1rem;
  }
`;
const Logo = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: black;
  font-size: 24px;
`;
const LogoIcon = styled.img`
  margin-right: 1rem;
  width: 48px;
`;
const Menu = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const NavItem = styled.li`
  list-style-type: none;
  margin-left: 2rem;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.secondary};
  transition: 200ms ease all;
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
const Button = styled(Link)`
  text-decoration: none;
  color: white;
  padding: 8px 16px;
  border-radius: 2rem;
  background-color: ${({ theme }) => theme.colors.primary};
  display: inline-block;
`;

function Header() {
  return (
    <StyledNav>
      <NavWrapper>
        <Logo to="/">
          <LogoIcon src={logoImg} />
          Shiny
        </Logo>
        <Menu>
          <NavItem>
            <StyledLink to="/">Accueil</StyledLink>
          </NavItem>
          <NavItem>
            <StyledLink to="/freelances">Profils</StyledLink>
          </NavItem>
          <NavItem>
            <Button to="/survey/1">Faire le test</Button>
          </NavItem>
        </Menu>
      </NavWrapper>
    </StyledNav>
  );
}
export default Header;
