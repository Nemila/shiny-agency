import PropTypes from "prop-types";
import defPicture from "../../assets/profilePicture.jpg";
import styled from "styled-components";
import { theme } from "../../utils/style/theme";


const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    background-color: ${theme.colors.backgroundLight};
    border-radius: 30px;
    width: 350px;
    transition: 200ms;
    &:hover {
        cursor: pointer;
        box-shadow: 2px 2px 10px #e2e3e9;
    }
`

const CardLabel = styled.span`
    color: ${ theme.colors.primary };
    font-size: 22px;
    font-weight: bold;
`

const CardImage = styled.img`
    height: 80px;
    width: 80px;
    border-radius: 50%;
    object-fit: cover;
    margin: auto;
`

function Card({ label, title, picture }) {
    return (
        <StyledCard style={ { display: 'flex', flexDirection: 'column', padding: 15 } }>
            <CardLabel > { label } </CardLabel>
            <CardImage src={ picture } alt="freelance" />
            <span> { title } </span>
        </StyledCard>
    );
}

Card.propTypes = {
    label: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
}

Card.defaultProps = {
    title: "Mike",
    label: "Dev",
    picture: defPicture,
}

export default Card;