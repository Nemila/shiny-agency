import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../utils/style/theme";

export const StyledLink = styled(Link)`
    padding: 8px 15px;
    color: ${ theme.colors.cPurple };
    text-decoration: none;
    font-size: 18px;
    border-radius: 50px;
    margin: 0 16px;
    transition: .2s ease all;
    
    &:hover {
        background-color: ${ theme.colors.cPurple };
        color: white;
    }
`