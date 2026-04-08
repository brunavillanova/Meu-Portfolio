import { SetStateAction, useState } from "react";
import { AppBar, MenuItem, Toolbar, styled, Box, Typography, Container, Grid, Tabs, Tab } from "@mui/material";
import project1Image from '../../assets/images/image.png';
import project2Image from '../../assets/images/preview.png';
import project3Video from '../../assets/images/BARBEARIA.mp4';
import project4Image from '../../assets/images/hamburgueria.png';
import project5Image from '../../assets/images/software.jpg';
import project6Image from '../../assets/images/pokedex.png';
import project7Video from '../../assets/video/vigilancia.mp4';
import project9Image from '../../assets/images/bbb24.png';
import project10Image from '../../assets/images/orkut.png';
import project11Image from '../../assets/images/assistente.png';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaPython, FaGit, FaDocker, FaReact, FaWhatsapp } from "react-icons/fa";
import { SiTypescript, SiNodedotjs, SiFigma } from "react-icons/si";
import { FaExchangeAlt } from "react-icons/fa";


const NavBar = () => {
    const [showSkills, setShowSkills] = useState(false);
    const [showProjects, setShowProjects] = useState(false);
    const [showAbout, setShowAbout] = useState(false);
    const [aboutTab, setAboutTab] = useState(0); // Estado para controlar a aba selecionada

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

    const handleAboutTabChange = (_event: unknown, newValue: SetStateAction<number>) => {
        setAboutTab(newValue);
    };

    const StyledToolbar = styled(Toolbar)(() => ({
        display: "flex",
        justifyContent: "space-evenly",
        padding: "0 16px",
    }));

    const ProjectImage = styled("img")(() => ({
        width: "100%",
        height: "200px",
        objectFit: "contain",
        borderRadius: "12px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
        transition: "transform 0.4s ease-in-out, box-shadow 0.4s ease-in-out",
        '&:hover': {
            transform: "scale(1.1)",
            boxShadow: "0 12px 24px rgba(0, 0, 0, 0.6)",
        }
    }));

    const StyledButton = styled("a")(({ theme }) => ({
        backgroundColor: "transparent",
        border: `1px solid ${theme.palette.primary.contrastText}`,
        borderRadius: "3px",
        padding: "5px 15px",
        color: 'Black',
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        textDecoration: "none",
        '&:hover': {
            backgroundColor: theme.palette.secondary.light,
        },
    }));

    const Section = styled(Box)(({ theme }) => ({
        marginTop: theme.spacing(8),
        padding: theme.spacing(2),
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        textAlign: "center",
        borderRadius: "12px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
    }));

    const SectionImage = styled("img")(() => ({
        width: "150px",
        height: "150px",
        borderRadius: "50%",
        marginBottom: "16px",
    }));

    const Separator = styled("div")(({ theme }) => ({
        width: "80%",
        height: "2px",
        backgroundColor: theme.palette.divider,
        margin: theme.spacing(4, 0),
        borderRadius: "2px",
        boxShadow: `0 2px 4px ${theme.palette.divider}`,
    }));

    return (
        <>
            <AppBar position="absolute" color="primary" elevation={0}>
                <StyledToolbar>
                    <MenuItem onClick={handleAboutClick} style={{ cursor: "pointer" }}>
                        About
                    </MenuItem>
                    <MenuItem onClick={handleSkillsClick} style={{ cursor: "pointer" }}>
                        Skills
                    </MenuItem>
                    <MenuItem onClick={handleProjectsClick} style={{ cursor: "pointer" }}>
                        Projects
                    </MenuItem>
                </StyledToolbar>
            </AppBar>

            {showAbout && (
                <Section>
                    <SectionImage src={project5Image} alt="Sobre mim" />
                    <Typography variant="h4" gutterBottom>Sobre Mim / About Me</Typography>
                    <Tabs value={aboutTab} onChange={handleAboutTabChange} aria-label="about tabs">
                        <Tab label="Português" />
                        <Tab label="English" />
                    </Tabs>
                    {aboutTab === 0 && (
                        <Box mt={2}>
                            <Typography variant="body1">
                        Sou Bruna Villanova, formada em Engenharia de Software e apaixonada por resolver problemas complexos e criar soluções inovadoras. Ao longo da minha formação, desenvolvi habilidades em HTML, CSS, JavaScript e Python, além de trabalhar com frameworks como React, Node.js, Flask e Pandas.
                        
                        Durante minha trajetória, participei de diversos projetos práticos, incluindo um sistema de e-commerce e um player de música interativo. Essas experiências me permitiram fortalecer minhas habilidades em desenvolvimento frontend e backend, além de adquirir conhecimento prático em tecnologias modernas.
                        
                        Tenho grande interesse em Desenvolvimento Frontend e estou em busca da minha primeira oportunidade na área, onde possa aplicar meus conhecimentos, continuar aprendendo e contribuir com soluções eficientes e escaláveis.
                        
                        Estou aberta a novos desafios e oportunidades profissionais. Se quiser saber mais sobre meu trabalho ou conversar sobre oportunidades, fique à vontade para entrar em contato!
                        </Typography>
                        </Box>
                    )}
                    {aboutTab === 1 && (
                        <Box mt={2}>
                            <Typography variant="body1">
                        I am Bruna Villanova, a Software Engineering graduate passionate about solving complex problems and building innovative solutions. Throughout my academic journey, I developed skills in HTML, CSS, JavaScript, and Python, as well as experience with frameworks such as React, Node.js, Flask, and Pandas.
                      
                        During this time, I worked on several practical projects, including an e-commerce system and an interactive music player. These experiences helped me strengthen both my frontend and backend development skills, while gaining hands-on experience with modern technologies.
                        
                        I am particularly interested in Frontend Development and currently seeking my first opportunity in the field, where I can apply my knowledge, continue learning, and contribute to building efficient and scalable solutions.
                      
                        I am open to new challenges and professional opportunities. Feel free to reach out if you would like to learn more about my work or discuss potential opportunities.
                        </Typography>
                        </Box>
                    )}
                    <Box mt={2}>
                        <StyledButton href="https://wa.me/5511971552389" target="_blank" rel="noopener noreferrer">
                            <FaWhatsapp size={20} /> Contact me on WhatsApp
                        </StyledButton>
                    </Box>
                </Section>
            )}

            {showSkills && (
                <Section>
                    <Typography variant="h4" gutterBottom>Minhas Habilidades / My Skills</Typography>
                    <Box display="flex" flexWrap="wrap" justifyContent="center" gap={4}>
                        <Box display="flex" flexDirection="column" alignItems="center">
                            <FaHtml5 size={40} />
                            <Typography variant="body1">HTML</Typography>
                        </Box>
                        <Box display="flex" flexDirection="column" alignItems="center">
                            <FaCss3Alt size={40} />
                            <Typography variant="body1">CSS</Typography>
                        </Box>
                        <Box display="flex" flexDirection="column" alignItems="center">
                            <FaJsSquare size={40} />
                            <Typography variant="body1">JavaScript</Typography>
                        </Box>
                        <Box display="flex" flexDirection="column" alignItems="center">
                            <FaPython size={40} />
                            <Typography variant="body1">Python</Typography>
                        </Box>
                        <Box display="flex" flexDirection="column" alignItems="center">
                            <FaGit size={40} />
                            <Typography variant="body1">Git</Typography>
                        </Box>
                        <Box display="flex" flexDirection="column" alignItems="center">
                            <FaDocker size={40} />
                            <Typography variant="body1">Docker</Typography>
                        </Box>
                        <Box display="flex" flexDirection="column" alignItems="center">
                            <FaReact size={40} />
                            <Typography variant="body1">React</Typography>
                        </Box>
                    <Box display="flex" flexDirection="column" alignItems="center">
                <SiTypescript size={40} />
                <Typography variant="body1">TypeScript</Typography>
                </Box>

                <Box display="flex" flexDirection="column" alignItems="center">
                <SiNodedotjs size={40} />
                <Typography variant="body1">Node.js</Typography>
                </Box>

                <Box display="flex" flexDirection="column" alignItems="center">
                <SiFigma size={40} />
                <Typography variant="body1">Figma</Typography>
                </Box>

                <Box display="flex" flexDirection="column" alignItems="center">
                <FaExchangeAlt size={40} />
                <Typography variant="body1">APIs REST</Typography>
                </Box>
                    </Box>
                    <Separator />
                </Section>
            )}

            {showProjects && (
                <Section>
                <Typography variant="h4" gutterBottom>Meus Projetos / My Projects</Typography>
                <Container>
                    <Grid container spacing={2}>
                        {/* Projeto 1 */}
                        <Grid item xs={12} sm={6} md={4}>
                            <Box p={2} bgcolor="white" borderRadius="12px" boxShadow="0 4px 8px rgba(0, 0, 0, 0.3)">
                                <ProjectImage src={project1Image} alt="Projeto 1" />
                                <Typography variant="h6" mt={2}>jogo de resgate</Typography>
                                <Typography variant="body2">
                                Este projeto é uma aplicação simples de um jogo de resgate, onde o jogador utiliza as teclas W, S, e D para controlar um helicóptero. 
                                A interface é composta por um fundo dinâmico e interativo que se ajusta automaticamente ao tamanho da tela, oferecendo uma experiência visual agradável e envolvente.
                                    <br />
                                    <a href="https://github.com/brunavillanova/Jogo_de_resgate" target="_blank" rel="noopener noreferrer">Ver no GitHub</a>
                                    <br />
                                    <a href="https://jogodetirobruna.netlify.app" target="_blank" rel="noopener noreferrer">Acessar Projeto / Access Project</a>
                                </Typography>
                            </Box>
                        </Grid>
                        {/* Projeto 2 */}
                        <Grid item xs={12} sm={6} md={4}>
                            <Box p={2} bgcolor="white" borderRadius="12px" boxShadow="0 4px 8px rgba(0, 0, 0, 0.3)">
                                <ProjectImage src={project2Image} alt="Projeto 2" />
                                <Typography variant="h6" mt={2}>Player de Música</Typography>
                                <Typography variant="body2">
                                Este projeto implementa um player de música interativo usando HTML, CSS e JavaScript. O player oferece uma experiência completa de reprodução de músicas, 
                                incluindo funcionalidades como tocar, pausar, avançar e retroceder faixas, ajuste de barra de progresso, botão de curtida, shuffle, repetição e muito mais. 
                                Todas as configurações do usuário, como curtir músicas ou ativar o shuffle, são salvas no localStorage para que sejam mantidas mesmo após recarregar a página.
                                    <br />
                                    <a href="https://github.com/brunavillanova/minhaPlayList" target="_blank" rel="noopener noreferrer">Ver no GitHub</a>
                                    <br />
                                    <a href="https://playlistbruna.netlify.app" target="_blank" rel="noopener noreferrer">Acessar Projeto / Access Project</a>
                                </Typography>
                            </Box>
                        </Grid>
                        {/* Projeto 3 */}
                       <Grid item xs={12} sm={6} md={4}>
                            <Box p={2} bgcolor="white" borderRadius="12px" boxShadow="0 4px 8px rgba(0, 0, 0, 0.3)">
                                <video width="100%" controls>
                                    <source src={project3Video} type="video/mp4" />
                                    Seu navegador não suporta a tag de vídeo.
                                </video>
                                <Typography variant="h6" mt={2}> Barbearia - Website</Typography>
                                <Typography variant="body2">
                               Este é um projeto de website para uma barbearia, desenvolvido com foco em apresentar serviços, melhorar a experiência do usuário e praticar habilidades de desenvolvimento front-end.
                                O sistema simula um site institucional moderno, com seções organizadas para exibir informações como serviços, preços e contato
                                    
                                    <br />
                                    <a href="https://github.com/brunavillanova/barbearia.git" target="_blank" rel="noopener noreferrer">Ver no GitHub</a>
                                    <br />
                                   <a href="https://barbeariacraazy.netlify.app" target="_blank" rel="noopener noreferrer"> Acessar Projeto</a>
                                   
                  
                                </Typography>
                            </Box>
                        </Grid>
                        {/* Projeto 4 */}
                        <Grid item xs={12} sm={6} md={4}>
                            <Box p={2} bgcolor="white" borderRadius="12px" boxShadow="0 4px 8px rgba(0, 0, 0, 0.3)">
                                <ProjectImage src={project4Image} alt="Projeto 4" />
                                <Typography variant="h6" mt={2}>Cardápio Interativo com Carrinho de Compras e Integração com WhatsApp</Typography>
                                <Typography variant="body2">
                                O "Cardápio Interativo" é uma aplicação web que permite aos usuários adicionar itens de um menu ao carrinho de compras e 
                                finalizar o pedido enviando uma mensagem de resumo para um número de WhatsApp. A aplicação é projetada para restaurantes 
                                que desejam oferecer um método rápido e conveniente para os clientes fazerem pedidos online.
                                    <br />
                                    <a href="https://github.com/brunavillanova/cardapio" target="_blank" rel="noopener noreferrer">Ver no GitHub</a>
                                    <br />
                                    <a href="https://brubuerguer.netlify.app" target="_blank" rel="noopener noreferrer">Acessar Projeto / Access Project</a>
                                </Typography>
                            </Box>
                        </Grid>
                         {/* Projeto 6 */}
                         <Grid item xs={12} sm={6} md={4}>
                            <Box p={2} bgcolor="white" borderRadius="12px" boxShadow="0 4px 8px rgba(0, 0, 0, 0.3)">
                                <ProjectImage src={project6Image} alt="Projeto 4" />
                                <Typography variant="h6" mt={2}>Pokédex</Typography>
                                <Typography variant="body2">
                                Este projeto é uma Pokédex interativa, desenvolvida com HTML, CSS e JavaScript. Ele permite que os usuários pesquisem Pokémons 
                                pelo nome ou número e naveguem entre diferentes Pokémons usando botões de navegação. As informações são obtidas
                                 da PokéAPI. O design é responsivo, garantindo uma boa experiência tanto em dispositivos móveis quanto em desktops.
                                    <br />
                                    <a href="https://github.com/brunavillanova/Pokedex" target="_blank" rel="noopener noreferrer">Ver no GitHub</a>
                                    <br />
                                    <a href="https://pokemon-pk.netlify.app/" target="_blank" rel="noopener noreferrer">Acessar Projeto / Access Project</a>
                                </Typography>
                            </Box>
                        </Grid>
                        

                        <Grid item xs={12} sm={6} md={4}>
                            <Box p={2} bgcolor="white" borderRadius="12px" boxShadow="0 4px 8px rgba(0, 0, 0, 0.3)">
                                <video width="100%" controls>
                                    <source src={project7Video} type="video/mp4" />
                                    Seu navegador não suporta a tag de vídeo.
                                </video>
                                <Typography variant="h6" mt={2}> Sistema de Vigilância</Typography>
                                <Typography variant="body2">
                                Este projeto utiliza o modelo YOLOv8 para detectar pessoas em um vídeo. O sistema processa os frames do vídeo em tempo real,
                                 exibindo caixas delimitadoras ao redor das detecções e mostrando a taxa de quadros por segundo (FPS). 
                                    
                                    <br />
                                    <a href="https://github.com/brunavillanova/sistema-vigilancia" target="_blank" rel="noopener noreferrer">Ver no GitHub</a>
                                    <br />
                                   
                                </Typography>
                            </Box>
                        </Grid>
                       {/* ... */}
                         <Grid item xs={12} sm={6} md={4}>
                            <Box p={2} bgcolor="white" borderRadius="12px" boxShadow="0 4px 8px rgba(0, 0, 0, 0.3)">
                                <ProjectImage src={project9Image} alt="Projeto9" />
                                <Typography variant="h6" mt={2}>sistema de votação para o Big Brother Brasil</Typography>
                                <Typography variant="body2">
                              sistema de votação para o Big Brother Brasil

                            Este projeto é um sistema de votação para o Big Brother Brasil (BBB 24), onde os usuários podem votar nos candidatos Beatriz ou Juliette. O sistema utiliza o reCAPTCHA do Google para prevenir votos automáticos e Prometheus para monitoramento de métricas.
                                    <br />
                                    <a href="https://github.com/brunavillanova/BBB.git" target="_blank" rel="noopener noreferrer">Ver no GitHub</a>
                                    <br />
                                    <a href="paginadevotacaobbb24.netlify.app" target="_blank" rel="noopener noreferrer">Acessar Projeto / Access Project</a>
                                </Typography>
                            </Box>
                        </Grid>
                         <Grid item xs={12} sm={6} md={4}>
                            <Box p={2} bgcolor="white" borderRadius="12px" boxShadow="0 4px 8px rgba(0, 0, 0, 0.3)">
                                <ProjectImage src={project10Image} alt="Projeto10" />
                                <Typography variant="h6" mt={2}>layout do Orkut</Typography>
                                <Typography variant="body2">
                             Este projeto é uma recriação do layout do Orkut, utilizando HTML e CSS, com foco no uso do Flexbox. Foi desenvolvido por Bruna Villanova para treinar habilidades em CSS Flexbox.
                                    <br />
                                    <a href="https://github.com/brunavillanova/Orkut.Clone.git" target="_blank" rel="noopener noreferrer">Ver no GitHub</a>
                                    <br />
                                    <a href="https://orkutclone.netlify.app/" target="_blank" rel="noopener noreferrer">Acessar Projeto / Access Project</a>
                                </Typography>
                            </Box>
                        </Grid>{/* ... */}

                         <Grid item xs={12} sm={6} md={4}>
                            <Box p={2} bgcolor="white" borderRadius="12px" boxShadow="0 4px 8px rgba(0, 0, 0, 0.3)">
                                <ProjectImage src={project11Image} alt="Projeto11" />
                                <Typography variant="h6" mt={2}>Assistente Virtual Onyx</Typography>
                                <Typography variant="body2">
                             O **Onyx** é um assistente virtual simples que utiliza a API de reconhecimento de voz do navegador para interpretar comandos do usuário e executar ações como:

                                    * Responder saudações 👋
                                    * Informar hora e data ⏰
                                    * Abrir sites como Google, YouTube e Facebook 🌐
                                    * Realizar pesquisas automaticamente 🔎
                                    * Interagir por voz com o usuário 🎤
                                    <br />
                                    <a href="https://github.com/brunavillanova/assistente.git" target="_blank" rel="noopener noreferrer">Ver no GitHub</a>
                                    <br />
                                    <a href="https://chatonyxassistente.netlify.app/" target="_blank" rel="noopener noreferrer">Acessar Projeto / Access Project</a>
                                </Typography>
                            </Box>
                        </Grid>


                    </Grid>
                </Container>
            </Section>
            )}
        </>
    );
};

export default NavBar;
