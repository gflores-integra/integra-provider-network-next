import React from "react";
import styled from "styled-components";

interface ContainerImageProps {
  href: string;
}

interface HeroProps {
  hasButton: boolean;
  breadcrumbTitle: string;
  title: string;
  colorTitle?: string;
  subtitle?: string;
  text?: string;
  textCustom?: string;
  backgroundImage?: string;
}

const HeroSection = styled.section<{ backgroundImage: string }>`
  display: none;

  @media (min-width: 768px) {
    background: url(${(props) => props.backgroundImage}) center center / cover
      no-repeat;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: 400px;
    padding: 50px 0 50px 3%;
  }
`;

const BreadcrumbTitle = styled.h1`
  background-color: #001c71;
  border-radius: 10px;
  color: #fff;
  font-family: "Montserrat", sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.6;
  margin: 0;
  padding: 4px 8px;
  text-align: center;
`;

const Title = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-weight: 800;
  font-size: 3.3125em;
  margin: 0;
  color: ${(props) => (props.color ? props.color : "#ffff")};
`;

const Subtitle = styled.p`
  font-size: 20px;
  margin: 0;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-style: normal;
  font-size: 1.3rem;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 40%;
`;

const Text = styled.p`
  font-size: 20px;
  margin: 0;
  text-align: center;
  font-family: "Montserrat", sans-serif;
  font-weight: 200;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizelegibility;
  font-style: normal;
  font-size: 100%;
  margin-bottom: 32px;

  @media (min-width: 768px) {
    width: 430px;
  }
`;

const ContainerTextCustom = styled.div`
  display: flex;
  background: linear-gradient(to left, #d70526, #a40c1a);
  padding: 1% 10% 1% 10%;
  width: 60%;
`;

const TextCustom = styled.p`
  font-size: 20px;
  margin: 0;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-style: normal;
  font-size: 1.3rem;
  text-align: center;
  margin: 0;
`;

const Line = styled.div`
  width: 30%;
  height: 7px;
  background-color: #d30431;
  opacity: 0.3;
  margin-bottom: 5px;
`;

const ContainerImage = styled.a<ContainerImageProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  position: relative;

  width: 40%;
  height: auto;

  @media (min-width: 768px) {
    width: 20%;
    height: auto;
  }
`;

const Image = styled.img`
  height: auto;
  object-fit: cover;
  width: 100%;
  height: 100%;

  @media (min-width: 768px) {
  }
`;

const HeroServices: React.FC<HeroProps> = ({
  hasButton,
  breadcrumbTitle = "",
  title = "",
  colorTitle,
  subtitle,
  text = "",
  backgroundImage = "",
  textCustom = "",
}) => {
  return (
    <HeroSection backgroundImage={backgroundImage}>
      <BreadcrumbTitle>{`HOME / SERVICIOS / ${breadcrumbTitle}`}</BreadcrumbTitle>
      <FlexContainer>
        {title && <Title color={colorTitle}>{title}</Title>}
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
        <Text>{text}</Text>
      </FlexContainer>
      {textCustom && (
        <ContainerTextCustom>
          <TextCustom> {textCustom}</TextCustom>
        </ContainerTextCustom>
      )}
      {hasButton && (
        <ContainerImage href="https://is-dev">
          <Image src="https://is-dev" alt="Botón" />
        </ContainerImage>
      )}
    </HeroSection>
  );
};

export { HeroServices };
