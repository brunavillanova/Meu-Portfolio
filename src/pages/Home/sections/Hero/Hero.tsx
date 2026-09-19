import { Box, Container, Grid, Typography, styled } from "@mui/material";

import Avatar from "../../../../assets/images/avatar.jpg";

import DownloadIcon from "@mui/icons-material/Download";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

import StyledButton from "../../../../components/StyledButton/StyledButton";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";

import { Theme } from "@mui/material/styles";
import { useSpring, animated } from "@react-spring/web";

const Hero = () => {
  // Animação de entrada
  const props = useSpring({
    transform: "translateY(0%)",
    opacity: 1,
    from: {
      transform: "translateY(-50%)",
      opacity: 0,
    },
    config: {
      duration: 1000,
    },
  });

  const StyledHero = styled("div")(({ theme }: { theme: Theme }) => ({
    backgroundColor: theme.palette.primary.main,
    height: "100vh",
    display: "flex",
    alignItems: "center",

    [theme.breakpoints.down("sm")]: {
      paddingTop: "100px",
    },

    [theme.breakpoints.up("md")]: {
      paddingTop: "0",
    },
  }));

  const StyledImg = styled("img")(({ theme }: { theme: Theme }) => ({
    width: "75%",
    maxWidth: "350px",
    borderRadius: "50%",
    border: `1px solid ${theme.palette.primary.contrastText}`,
  }));

  return (
    <StyledHero>
      <Container maxWidth="lg">
        <Grid container spacing={2} alignItems="center">

          {/* Foto */}
          <Grid item xs={12} md={5}>
            <Box position="relative">

              {/* Fundo animado */}
              <Box
                position="absolute"
                width="150%"
                top={-100}
                right={0}
              >
                <AnimatedBackground />
              </Box>

              {/* Avatar */}
              <Box
                position="relative"
                textAlign="center"
              >
                <StyledImg src={Avatar} alt="Bruna Villanova" />
              </Box>

            </Box>
          </Grid>

          {/* Informações */}
          <Grid item xs={12} md={7}>

            <Typography
              color="primary.contrastText"
              variant="h1"
              textAlign="center"
              pb={2}
            >
              Bruna Villanova
            </Typography>

            {/* Animação */}
            <animated.div style={props}>
              <Typography
                color="primary.contrastText"
                variant="h2"
                textAlign="center"
              >
                I'm a Software Engineer
              </Typography>
            </animated.div>

            {/* Botões */}
            <Grid
              container
              display="flex"
              justifyContent="center"
              spacing={3}
              pt={3}
            >

              {/* Download CV */}
              <Grid
                item
                xs={12}
                md={4}
                display="flex"
                justifyContent="center"
              >
                <StyledButton downloadLink="/Currículo.pdf">
                  <DownloadIcon />

                  <Typography>
                    Download CV
                  </Typography>
                </StyledButton>
              </Grid>

              {/* Contato */}
              <Grid
                item
                xs={12}
                md={4}
                display="flex"
                justifyContent="center"
              >
                <a
                  href="mailto:brunnavillanova@gmail.com"
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <StyledButton>
                    <MailOutlineIcon />

                    <Typography>
                      Contact me
                    </Typography>
                  </StyledButton>
                </a>
              </Grid>

            </Grid>
          </Grid>
        </Grid>
      </Container>
    </StyledHero>
  );
};

export default Hero;