import { useParams } from "react-router-dom";
import { Container } from "../../components/Styled/Container.styled";
import { StyledLink } from "../../components/Styled/Link.styled";

function Survey() {
    let { questionNumber } = useParams();
    let index = parseInt(questionNumber);

    let pQuestion = index === 1 ? 1 : index - 1;
    let nQuestion = index + 1;

    return (
        <div className="survey">
            <Container>
                <h1>Survey page</h1>
                <p>Question number {index}</p>

                <div>
                    <StyledLink
                        disabled={ index === 1 ? true : false }
                        to={ `/survey/${ pQuestion }` }
                    > Previous </StyledLink>
                    { index === 10 ?
                        <StyledLink to="/results"> Resultats </StyledLink> :
                        <StyledLink to={ `/survey/${ nQuestion }` }> Next </StyledLink> }
                </div>
            </Container>
        </div>
    );
}

export default Survey;