import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const StyledSurvey = styled.div`
  width: 100%;
  flex-grow: 1;

  display: flex;
  justify-content: center;
  align-items: center;
`;
const SurveyWrapper = styled.div`
  width: 60%;
  max-width: 600px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  gap: 3rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 2rem;
  }
`;
const Title = styled.h3`
  border-bottom: 2px solid rgba(88, 67, 228, 1);
  padding-bottom: 1rem;
`;
const Question = styled.p``;
const ButtonGroup = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-around;
  align-items: center;

  gap: 1rem;
`;
const Button = styled.button`
  border: none;
  background-color: rgba(249, 249, 252, 1);
  width: 291px;
  height: 96px;
  font-size: 28px;
  border-radius: 31px;
  cursor: pointer;
  &:hover {
    border: 1px solid rgba(88, 67, 228, 1);
  }
`;
const LinkGroup = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 60%;
`;
const StyledLink = styled(Link)`
  color: rgba(47, 46, 65, 1);
`;

function Survey() {
  let { questionNumber } = useParams();
  let index = parseInt(questionNumber);
  let nextPage = index + 1;
  let prevPage = index - 1;

  return (
    <StyledSurvey>
      <SurveyWrapper>
        <Title>Question {questionNumber}</Title>
        <Question>
          Votre application doit-elle impérativement apparaître en premier dans
          les résultats de recherche ?
        </Question>
        <ButtonGroup>
          <Button>Oui</Button>
          <Button>Non</Button>
        </ButtonGroup>
        <LinkGroup>
          {index > 1 && (
            <StyledLink to={`/survey/${prevPage}`}>Precedent</StyledLink>
          )}

          {index < 10 ? (
            <StyledLink to={`/survey/${nextPage}`}>Suivant</StyledLink>
          ) : (
            <StyledLink to={`/results`}>Resultats</StyledLink>
          )}
        </LinkGroup>
      </SurveyWrapper>
    </StyledSurvey>
  );
}

export default Survey;
