import React from "react";

import {
  Container,
  Header,
  Title,
  Icon,
  Footer,
  Amount,
  LastTransaction,
} from "./styles";

export default function Card() {
  return (
    <Container>
      <Header>
        <Title>Entradas</Title>
        <Icon name="arrow-up-circle" />
      </Header>

      <Footer>
        <Amount>R$ 17.020,18</Amount>
        <LastTransaction>Útima entrada dia 01 de Junho</LastTransaction>
      </Footer>
    </Container>
  );
}
