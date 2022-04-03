import defaultPicture from "../../assets/profilePicture.jpg";
import Card from "../../components/Card/index";
import styled from "styled-components";

const freelanceProfiles = [
  {
    name: "Jean Michel",
    jobTitle: "Developpeur fullstack",
    picture: defaultPicture,
  },
  {
    name: "Lamine",
    jobTitle: "Mobile Dev",
    picture: defaultPicture,
  },
  {
    name: "Breon Mars",
    jobTitle: "UX/UI designer",
    picture: defaultPicture,
  },
  {
    name: "Mario lacarte",
    jobTitle: "Project manager",
    picture: defaultPicture,
  },
];

const StyledFreelance = styled.div`
  width: 100%;
  min-height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;
const FreelanceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 2.5rem;
  padding: 1rem;
`;
const Title = styled.h3``;
const Desc = styled.p``;
const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 250px);

  gap: 1rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 250px;
  }
`;

function Freelances() {
  return (
    <StyledFreelance>
      <FreelanceWrapper>
        <Title>Trouvez votre prestataire</Title>
        <Desc>Chez Shiny nous réunissons les meilleurs profils pour vous.</Desc>
        <CardContainer>
          {freelanceProfiles.map((profile, index) => (
            <Card
              key={`${profile.name}-${index}`}
              label={profile.jobTitle}
              picture={profile.picture}
              title={profile.name}
            />
          ))}
        </CardContainer>
      </FreelanceWrapper>
    </StyledFreelance>
  );
}

export default Freelances;
