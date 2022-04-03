import React from "react";
import styled from "styled-components";
import homeImg from "../../assets/homeIllus.svg";
import { Link } from "react-router-dom";

const StyledHome = styled.div`
  width: 100%;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;
const HomeWrapper = styled.div`
  width: 90%;
  min-height: 85vh;

  padding: 1rem;
  border-radius: 10px;

  background-color: rgba(249, 249, 252, 1);

  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;

  @media screen and (max-width: 768px) {
    padding: 2rem;
    gap: 4rem;
  }
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1.5rem;
  max-width: 600px;
  @media screen and (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;
const Text = styled.h2`
  line-height: 48px;
  word-spacing: 10px;
`;
const Button = styled(Link)`
  text-decoration: none;
  color: white;
  padding: 8px 16px;
  border-radius: 2rem;
  background-color: rgba(88, 67, 228, 1);
  display: inline-block;
`;
const Illustration = styled.img`
  width: 80%;
  max-width: 400px;
  min-width: 300px;
`;

function Home() {
  return (
    <StyledHome>
      <HomeWrapper>
        <Content>
          <Text>
            Repérez vos besoins, on s'occupe du reste, avec les meilleurs
            talents
          </Text>
          <Button to="/survey/1">Faire le test</Button>
        </Content>
        <Illustration src={homeImg} />
      </HomeWrapper>
    </StyledHome>
  );
}

export default Home;
