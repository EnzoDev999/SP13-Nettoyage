import React from "react";
import { styled } from "@mui/system";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import heroImage from "../../assets/images/hero-image.jpg";

const HeroSectionContainer = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
  background-image: url("${heroImage}");
  background-size: cover;
  background-position: center;
  text-align: center;
  padding: 20px;
`;

const HeroTitle = styled(Typography)`
  font-size: 3rem;
  font-weight: bold;
  color: white;
  margin-bottom: 20px;
  font-family: "Montserrat", sans-serif;
`;

const HeroSubtitle = styled(Typography)`
  font-size: 1.5rem;
  color: white;
  margin-bottom: 30px;
  font-family: "Poppins", sans-serif;
`;

const CTAButton = styled(Button)`
  background-color: #007bff;
  color: white;
  padding: 12px 30px;
  font-size: 1rem;
  border-radius: 25px;
  text-transform: none;

  &:hover {
    background-color: #0056b3;
  }
`;

function HeroSection() {
  return (
    <HeroSectionContainer>
      <HeroTitle variant="h1">
        Un environnement propre pour un quotidien sain
      </HeroTitle>
      <HeroSubtitle variant="h5">
        Nous offrons des services de nettoyage résidentiel et commercial avec un
        engagement pour l'excellence et l'écologie.
      </HeroSubtitle>
      <CTAButton>Obtenir un devis gratuit</CTAButton>
    </HeroSectionContainer>
  );
}

export default HeroSection;
