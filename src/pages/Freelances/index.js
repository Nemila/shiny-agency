import React, { useState, useEffect } from "react";
import Card from "../../components/Card/index";
import styled from "styled-components";

const StyledFreelance = styled.div`
  width: 100%;
  min-height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;
const FreelanceWrapper = styled.div`
  width: 100%;
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
  width: 100%;
  grid-template-columns: repeat(auto-fit, 250px);
  justify-content: center;

  gap: 1rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 250px;
  }
`;
const Pending = styled.div`
  margin: auto;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 5px solid rgba(88, 67, 228, 1);
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

function Freelances() {
  let [freelance, setFreelance] = useState();
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchApi() {
      try {
        let response = await fetch("http://localhost:8000/freelances");
        let { freelancersList } = await response.json();
        setFreelance(freelancersList);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
    fetchApi();
  }, []);

  return (
    <StyledFreelance>
      <FreelanceWrapper>
        <Title>Trouvez votre prestataire</Title>
        <Desc>Chez Shiny nous réunissons les meilleurs profils pour vous.</Desc>
        <CardContainer>
          {freelance &&
            freelance.map((profile, index) => (
              <Card
                key={`${profile.name}-${index}`}
                label={profile.jobTitle}
                picture={profile.picture}
                title={profile.name}
              />
            ))}
          {loading && <Pending></Pending>}
        </CardContainer>
      </FreelanceWrapper>
    </StyledFreelance>
  );
}

export default Freelances;
