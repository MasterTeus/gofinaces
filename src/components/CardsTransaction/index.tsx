import React from "react";
import {
  Container,
  Title,
  Amounted,
  Footer,
  TypeTransaction,
  Icon,
  TransactionType,
  Date,
} from "./styles";

export function CardsTransaction() {
  return (
    <Container>
      <Title>Desenvolvimento de site</Title>
      <Amounted>R$ 12.000,00</Amounted>

      <Footer>
        <TypeTransaction>
          <Icon name="dollar-sign" />
          <TransactionType>Vendas</TransactionType>
        </TypeTransaction>

        <Date>13/04/2020</Date>
      </Footer>
    </Container>
  );
}
