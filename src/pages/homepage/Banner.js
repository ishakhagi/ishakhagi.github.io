import styled from "styled-components";
import BannerImg from "../../imgs/programmer.png";
import { Grid } from "@mui/material";
import BackgroundImg from "../../imgs/bg2.png";

const isMobile = window.screen.width < 700

const Banner = () => {
  const mobileView = (
    <ContainerMobile>
      <Grid container spacing={1}>
        <Grid item md={7} xs={12}>
          <HeadlineMobile>
            Wo <span style={{ color: "#5352ed" }}>Technologie</span> und{" "}
            <span style={{ color: "#2ed573" }}>Kreativität</span>{" "}
            zusammenkommen.
          </HeadlineMobile>
          <ContactButton>Kontakt Aufnehmen</ContactButton>
          <AboutButton>Meine Leistungen</AboutButton>
        </Grid>
        <Grid item md={5} xs={12}>
          <Image src={BannerImg} alt="Programmer" />
        </Grid>
      </Grid>
    </ContainerMobile>
  );

  const screenView = (
    <Container>
      <Grid container spacing={1}>
        <Grid item md={7} xs={12}>
          <TextSection>
            <Headline>
              Wo <span style={{ color: "#5352ed" }}>Technologie</span> und{" "}
              <span style={{ color: "#2ed573" }}>Kreativität</span>{" "}
              zusammenkommen.
            </Headline>
            <ContactButton>Kontakt Aufnehmen</ContactButton>
            <AboutButton>Meine Leistungen</AboutButton>
          </TextSection>
        </Grid>
        <Grid item md={5} xs={12}>
          <Image src={BannerImg} alt="Programmer" />
        </Grid>
      </Grid>
    </Container>
  );

  return isMobile? mobileView: screenView;
};

//Screen View

const Container = styled.div`
  font-family: Poppins;
  padding: 50px;
  background-image: url(${BackgroundImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: rgba(0, 0, 0, 0.25);
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
`;

const Headline = styled.h1`
  font-size: 4.5em;
`;

const HeadlineMobile = styled.h1`
  font-size: 1.5em;
`;

const ContactButton = styled.button`
  height: 40px;
  border-style: none;
  background: #5352ed;
  border-radius: 5px;
  color: white;
  &:hover {
    background: #1b77d2;
  }
`;

const AboutButton = styled.button`
  height: 40px;
  border-style: solid;
  border-color: #1e90ff;
  border-radius: 5px;
  background-color: white;
  color: #1e90ff;
  margin-left: 20px;
  &:hover {
    border-color: #1b77d2;
    color: #1b77d2;
  }
`;

const TextSection = styled.div`
  margin-left: 100px;
`;

//mobile view
const ContainerMobile = styled.div`
  font-family: Poppins;
  padding: 50px;
  background-image: url(${BackgroundImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: rgba(0, 0, 0, 0.25);
`;

export default Banner;
