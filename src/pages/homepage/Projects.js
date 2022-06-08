import styled from "styled-components";
import { Grid, Divider } from "@mui/material";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";

//Image Imports
import MOL from "../../imgs/mol.png";
import Nasari from "../../imgs/nasari.png";
import MTU from "../../imgs/mtu.png";
import AWS from "../../imgs/aws.png";
import Hagi from '../../imgs/hagi.png'
import BackgroundImg from '../../imgs/bg2.png'

const services = [
  {
    key: 0,
    title: "Nasari Consulting GmbH",
    description: "Eine Webapplikation zum Managen und Organisieren von Informationssicherheitsaudits",
    image: Nasari,
  },
  {
    key: 1,
    title: "MTU Aero Engines",
    description: "Analyse und Aufbereitung von Umweltbelastungen in Zusammenhang mit Flügen.",
    image: MTU,
  },
  {
    key: 2,
    title: "Hagi's Engineering GmbH",
    description: "Entwicklung und Design einer Webseite, sowie Logo und Visitenkarten.",
    image: Hagi,
  },
  {
    key: 3,
    title: "Amazon Web Services",
    description: "Entwicklung eines Amazon Alexa Skills für die Alzheimer Gesellschaft München.",
    image: AWS,
  },
  {
    key: 4,
    title: "Museum of London",
    description: "Vorhersage von Ausfällen an Lüftungsgeräten.",
    image: MOL,
  },
];

const Projects = () => {

  const mobileView = (
    <ContainerMobile>
      <h2>/Letzte Projekte</h2>
      <Divider style={{ marginBottom: "30px" }} />
      <Grid container spacing={2} >
        {services.map((s) => (
          <Grid item md={2.4} key={s.key}>
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

  const screenView = (
    <Container>
      <h2>/Letzte Projekte</h2>
      <Divider style={{ marginBottom: "30px" }} />
      <Grid container spacing={2} >
        {services.map((s) => (
          <Grid item md={2.4} key={s.key}>
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

  return (
    mobileView
  );
};

const Container = styled.div`
  padding: 100px 150px 80px 150px;
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


export default Projects;