import styled from "styled-components";
import { Grid, Divider } from "@mui/material";
import Bg from "../../imgs/bg_blue.png";

const whys = [
  {
    key: 0,
    title: "Kurze Wartezeiten",
    description:
      "Aufträge werden je nach Aufwand zwischen 1-6 Wochen bearbeitet. Durch den persönlichen Kontakt, bin ich auf jederzeit erreichbar.",
  },
  {
    key: 1,
    title: "Modernste Technologien",
    description:
      "Ich verwende die momentan modernsten Technologien, um meinen Kunden ein langfristig haltendes Produkt liefern zu können.",
  },
  {
    key: 2,
    title: "Lebenslange Wartung",
    description:
      "Ich stehe auch nach dem Auftrag für Wartungen an Webseiten oder Softwares zur Verfügung.",
  },
];

const Why = () => {
  return (
    <Container>
      <Grid container spacing={6}>
        {whys.map((w) => (
          <Grid item md={4} key={w.key}>
            <h3>{w.title}</h3>
            <Divider style={{ borderColor: "white" }} />
            <p>{w.description}</p>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};


const Container = styled.div`
  background: #132f4a;
  padding-left: 100px;
  padding-right: 100px;
  padding-top: 20px;
  padding-bottom: 40px;
  color: white;
  background-image: url(${Bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: rgba(0, 0, 0, 0.25);
`;

export default Why;
