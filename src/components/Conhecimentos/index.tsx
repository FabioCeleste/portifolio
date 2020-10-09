import React from 'react';

import { Container, Title, Item } from './styles';

const Conhecimentos: React.FC = () => (
  <Container>
    <Title>Conhecimentos</Title>

    <div>
      <div>
        <Item>HTML5</Item>
        <Item>CSS3</Item>
        <Item>JavaScript</Item>
        <Item>NodeJS</Item>
        <Item>TypeScript</Item>
        <Item>PostgresSQL</Item>
      </div>
      <div>
        <Item>Express</Item>
        <Item>React</Item>
        <Item>React-Native</Item>
        <Item>TypeORM</Item>
        <Item>Sequelize</Item>
      </div>
    </div>

  </Container>
);

export default Conhecimentos;
