import PropTypes from "prop-types";
import defPicture from "../../assets/profilePicture.jpg";
import styled from "styled-components";
import { theme } from "../../utils/style/theme";

const StyledCard = styled.div`
  width: 100%;
  height: 250px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  background-color: ${theme.colors.backgroundLight};
  border-radius: 1rem;

  cursor: pointer;
  transition: 200ms ease all;

  &:hover {
    box-shadow: 2px 2px 10px #e2e3e9;
  }
`;

const CardLabel = styled.h5`
  text-align: left;
  color: ${theme.colors.primary};
  font-weight: bold;
`;

const CardImage = styled.img`
  height: 120px;
  width: 120px;
  margin: 0 auto;
  border-radius: 50%;
  object-fit: cover;
`;

function Card({ label, title, picture }) {
  return (
    <StyledCard
      style={{ display: "flex", flexDirection: "column", padding: 15 }}
    >
      <CardLabel> {label} </CardLabel>
      <CardImage src={picture} alt="freelance" />
      <span> {title} </span>
    </StyledCard>
  );
}

Card.propTypes = {
  label: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
};

Card.defaultProps = {
  title: "Mike",
  label: "Dev",
  picture: defPicture,
};

export default Card;
