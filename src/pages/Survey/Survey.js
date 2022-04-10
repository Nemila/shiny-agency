import React, { useState, useEffect } from "react";
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
  @media screen and (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
    padding: 2rem;
  }
`;
const Title = styled.h3`
  border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
  padding-bottom: 1rem;
`;
const Question = styled.div``;
const ButtonGroup = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-around;
  align-items: center;

  gap: 1rem;
`;
const Button = styled.button`
  border: none;
  background-color: ${({ theme }) => theme.colors.backgroudLight};
  width: 291px;
  height: 96px;
  font-size: 28px;
  border-radius: 31px;
  cursor: pointer;
  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.primary};
  }
`;
const LinkGroup = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 60%;
`;
const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.secondary};
`;
const Pending = styled.div`
  margin: auto;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 5px solid ${({ theme }) => theme.colors.primary};
  border-top-color: transparent;
  animation: pending 1s linear infinite;

  @keyframes pending {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

function Survey() {
  let [questions, setQuestions] = useState();

  let { questionNumber } = useParams();
  let index = parseInt(questionNumber);

  let nextPage = index + 1;
  let prevPage = index - 1;

  useEffect(() => {
    async function fetchAPI() {
      try {
        const response = await fetch("http://localhost:8000/survey");
        const { surveyData } = await response.json();
        setQuestions(surveyData);
      } catch (err) {
        console.log(err);
      } finally {
        console.log("Done");
      }
    }
    fetchAPI();
  }, []);

  return (
    <StyledSurvey>
      <SurveyWrapper>
        <Title>Question {questionNumber}</Title>
        <Question>
          {questions ? questions[index] : <Pending></Pending>}
        </Question>
        <ButtonGroup>
          <Button>Oui</Button>
          <Button>Non</Button>
        </ButtonGroup>
        <LinkGroup>
          {index > 1 && (
            <StyledLink to={`/survey/${prevPage}`}>Precedent</StyledLink>
          )}
          {index < 6 ? (
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
