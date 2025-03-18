import React, { useState } from "react";
import { Link as LinkR } from "react-router-dom";
import styled, { useTheme } from "styled-components";
import { Bio } from "../data/constants";
import { MenuRounded } from "@mui/icons-material";

const Nav = styled.div`
  background-color: ${({ theme }) => theme.bg};
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 100;
  color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const NavbarContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;
`;

const NavLogo = styled(LinkR)`
  font-weight: 600;
  font-size: 20px;
  text-decoration: none;
  color: inherit;
`;

const NavItems = styled.ul`
  display: flex;
  align-items: center;
  gap: 32px;
  list-style: none;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: color 0.3s ease-in-out;
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const GithubButton = styled.a`
  border: 1px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 500;
  border-radius: 20px;
  text-decoration: none;
  transition: all 0.4s ease-in-out;
  &:hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.text_primary};
  }
`;

const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
`;

const MobileMenu = styled.ul`
  position: absolute;
  top: 80px;
  right: 0;
  width: 100%;
  background: ${({ theme }) => theme.card_light + 99};
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 20px 40px;
  border-radius: 0 0 20px 20px;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2);
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  transform: ${({ isOpen }) => (isOpen ? "translateY(0)" : "translateY(-10px)")};
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
  pointer-events: ${({ isOpen }) => (isOpen ? "auto" : "none")};
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">Damini</NavLogo>
        <MobileIcon onClick={() => setIsOpen(!isOpen)}>
          <MenuRounded style={{ color: "inherit" }} />
        </MobileIcon>
        <NavItems>
          <NavLink href="#About">About</NavLink>
          <NavLink href="#Skills">Skills</NavLink>
          <NavLink href="#Experience">Experience</NavLink>
          <NavLink href="#Projects">Projects</NavLink>
          
        </NavItems>
        <ButtonContainer>
          <GithubButton href={Bio.github} target="_blank">Github Profile</GithubButton>
        </ButtonContainer>
      </NavbarContainer>
      <MobileMenu isOpen={isOpen}>
        <NavLink onClick={() => setIsOpen(false)} href="#About">About</NavLink>
        <NavLink onClick={() => setIsOpen(false)} href="#Skills">Skills</NavLink>
        <NavLink onClick={() => setIsOpen(false)} href="#Experience">Experience</NavLink>
        <NavLink onClick={() => setIsOpen(false)} href="#Projects">Projects</NavLink>
        
        <GithubButton href={Bio.github} target="_blank" style={{ background: theme.primary, color: theme.text_primary }}>
          Github Profile
        </GithubButton>
      </MobileMenu>
    </Nav>
  );
};

export default Navbar;