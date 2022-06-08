import styled from "styled-components";
import { Grid } from "@mui/material";
import Bg from "../../imgs/bg_blue.png";
const isMobile = window.screen.width < 600;


const Contact = () => {

  const mobileView = (
    <ContainerMobile>
      <Grid
        container
        spacing={2}
        style={{ justifyContent: "center", marginLeft: "20px" }}
      >
        <Grid item xs={12}>
          <h3>/Kontakt aufnehmen</h3>
        </Grid>
{/*         <Grid item md={6} xs={12}>
          <Grid item xs={12}>
            <p>Vorname</p>
            <TextInput />
          </Grid>
          <Grid item xs={12}>
            <p>Nachname</p>
            <TextInput />
          </Grid>
          <Grid item xs={12}>
            <p>E-Mail Adresse</p>
            <TextInput />
          </Grid>
          <Grid item xs={12}>
            <p>Nachricht</p>
            <TextInput />
          </Grid>
          <Grid item xs={12}>
            <Button onClick={upload}>Absenden</Button>
          </Grid>
        </Grid> */}
        <Grid item md={6} xs={12} style={{ marginTop: "40px" }}>
          <Grid item xs={12} style={{ marginBottom: "50px" }}>
            Vor- und Nachname <h3>Ishak Hagi</h3>
          </Grid>
          <Grid item xs={12} style={{ marginBottom: "50px" }}>
            Email Adresse
            <h3>ishak120201@gmail.com</h3>
          </Grid>
          <Grid item xs={12} style={{ marginBottom: "50px" }}>
            Mobilnummer
            <h3>0163 5158526</h3>
          </Grid>
        </Grid>
      </Grid>
    </ContainerMobile>
  );

  const screenView = (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <h3>/Kontakt aufnehmen</h3>
        </Grid>
{/*         <Grid item md={6}>
          <Grid item xs={12}>
            <p>Vorname</p>
            <TextInput />
          </Grid>
          <Grid item xs={12}>
            <p>Nachname</p>
            <TextInput />
          </Grid>
          <Grid item xs={12}>
            <p>E-Mail Adresse</p>
            <TextInput />
          </Grid>
          <Grid item xs={12}>
            <p>Nachricht</p>
            <TextInput />
          </Grid>
          <Grid item xs={12}>
            <Button>Absenden</Button>
          </Grid>
        </Grid> */}
        <Grid item md={6}>
          <Grid item xs={12} style={{ marginBottom: "50px" }}>
            Vor- und Nachname <h3>Ishak Hagi</h3>
          </Grid>
          <Grid item xs={12} style={{ marginBottom: "50px" }}>
            Email Adresse
            <h3>ishak120201@gmail.com</h3>
          </Grid>
          <Grid item xs={12} style={{ marginBottom: "50px" }}>
            Mobilnummer
            <h3>0163 5158526</h3>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );

  return isMobile ? mobileView : screenView;
};

const Container = styled.div`
  background: #132f4a;
  height: 550px;
  padding-left: 100px;
  padding-right: 100px;
  color: white;
  background-image: url(${Bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: rgba(0, 0, 0, 0.25);
`;

const ContainerMobile = styled.div`
  background: #132f4a;
  height: 950px;
  color: white;
  background-image: url(${Bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: rgba(0, 0, 0, 0.25);
`;

const Button = styled.button`
  background: #2ed573;
  height: 40px;
  color: white;
  border: none;
  width: 30%;
  border-radius: 10px;
  margin-top: 30px;

  &:hover {
    background: #28b964;
  }
`;

const TextInput = styled.input`
  background: transparent;
  color: white;
  border: none;
  height: 30px;
  border-radius: 10px;
  width: 80%;
  padding-left: 10px;
  box-shadow: 0px 0px 2px #a4b0be;
  background: #0d2134;
  outline: none;

  &::placeholder {
    color: white;
  }

  &:focus {
    border: 5px;
    outline: none;
    box-shadow: 0px 0px 2px;
    border: 1px solid;
  }
`;

export default Contact;
