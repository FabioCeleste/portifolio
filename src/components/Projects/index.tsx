import React from 'react';
import Carousel, { Dots, arrowsPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

import { Container, Title } from './styles';

import lolum from '../../assets/imgs/lolum.jpg';
import loldois from '../../assets/imgs/loldois.jpg';
import loltres from '../../assets/imgs/loltres.jpg';
import youtubetospotfiy from '../../assets/imgs/youtubetospotfiy.png';

import ProjectsItem from '../ProjectsItem';

const Projects: React.FC = () => (
  <Container>
    <Title>Projetos</Title>

    <Carousel plugins={['arrows']}>
      <ProjectsItem
        desc="Transforme uma playlist do Youtube em uma playlist do Spotify"
        text="Youtube2Spotify"
        img={youtubetospotfiy}
        git="https://github.com/FabioCeleste/Youtube-2-Spotify"
      />
      <ProjectsItem
        desc="Um aplicativo que encontra dados sobre invocadores de League of Legends"
        text="Summoner Finder"
        img={[lolum, loldois, loltres]}
        git="https://github.com/FabioCeleste/summonerFinder-reactNative"
      />
    </Carousel>
  </Container>

);

export default Projects;
