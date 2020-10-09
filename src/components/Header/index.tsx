import React from 'react';

import {
  Container, Title, Item, Links,
} from './styles';

const Header: React.FC = () => (
  <Container>
    <div>
      <Title>Fabio</Title>
    </div>

    <Links>
      <Item>Conhecimentos</Item>
      <Item>Projetos</Item>
      <Item>Sobre</Item>
      <Item>Contato</Item>
    </Links>
  </Container>
);

export default Header;
