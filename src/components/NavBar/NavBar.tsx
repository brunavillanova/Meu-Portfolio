import { SetStateAction, useState } from "react";

import {
  AppBar,
  MenuItem,
  Toolbar,
  styled,
  Box,
  Typography,
  Grid,
  Tabs,
  Tab,
} from "@mui/material";

import project1Image from "../../assets/images/image.png";
import project2Image from "../../assets/images/preview.png";
import project3Video from "../../assets/images/BARBEARIA.mp4";
import project4Image from "../../assets/images/hamburgueria.png";
import project5Image from "../../assets/images/software.jpg";
import project6Image from "../../assets/images/pokedex.png";
import project7Video from "../../assets/video/vigilancia.mp4";
import project9Image from "../../assets/images/bbb24.png";
import project10Image from "../../assets/images/orkut.png";
import project11Image from "../../assets/images/assistente.png";
import project12Image from "../../assets/images/cidadeativa.png";
import meuPortfolioImage from "../../assets/images/site.png";
import smartGridImage from "../../assets/images/smartgrid.png";


import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaPython,
  FaGit,
  FaDocker,
  FaReact,
  FaWhatsapp,
  FaExchangeAlt,
} from "react-icons/fa";

import {
  SiTypescript,
  SiNodedotjs,
  SiFigma,
} from "react-icons/si";


const NavBar = () => {
  const [showSkills, setShowSkills] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [aboutTab, setAboutTab] = useState(0);


  /* =========================
     NAVEGAÇÃO
  ========================== */

  const handleSkillsClick = () => {
    setShowSkills(!showSkills);
    setShowProjects(false);
    setShowAbout(false);
  };

  const handleProjectsClick = () => {
    setShowProjects(!showProjects);
    setShowSkills(false);
    setShowAbout(false);
  };

  const handleAboutClick = () => {
    setShowAbout(!showAbout);
    setShowSkills(false);
    setShowProjects(false);
  };

  const handleAboutTabChange = (
    _event: unknown,
    newValue: SetStateAction<number>
  ) => {
    setAboutTab(newValue);
  };


  /* =========================
     NAVBAR
  ========================== */

  const StyledToolbar = styled(Toolbar)(() => ({
    display: "flex",
    justifyContent: "space-evenly",
    padding: "0 16px",
  }));


  /* =========================
     SEÇÃO GERAL
  ========================== */

  const Section = styled(Box)(({ theme }) => ({
    width: "100%",
    minHeight: "100vh",

    margin: 0,

    padding: theme.spacing(6),

    backgroundColor: "rgba(0, 0, 0, 0.1)",

    boxSizing: "border-box",

    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(4),
    },

    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(3),
    },
  }));


  /* =========================
     ABOUT
  ========================== */

  const AboutImage = styled("img")(({ theme }) => ({
    width: "220px",
    height: "220px",

    objectFit: "cover",

    borderRadius: "50%",

    border: `3px solid ${theme.palette.primary.main}`,

    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.25)",

    animation: "floatImage 4s ease-in-out infinite",

    "@keyframes floatImage": {
      "0%, 100%": {
        transform: "translateY(0)",
      },

      "50%": {
        transform: "translateY(-8px)",
      },
    },

    [theme.breakpoints.down("md")]: {
      width: "190px",
      height: "190px",
    },

    [theme.breakpoints.down("sm")]: {
      width: "160px",
      height: "160px",
    },
  }));


  const AboutTitle = styled(Typography)(({ theme }) => ({
    fontWeight: 800,

    fontSize: "clamp(2rem, 5vw, 3.5rem)",

    lineHeight: 1.1,

    marginBottom: theme.spacing(2),

    color: theme.palette.text.primary,
  }));


  const AboutText = styled(Typography)(({ theme }) => ({
    fontSize: "1rem",

    lineHeight: 1.8,

    color: theme.palette.text.primary,

    marginBottom: theme.spacing(2),
  }));


  const TechText = styled(Typography)(({ theme }) => ({
    fontSize: "0.9rem",

    fontWeight: 600,

    color: theme.palette.text.secondary,

    marginTop: theme.spacing(3),

    letterSpacing: "0.5px",
  }));


  const AboutButton = styled("a")(() => ({
    display: "inline-flex",

    alignItems: "center",

    justifyContent: "center",

    gap: "10px",

    padding: "12px 26px",

    borderRadius: "30px",

    backgroundColor: "#25D366",

    color: "#ffffff",

    textDecoration: "none",

    fontWeight: 600,

    boxShadow: "0 7px 18px rgba(37, 211, 102, 0.30)",

    transition: "all 0.3s ease",

    cursor: "pointer",

    "&:hover": {
      backgroundColor: "#1ebe5d",

      transform: "translateY(-4px)",

      boxShadow: "0 10px 25px rgba(37, 211, 102, 0.40)",
    },
  }));


  /* =========================
     PROJETOS
  ========================== */

  const ProjectImage = styled("img")(({ theme }) => ({
    width: "100%",

    height: "210px",

    objectFit: "contain",

    backgroundColor: "#f5f5f5",

    borderRadius: "10px",

    boxShadow: "0 3px 8px rgba(0, 0, 0, 0.12)",

    transition: "transform 0.3s ease",

    "&:hover": {
      transform: "scale(1.03)",
    },

    [theme.breakpoints.down("sm")]: {
      height: "190px",
    },
  }));


  const ProjectVideo = styled("video")(({ theme }) => ({
    width: "100%",

    height: "210px",

    objectFit: "contain",

    backgroundColor: "#000",

    borderRadius: "10px",

    display: "block",

    [theme.breakpoints.down("sm")]: {
      height: "190px",
    },
  }));


  const ProjectCard = styled(Box)(({ theme }) => ({
    height: "100%",

    minHeight: "500px",

    padding: theme.spacing(2),

    backgroundColor: "#ffffff",

    borderRadius: "16px",

    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.12)",

    display: "flex",

    flexDirection: "column",

    transition: "all 0.3s ease",

    "&:hover": {
      transform: "translateY(-7px)",

      boxShadow: "0 12px 28px rgba(0, 0, 0, 0.20)",
    },

    [theme.breakpoints.down("sm")]: {
      minHeight: "auto",
    },
  }));


  const ProjectTitle = styled(Typography)(() => ({
    fontSize: "1.15rem",

    fontWeight: 600,

    marginTop: "18px",

    marginBottom: "10px",

    lineHeight: 1.4,

    color: "#111",

    textAlign: "center",
  }));


  const ProjectDescription = styled(Typography)(() => ({
    fontSize: "0.88rem",

    lineHeight: 1.65,

    color: "#444",

    textAlign: "center",
  }));


  const ProjectLinks = styled(Box)(() => ({
    marginTop: "auto",

    paddingTop: "20px",

    display: "flex",

    flexDirection: "column",

    alignItems: "center",

    gap: "7px",

    "& a": {
      fontSize: "0.85rem",

      fontWeight: 600,

      color: "#1976d2",

      textDecoration: "none",

      transition: "all 0.2s ease",

      "&:hover": {
        textDecoration: "underline",

        transform: "translateX(2px)",
      },
    },
  }));


  return (
    <>
      {/* =====================================================
          NAVBAR
      ====================================================== */}

      <AppBar
        position="absolute"
        color="primary"
        elevation={0}
      >
        <StyledToolbar>

          <MenuItem
            onClick={handleAboutClick}
            sx={{ cursor: "pointer" }}
          >
            About
          </MenuItem>

          <MenuItem
            onClick={handleSkillsClick}
            sx={{ cursor: "pointer" }}
          >
            Skills
          </MenuItem>

          <MenuItem
            onClick={handleProjectsClick}
            sx={{ cursor: "pointer" }}
          >
            Projects
          </MenuItem>

        </StyledToolbar>
      </AppBar>


      {/* =====================================================
          ABOUT
      ====================================================== */}

      {showAbout && (
        <Section>

          <Box
            sx={{
              width: "100%",

              maxWidth: "1100px",

              minHeight: "calc(100vh - 80px)",

              margin: "0 auto",

              display: "flex",

              alignItems: "center",

              justifyContent: "center",

              gap: {
                xs: 4,
                md: 8,
              },

              flexDirection: {
                xs: "column",
                md: "row",
              },

              textAlign: {
                xs: "center",
                md: "left",
              },
            }}
          >

            {/* =====================
                FOTO
            ====================== */}

            <Box
              sx={{
                flex: "0 0 auto",

                position: "relative",

                display: "flex",

                justifyContent: "center",

                alignItems: "center",

                "&::before": {
                  content: '""',

                  position: "absolute",

                  width: {
                    xs: "190px",
                    md: "250px",
                  },

                  height: {
                    xs: "190px",
                    md: "250px",
                  },

                  borderRadius: "50%",

                  border: "1px solid",

                  borderColor: "primary.main",

                  opacity: 0.25,
                },
              }}
            >

              <AboutImage
                src={project5Image}
                alt="Sobre mim"
              />

            </Box>


            {/* =====================
                CONTEÚDO
            ====================== */}

            <Box
              sx={{
                flex: 1,

                minWidth: 0,

                maxWidth: "700px",
              }}
            >

              <Typography
                sx={{
                  fontSize: "0.75rem",

                  fontWeight: 700,

                  letterSpacing: "3px",

                  marginBottom: 1,

                  color: "text.secondary",
                }}
              >
                SOBRE MIM
              </Typography>


              <AboutTitle>
                Olá, eu sou Bruna 👋
              </AboutTitle>


              {/* =====================
                  IDIOMAS
              ====================== */}

              <Tabs
                value={aboutTab}
                onChange={handleAboutTabChange}
                sx={{
                  minHeight: "40px",

                  marginBottom: 3,

                  "& .MuiTabs-flexContainer": {
                    justifyContent: {
                      xs: "center",
                      md: "flex-start",
                    },
                  },

                  "& .MuiTab-root": {
                    minWidth: "auto",

                    padding: "8px 16px",

                    fontSize: "0.75rem",
                  },
                }}
              >

                <Tab label="PORTUGUÊS" />

                <Tab label="ENGLISH" />

              </Tabs>


              {/* =====================
                  PORTUGUÊS
              ====================== */}

              {aboutTab === 0 && (
                <Box>

                  <AboutText>
                    Sou formada em Engenharia de Software e
                    apaixonada por tecnologia e desenvolvimento
                    de software.
                  </AboutText>


                  <AboutText>
                    Tenho interesse em Desenvolvimento Frontend
                    e venho desenvolvendo projetos utilizando{" "}
                    <strong>
                      React, TypeScript, JavaScript, HTML,
                      CSS, Node.js e Python.
                    </strong>
                  </AboutText>


                  <AboutText>
                    Busco minha primeira oportunidade profissional
                    na área de desenvolvimento, onde possa aplicar
                    meus conhecimentos, continuar aprendendo e
                    crescer profissionalmente.
                  </AboutText>


                  <TechText>
                    React · TypeScript · JavaScript · Node.js · Python
                  </TechText>

                </Box>
              )}


              {/* =====================
                  ENGLISH
              ====================== */}

              {aboutTab === 1 && (
                <Box>

                  <AboutText>
                    I am a Software Engineering graduate
                    passionate about technology and software
                    development.
                  </AboutText>


                  <AboutText>
                    I am interested in Frontend Development and
                    have been building projects using{" "}
                    <strong>
                      React, TypeScript, JavaScript, HTML,
                      CSS, Node.js and Python.
                    </strong>
                  </AboutText>


                  <AboutText>
                    I am looking for my first professional
                    opportunity in software development, where
                    I can apply my knowledge, continue learning
                    and grow professionally.
                  </AboutText>


                  <TechText>
                    React · TypeScript · JavaScript · Node.js · Python
                  </TechText>

                </Box>
              )}


              {/* =====================
                  BOTÃO
              ====================== */}

              <Box
                sx={{
                  marginTop: 4,

                  display: "flex",

                  justifyContent: {
                    xs: "center",
                    md: "flex-start",
                  },
                }}
              >

                <AboutButton
                  href="https://wa.me/5511971552389"
                  target="_blank"
                  rel="noopener noreferrer"
                >

                  <FaWhatsapp size={20} />

                  Vamos conversar

                </AboutButton>

              </Box>

            </Box>

          </Box>

        </Section>
      )}


      {/* =====================================================
          SKILLS
      ====================================================== */}

      {showSkills && (
        <Section>

          <Box
            sx={{
              maxWidth: "1000px",

              margin: "0 auto",

              minHeight: "calc(100vh - 100px)",

              display: "flex",

              flexDirection: "column",

              justifyContent: "center",

              alignItems: "center",
            }}
          >

            <Typography
              variant="h3"
              sx={{
                textAlign: "center",

                fontWeight: 700,

                fontSize: {
                  xs: "2rem",
                  sm: "2.4rem",
                  md: "2.8rem",
                },

                marginBottom: 6,
              }}
            >
              Minhas Habilidades
            </Typography>


            <Box
              sx={{
                width: "100%",

                display: "flex",

                flexWrap: "wrap",

                justifyContent: "center",

                gap: {
                  xs: 4,
                  sm: 5,
                  md: 6,
                },
              }}
            >

              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                gap={1}
              >
                <FaHtml5 size={45} />
                <Typography>HTML</Typography>
              </Box>


              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                gap={1}
              >
                <FaCss3Alt size={45} />
                <Typography>CSS</Typography>
              </Box>


              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                gap={1}
              >
                <FaJsSquare size={45} />
                <Typography>JavaScript</Typography>
              </Box>


              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                gap={1}
              >
                <FaPython size={45} />
                <Typography>Python</Typography>
              </Box>


              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                gap={1}
              >
                <FaGit size={45} />
                <Typography>Git</Typography>
              </Box>


              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                gap={1}
              >
                <FaDocker size={45} />
                <Typography>Docker</Typography>
              </Box>


              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                gap={1}
              >
                <FaReact size={45} />
                <Typography>React</Typography>
              </Box>


              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                gap={1}
              >
                <SiTypescript size={45} />
                <Typography>TypeScript</Typography>
              </Box>


              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                gap={1}
              >
                <SiNodedotjs size={45} />
                <Typography>Node.js</Typography>
              </Box>


              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                gap={1}
              >
                <SiFigma size={45} />
                <Typography>Figma</Typography>
              </Box>


              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                gap={1}
              >
                <FaExchangeAlt size={45} />
                <Typography>APIs REST</Typography>
              </Box>

            </Box>

          </Box>

        </Section>
      )}


      {/* =====================================================
          PROJECTS
      ====================================================== */}

      {showProjects && (
        <Section>

          <Box
            sx={{
              width: "100%",

              maxWidth: "1250px",

              margin: "0 auto",

              paddingTop: {
                xs: "60px",
                sm: "70px",
                md: "80px",
              },
            }}
          >

            {/* TÍTULO */}

            <Typography
              variant="h3"
              sx={{
                textAlign: "center",

                fontWeight: 700,

                fontSize: {
                  xs: "2rem",
                  sm: "2.4rem",
                  md: "2.8rem",
                },

                marginBottom: {
                  xs: "30px",
                  md: "45px",
                },
              }}
            >
              Meus Projetos
            </Typography>


            {/* =====================
                GRID
            ====================== */}

            <Grid
              container
              spacing={{
                xs: 3,
                sm: 3,
                md: 4,
              }}
            >


              {/* =================================================
                  PROJETO 1
              ================================================== */}

              <Grid item xs={12} sm={6} md={4}>

                <ProjectCard>

                  <ProjectImage
                    src={project1Image}
                    alt="Jogo de Resgate"
                  />


                  <ProjectTitle>
                    Jogo de Resgate
                  </ProjectTitle>


                  <ProjectDescription>
                    Este projeto é uma aplicação simples de um
                    jogo de resgate, onde o jogador utiliza as
                    teclas W, S e D para controlar um helicóptero.

                    <br />
                    <br />

                    A interface possui um fundo dinâmico e
                    interativo que se ajusta ao tamanho da tela,
                    proporcionando uma experiência visual
                    agradável.
                  </ProjectDescription>


                  <ProjectLinks>

                    <a
                      href="https://github.com/brunavillanova/Jogo_de_resgate"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ver no GitHub →
                    </a>


                    <a
                      href="https://jogodetirobruna.netlify.app"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Acessar Projeto →
                    </a>

                  </ProjectLinks>

                </ProjectCard>

              </Grid>


              {/* =================================================
                  PROJETO 2
              ================================================== */}

              <Grid item xs={12} sm={6} md={4}>

                <ProjectCard>

                  <ProjectImage
                    src={project2Image}
                    alt="Player de Música"
                  />


                  <ProjectTitle>
                    Player de Música
                  </ProjectTitle>


                  <ProjectDescription>
                    Este projeto implementa um player de música
                    interativo usando HTML, CSS e JavaScript.

                    <br />
                    <br />

                    O player possui funcionalidades como tocar,
                    pausar, avançar e retroceder faixas, barra de
                    progresso, curtida, shuffle, repetição e
                    armazenamento das configurações no
                    localStorage.
                  </ProjectDescription>


                  <ProjectLinks>

                    <a
                      href="https://github.com/brunavillanova/minhaPlayList"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ver no GitHub →
                    </a>


                    <a
                      href="https://playlistbruna.netlify.app"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Acessar Projeto →
                    </a>

                  </ProjectLinks>

                </ProjectCard>

              </Grid>


              {/* =================================================
                  PROJETO 3
              ================================================== */}

              <Grid item xs={12} sm={6} md={4}>

                <ProjectCard>

                  <ProjectVideo controls>

                    <source
                      src={project3Video}
                      type="video/mp4"
                    />

                    Seu navegador não suporta vídeo.

                  </ProjectVideo>


                  <ProjectTitle>
                    Barbearia - Website
                  </ProjectTitle>


                  <ProjectDescription>
                    Website desenvolvido para uma barbearia,
                    com foco na apresentação de serviços,
                    experiência do usuário e desenvolvimento
                    front-end.

                    <br />
                    <br />

                    O projeto possui uma estrutura institucional
                    para apresentação de serviços, preços e
                    informações de contato.
                  </ProjectDescription>


                  <ProjectLinks>

                    <a
                      href="https://github.com/brunavillanova/barbearia.git"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ver no GitHub →
                    </a>


                    <a
                      href="https://barbeariacraazy.netlify.app"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Acessar Projeto →
                    </a>

                  </ProjectLinks>

                </ProjectCard>

              </Grid>


              {/* =================================================
                  PROJETO 4
              ================================================== */}

              <Grid item xs={12} sm={6} md={4}>

                <ProjectCard>

                  <ProjectImage
                    src={project4Image}
                    alt="Cardápio Interativo"
                  />


                  <ProjectTitle>
                    Cardápio Interativo
                  </ProjectTitle>


                  <ProjectDescription>
                    Aplicação web que permite adicionar itens
                    de um menu ao carrinho de compras e finalizar
                    o pedido enviando um resumo para o WhatsApp.

                    <br />
                    <br />

                    Desenvolvido pensando em restaurantes que
                    desejam oferecer uma forma rápida e prática
                    para seus clientes realizarem pedidos online.
                  </ProjectDescription>


                  <ProjectLinks>

                    <a
                      href="https://github.com/brunavillanova/cardapio"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ver no GitHub →
                    </a>


                    <a
                      href="https://brubuerguer.netlify.app"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Acessar Projeto →
                    </a>

                  </ProjectLinks>

                </ProjectCard>

              </Grid>


              {/* =================================================
                  PROJETO 5
              ================================================== */}

              <Grid item xs={12} sm={6} md={4}>

                <ProjectCard>

                  <ProjectImage
                    src={project6Image}
                    alt="Pokédex"
                  />


                  <ProjectTitle>
                    Pokédex
                  </ProjectTitle>


                  <ProjectDescription>
                    Pokédex interativa desenvolvida com HTML,
                    CSS e JavaScript.

                    <br />
                    <br />

                    Permite pesquisar Pokémons pelo nome ou
                    número e navegar entre diferentes Pokémons.
                    As informações são obtidas através da
                    PokéAPI.

                    <br />
                    <br />

                    O design é responsivo para dispositivos
                    móveis e desktops.
                  </ProjectDescription>


                  <ProjectLinks>

                    <a
                      href="https://github.com/brunavillanova/Pokedex"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ver no GitHub →
                    </a>


                    <a
                      href="https://pokemon-pk.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Acessar Projeto →
                    </a>

                  </ProjectLinks>

                </ProjectCard>

              </Grid>


              {/* =================================================
                  PROJETO 6
              ================================================== */}

              <Grid item xs={12} sm={6} md={4}>

                <ProjectCard>

                  <ProjectVideo controls>

                    <source
                      src={project7Video}
                      type="video/mp4"
                    />

                    Seu navegador não suporta vídeo.

                  </ProjectVideo>


                  <ProjectTitle>
                    Sistema de Vigilância
                  </ProjectTitle>


                  <ProjectDescription>
                    Sistema que utiliza o modelo YOLOv8 para
                    detectar pessoas em um vídeo.

                    <br />
                    <br />

                    O sistema processa os frames em tempo real,
                    exibindo caixas delimitadoras ao redor das
                    detecções e mostrando a taxa de FPS.
                  </ProjectDescription>


                  <ProjectLinks>

                    <a
                      href="https://github.com/brunavillanova/sistema-vigilancia"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ver no GitHub →
                    </a>

                  </ProjectLinks>

                </ProjectCard>

              </Grid>


              {/* =================================================
                  PROJETO 7
              ================================================== */}

              <Grid item xs={12} sm={6} md={4}>

                <ProjectCard>

                  <ProjectImage
                    src={project9Image}
                    alt="Sistema de votação BBB"
                  />


                  <ProjectTitle>
                    Sistema de Votação BBB
                  </ProjectTitle>


                  <ProjectDescription>
                    Sistema de votação desenvolvido como projeto
                    inspirado no Big Brother Brasil.

                    <br />
                    <br />

                    O projeto utiliza reCAPTCHA para prevenção
                    de votos automatizados e Prometheus para
                    monitoramento de métricas.
                  </ProjectDescription>


                  <ProjectLinks>

                    <a
                      href="https://github.com/brunavillanova/BBB.git"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ver no GitHub →
                    </a>


                    <a
                      href="https://paginadevotacaobbb24.netlify.app"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Acessar Projeto →
                    </a>

                  </ProjectLinks>

                </ProjectCard>

              </Grid>


              {/* =================================================
                  PROJETO 8
              ================================================== */}

              <Grid item xs={12} sm={6} md={4}>

                <ProjectCard>

                  <ProjectImage
                    src={project10Image}
                    alt="Layout do Orkut"
                  />


                  <ProjectTitle>
                    Layout do Orkut
                  </ProjectTitle>


                  <ProjectDescription>
                    Recriação do layout do Orkut utilizando
                    HTML e CSS, com foco no uso do Flexbox.

                    <br />
                    <br />

                    Projeto desenvolvido para praticar
                    estruturação de interfaces e técnicas
                    de CSS Flexbox.
                  </ProjectDescription>


                  <ProjectLinks>

                    <a
                      href="https://github.com/brunavillanova/Orkut.Clone.git"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ver no GitHub →
                    </a>


                    <a
                      href="https://orkutclone.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Acessar Projeto →
                    </a>

                  </ProjectLinks>

                </ProjectCard>

              </Grid>


              {/* =================================================
                  PROJETO 9
              ================================================== */}

              <Grid item xs={12} sm={6} md={4}>

                <ProjectCard>

                  <ProjectImage
                    src={project11Image}
                    alt="Assistente Virtual Onyx"
                  />


                  <ProjectTitle>
                    Assistente Virtual Onyx
                  </ProjectTitle>


                  <ProjectDescription>
                    Assistente virtual que utiliza a API de
                    reconhecimento de voz do navegador para
                    interpretar comandos.

                    <br />
                    <br />

                    O projeto pode responder saudações,
                    informar hora e data, abrir sites,
                    realizar pesquisas e interagir por voz
                    com o usuário.
                  </ProjectDescription>


                  <ProjectLinks>

                    <a
                      href="https://github.com/brunavillanova/assistente.git"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ver no GitHub →
                    </a>


                    <a
                      href="https://chatonyxassistente.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Acessar Projeto →
                    </a>

                  </ProjectLinks>

                </ProjectCard>

              </Grid>

            {/* =================================================
                    PROJETO 11 - LINKME
                ================================================== */}

<Grid item xs={12} sm={6} md={4}>
  <ProjectCard>
    <ProjectImage
      src={meuPortfolioImage}
      alt="LinkMe"
    />

    <ProjectTitle>
      LinkMe
    </ProjectTitle>

    <ProjectDescription>
      Plataforma web desenvolvida para criar páginas
      profissionais e personalizadas, reunindo links,
      contatos e informações importantes em um único
      lugar.

      <br />
      <br />

      O projeto possui uma interface moderna, responsiva
      e focada em facilitar a presença digital de
      profissionais e empresas.
    </ProjectDescription>

    <ProjectLinks>
      <a
        href="https://github.com/brunavillanova/site-bruna"
        target="_blank"
        rel="noopener noreferrer"
      >
        Ver no GitHub →
      </a>

      <a
        href="https://crieseusitecomigobrunavillanovadev.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Acessar Projeto →
      </a>
    </ProjectLinks>
  </ProjectCard>
</Grid>


              {/* =================================================
                  PROJETO 10
              ================================================== */}


            <Grid item xs={12} sm={6} md={4}>

            <ProjectCard>

                <ProjectImage
                src={project12Image}
                alt="Cidade Ativa"
                />

                <ProjectTitle>
                Cidade Ativa
                </ProjectTitle>

                <ProjectDescription>
                Plataforma web desenvolvida para aproximar a população
                dos serviços e informações da cidade.

                <br />
                <br />

                O projeto apresenta uma interface moderna e responsiva,
                permitindo aos usuários acessar informações e recursos
                de forma simples e intuitiva.
                </ProjectDescription>

                <ProjectLinks>

                <a
                    href="https://github.com/brunavillanova/cidade-ativa"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Ver no GitHub →
                </a>

                <a
                    href="https://cidadeativajarinu.netlify.app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Acessar Projeto →
                </a>

                </ProjectLinks>

            </ProjectCard>

            </Grid>


         {/* =================================================
                PROJETO 12 - SMART GRID MONITOR
            ================================================== */}

<Grid item xs={12} sm={6} md={4}>
  <ProjectCard>
    <ProjectImage
      src={smartGridImage}
      alt="Smart Grid Monitor"
    />

    <ProjectTitle>
      Smart Grid Monitor
    </ProjectTitle>

    <ProjectDescription>
      Sistema web desenvolvido para monitoramento de
      equipamentos de uma rede elétrica inteligente.

      <br />
      <br />

      O dashboard permite acompanhar o status dos
      equipamentos, visualizar níveis de alerta e falha,
      além de monitorar informações como tensão,
      corrente e temperatura.

      <br />
      <br />

      O projeto possui integração entre frontend,
      backend e banco de dados, com interface voltada
      para acompanhamento e gestão dos equipamentos.
    </ProjectDescription>

    <ProjectLinks>
      <a
        href="https://github.com/brunavillanova/Monitor-de-Rede-Inteligente"
        target="_blank"
        rel="noopener noreferrer"
      >
        Ver no GitHub →
      </a>

      <a
        href="https://smartgridbruna.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Acessar Projeto →
      </a>
    </ProjectLinks>
  </ProjectCard>
</Grid>

            </Grid>

          </Box>

        </Section>
      )}

    </>
  );
};

export default NavBar;