import React from 'react';

import { Container, Title, Text } from './styles';

const About: React.FC = () => (
  <Container>
    <Title>Sobre</Title>
    <Text>
      Sou um desenvolvedor fullstack que busca uma oportunidade de ingressar no mercado de trabalho.
      Já desenvolvi alguns projetos pessoais utilizando javascript e typescript.
      Já experimentei python usando o framework django e c# com Unity. Atualmente estou estudando desenvolvimento mobile com React-Native.
      Meu primeiro projeto foi uma aplicação web q transforma uma playlist do youtube em uma playlist do spotify e me serviu para aprender
      como usar Api de terceiros. O segundo projeto foi clone do MyAnimeList mas com foco em jogos,
      embora eu não tenha um front end para mostrar usei esse projeto para entender melhor como funcionar relacionamentos em banco de dados.
      O terceiro projeto foi um aplicativo mobile que pega os dados de um jogador de League of Legends,
      nesse eu usei React-Native e me mostrou o desenvolvimento mobile que se torno minha paixão.
    </Text>
  </Container>
);

export default About;
