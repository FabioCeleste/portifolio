import React from 'react';

import {
  Container, Imagem, Title, Desc, Git, MultiImagem,
} from './styles';

interface Props {
    text: string;
    img: string | string[];
    desc: string;
    git: string;
}

const ProjectsItem: React.FC<Props> = ({
  text, img, desc, git,
}) => (
  <Container>
    {typeof img === 'string' ? (
      <div>
        <Imagem src={img} alt="aa" />
      </div>
    ) : (
      img.map((image) => (
        <MultiImagem src={image} alt="aaa" key={image} />
      ))
    )}

    <div>
      <Title>{text}</Title>
      <Desc>{desc}</Desc>
      <Git href={git}>{git}</Git>
    </div>
  </Container>
);

export default ProjectsItem;
