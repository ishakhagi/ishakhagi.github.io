import styled from "styled-components";
import { Grid, Divider } from "@mui/material";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";

//Image Imports
import Webdesign from "../../imgs/webdesign.jpg";
import Software from "../../imgs/software.jpg";
import Design from "../../imgs/design.jpg";
import Consulting from "../../imgs/consulting.webp";
import BackgroundImg from '../../imgs/bg2.png'

const services = [
  {
    key: 0,
    title: "Webentwicklung und Webdesign",
    description: "Ich entwickle Branchenorientiert Ihre Webseite oder bringe Ihre Aktuelle auf einen neuen Stand, damit Sie Ihre Kundengewinnung möglichst steigern können.",
    image: Webdesign,
  },
  {
    key: 1,
    title: "Softwareentwicklung",
    description: "Auf Anfrage entwickle ich individuelle Softwarelösungen, oder helfe Ihnen mögliche Prozesse zu identifizieren, die sich automatisieren lassen.",
    image: Software,
  },
  {
    key: 2,
    title: "Grafikdesign",
    description: "Ob Logo, Visitenkarte oder Social Media Designs. Ich sorge dafür, dass Ihre Präsenz attraktiver aussieht.",
    image: Design,
  },
  {
    key: 3,
    title: "IT Beratung",
    description: "Gerne biete ich bei allgemeinen IT Problemen mein Support an und Berate Sie gerne, um Sie in Bezug auf der Digitalisierung einen Schritt weiterzubringen.",
    image: Consulting,
  },
];

const Services = () => {

  const screenView = (
    <Container>
      <h2>/Leistungen</h2>
      <Divider style={{ marginBottom: "30px" }} />
      <Grid container spacing={2} >
        {services.map((s) => (
          <Grid item md={3} key={s.key}>
            <Card sx={{ maxWidth: "100%" }}>
              <CardActionArea>
                <CardMedia component="img" image={s.image} alt="Webdesign" />
                <CardContent>
                  <h3>{s.title}</h3>
                  <p style={{fontFamily: "Poppins"}}>
                      {s.description}
                  </p>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  )

  const mobileView = (
    <ContainerMobile>
      <h2>/Leistungen</h2>
      <Divider style={{ marginBottom: "30px" }} />
      <Grid container spacing={2} >
        {services.map((s) => (
          <Grid item md={3} key={s.key}>
            <Card sx={{ maxWidth: "100%" }}>
              <CardActionArea>
                <CardMedia component="img" image={s.image} alt="Webdesign" />
                <CardContent>
                  <h3>{s.title}</h3>
                  <p style={{fontFamily: "Poppins"}}>
                      {s.description}
                  </p>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </ContainerMobile>
  )

  return (mobileView
  );
};

const Container = styled.div`
  padding: 100px 150px 100px 150px;
  background-image: url(${BackgroundImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: rgba(0,0,0,0.25);
`;

const ContainerMobile = styled.div`
  padding: 0px 50px 80px 50px;
  background-image: url(${BackgroundImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: rgba(0,0,0,0.25);
`;


export default Services;
