import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { Platform } from "react-native";
import { Card } from "../../components/Card";
import {
  CardsTransaction,
  TransactionCardProps,
} from "../../components/CardsTransaction";
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
  TransactionList,
} from "./styles";

export interface DataListProps extends TransactionCardProps {
  id: string;
}

export function Dashboard() {
  const [data, setData] = useState<DataListProps[]>([]);

  async function loadTransactions() {
    const key = "@gofinance:transactions";

    const transactionsLoaded = await AsyncStorage.getItem(key);

    setData(JSON.parse(transactionsLoaded));
  }

  useEffect(() => {
    loadTransactions();
  }, []);

  return (
    <Container>
      <Header>
        <UserWapper platform={Platform.OS}>
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

        <TransactionList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <CardsTransaction data={item} />}
        />
      </ListTransactions>
    </Container>
  );
}
