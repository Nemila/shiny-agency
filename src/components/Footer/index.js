import React from "react";
import styled from "styled-components";
import { MdDarkMode } from "react-icons/md";

const StyledFooter = styled.div`
  width: 100%;
  margin-top: 2rem;
  background-color: ${({ theme }) => theme.colors.backgroundLight};
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
`;
const NightModeBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  width: 24px;
  height: 24px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
`;
const NightIcon = styled(MdDarkMode)``;

function Footer() {
  return (
    <StyledFooter>
      <Wrapper>
        <NightModeBtn>
          <NightIcon />
        </NightModeBtn>
      </Wrapper>
    </StyledFooter>
  );
}

export default Footer;
