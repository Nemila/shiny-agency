import defaultPicture from "../../assets/profilePicture.jpg";
import Card from "../../components/Card/index";
import { Container } from "../../components/Styled/Container.styled";
import styled from "styled-components";
import { theme } from "../../utils/style/theme";

const freelanceProfiles = [
    {
        name: "Jean Michel",
        jobTitle: "Developpeur fullstack",
        picture: defaultPicture
    },
    {
        name: "Lamine",
        jobTitle: "Mobile Dev",
        picture: defaultPicture
    },
    {
        name: "Breon Mars",
        jobTitle: "UX/UI designer",
        picture: defaultPicture
    },
    {
        name: "Mario lacarte",
        jobTitle: "Project manager",
        picture: defaultPicture
    }
]

const StyledCardCont = styled.div`
    display: grid;
    gap: 24px;
    grid-template-rows: 350px 350px;
    grid-template-columns: repeat(2, 1fr);
`


function Freelances() {
    return (
        <div>
            <Container>
            <h1> Freelances </h1>
            <StyledCardCont>
                { freelanceProfiles.map((profile, index) => (
                    <Card 
                        key={ `${ profile.name }-${ index }` }
                        label={ profile.jobTitle }
                        picture={ profile.picture }
                        title={ profile.name }
                    />
                )) }
            </StyledCardCont>
            </Container>
        </div>
    );
}

export default Freelances;