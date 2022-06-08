import styled from "styled-components";
import { Grid } from "@mui/material";
import Placeholder from "../../imgs/placeholder.jpg";
import Bg from '../../imgs/bg_blue.png'

const About = () => {


  const mobileView = (
    <ContainerMobile>
    <h2>/Über mich</h2>
    <Grid container>
      <Grid item md={4} xs={12}>
        <Image src={Placeholder} alt="Ishak Hagi" />
      </Grid>
      <Grid item md={8} xs={12}>
        <h3>Guten Tag,</h3>
        <p>
          mein Name ist Ishak Hagi und ich helfe meinen Kunden seit mehreren
          Jahren Ihre Präsenz im Internet, sowie in den Sozialen Medien
          attraktiver zu gestalten. Ich befinde mich momentan im Bachelor
          meines Informatikstudiums und habe bereits mehrere Projekte für
          kleine, sowie große Unternehmen umgesetzt. 
          <br/>
          <br/>
          Falls Sie Interesse daran
          haben, mit mir gemeinsam Ihr nächstes Projekt anzugehen, nehmen Sie
          gerne Kontakt mit mir auf.
        </p>
      </Grid>
    </Grid>
  </ContainerMobile>
  )

  const screenView = (
    <Container>
      <h2>/Über mich</h2>
      <Grid container>
        <Grid item md={4} xs={12}>
          <Image src={Placeholder} alt="Ishak Hagi" />
        </Grid>
        <Grid item md={8} xs={12}>
          <h3>Guten Tag,</h3>
          <p>
            mein Name ist Ishak Hagi und ich helfe meinen Kunden seit mehreren
            Jahren Ihre Präsenz im Internet, sowie in den Sozialen Medien
            attraktiver zu gestalten. Ich befinde mich momentan im Bachelor
            meines Informatikstudiums und habe bereits mehrere Projekte für
            kleine, sowie große Unternehmen umgesetzt. 
            <br/>
            <br/>
            Falls Sie Interesse daran
            haben, mit mir gemeinsam Ihr nächstes Projekt anzugehen, nehmen Sie
            gerne Kontakt mit mir auf.
          </p>
        </Grid>
      </Grid>
    </Container>
  )


  return (
    mobileView
  );
};


const Image = styled.img`
  height: 90%;
  width: 80%;
  border-radius: 20px;
`;

const Container = styled.div`
    background: #132F4A;
    padding-left: 100px;
    padding-right: 100px;
    padding-top: 20px;
    padding-bottom: 40px;
    color: white;
    background-image: url(${Bg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: rgba(0,0,0,0.25);
`;

const ContainerMobile = styled.div`
    background: #132F4A;
    padding-left: 30px;
    padding-right: 30px;
    padding-top: 20px;
    padding-bottom: 40px;
    color: white;
    background-image: url(${Bg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: rgba(0,0,0,0.25);
`;

export default About;
