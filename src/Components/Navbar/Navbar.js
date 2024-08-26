import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { styled } from "@mui/system";
import "./Navbar.css";

const StyledAppBar = styled(AppBar)`
  background-color: white;
  box-shadow: none;
  border-radius: 12px;
  padding: 10px 20px;
  margin: 10px 0;
`;

const Logo = styled(Typography)`
  font-weight: bold;
  color: #007bff;
  flex-grow: 1; /* Prend tout l'espace disponible à gauche */
`;

const NavContainer = styled("div")`
  display: flex;
  align-items: center;
`;

const NavLinks = styled("div")`
  display: flex;
  align-items: center;

  a {
    margin-right: 20px;
    text-decoration: none;
    color: black;
    font-size: 16px;
    font-weight: 500;
    padding: 10px 15px;
    border-radius: 8px;
    transition: background-color 0.3s, color 0.3s;

    &:hover {
      background-color: #007bff;
      color: white;
    }
  }
`;

const ContactButton = styled(Button)`
  background-color: #007bff;
  color: white;
  text-transform: none;
  padding: 8px 20px;
  border-radius: 20px;

  &:hover {
    background-color: #0056b3;
  }
`;

function Navbar() {
  return (
    <StyledAppBar position="static">
      <Toolbar>
        <Logo variant="h6">SP13 Nettoyage</Logo>
        <NavContainer>
          <NavLinks>
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#categories">Categories</a>
            <a href="#blog">Blog</a>
          </NavLinks>
          <ContactButton>Contact</ContactButton>
        </NavContainer>
      </Toolbar>
    </StyledAppBar>
  );
}

export default Navbar;
