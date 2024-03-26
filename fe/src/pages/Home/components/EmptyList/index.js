/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';

import { Container } from './styles';

import emptyBox from '../../../../assets/images/empty-box.svg';

export default function EmptyList() {
  return (
    <Container>
      <img src={emptyBox} alt="Empty box" />

      <p>
        Você ainda não tem nenhum contato cadastrado!
        Clique no botão <strong>"Novo contato"</strong>
        acima para cadastrar o seu primeiro!
      </p>
    </Container>
  );
}

EmptyList.propTypes = {
};
