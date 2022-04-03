import styled from "styled-components";
import errorImg from "../../assets/error.svg";

const StyledError = styled.div`
  width: 100%;
  flex-grow: 1;

  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const Wrapper = styled.div`
  width: 90%;
  height: 85vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 10px;

  background-color: rgba(249, 249, 252, 1);
  padding: 2rem;

  gap: 2rem;
`;
const Illustration = styled.img`
  max-width: 500px;
  width: 60%;
  min-width: 300px;
`;
const ErrorMessage = styled.div``;

function Error() {
  return (
    <StyledError>
      <Wrapper>
        <Illustration src={errorImg} />
        <ErrorMessage>Il semblerait qu'il y ait un problème</ErrorMessage>
      </Wrapper>
    </StyledError>
  );
}

export default Error;
