import React from "react";
import { Card } from "../../components/Card";
import { CardsTransaction } from "../../components/CardsTransaction";
import {
  Container,
  Header,
  Avatar,
  UserInfo,
  UserContain,
  UserWapper,
  WellcomeText,
  UserNameText,
  Logout,
  LogoutIcon,
  ListCards,
  ListTransactions,
  TitleTransaction,
} from "./styles";

export function Dashboard() {
  return (
    <Container>
      <Header>
        <UserWapper>
          <UserInfo>
            <Avatar
              source={{
                uri: "https://avatars.githubusercontent.com/u/39800209?v=4",
              }}
            />
            <UserContain>
              <WellcomeText>Olá</WellcomeText>
              <UserNameText>Mateus</UserNameText>
            </UserContain>
          </UserInfo>
          <Logout>
            <LogoutIcon name="power" />
          </Logout>
        </UserWapper>
      </Header>

      <ListCards>
        <Card
          type="up"
          title="Entradas"
          amount="R$ 18.223"
          lastTransaction="Ultima entrada dia 13 de Janeiro"
        />
        <Card
          type="down"
          title="Saída"
          amount="R$ 800,00"
          lastTransaction="Ultima entrada dia 13 de Janeiro"
        />
        <Card
          type="total"
          title="Total"
          amount="R$ 18.923"
          lastTransaction="Ultima entrada dia 13 de Abril"
        />
      </ListCards>

      <ListTransactions>
        <TitleTransaction>Listagem</TitleTransaction>

        <CardsTransaction />
      </ListTransactions>
    </Container>
  );
}
