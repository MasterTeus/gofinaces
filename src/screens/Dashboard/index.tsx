import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { Platform, ActivityIndicator } from "react-native";
import { useTheme } from "styled-components";

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
  LoadingContainer,
} from "./styles";

interface HighLightProps {
  total: string;
  date: string;
}
interface HighLightCards {
  entries: HighLightProps;
  expensive: HighLightProps;
  total: HighLightProps;
}

export interface DataListProps extends TransactionCardProps {
  id: string;
}

export function Dashboard() {
  const theme = useTheme();

  const [transacitons, setTransacitons] = useState<DataListProps[]>([]);
  const [highLightData, setHighLightData] = useState<HighLightCards>(
    {} as HighLightCards
  );
  const [isLoading, setIsLoading] = useState(true);

  //TODO: Busca dados
  async function loadTransactions() {
    const key = "@gofinance:transactions";

    const transactionsLoaded = await AsyncStorage.getItem(key);

    const transactionData = transactionsLoaded
      ? JSON.parse(transactionsLoaded)
      : [];

    setTransacitons(transactionData);

    calculateTotals(transactionData);

    setIsLoading(false);
  }

  function getLatDateTransaction(
    transactions: DataListProps[],
    type: "up" | "down"
  ) {
    //Pegando a data mais recente de cada total
    const lastTransactionExpensive = new Date(
      Math.max.apply(
        Math,
        transactions
          .filter(
            (transaction: DataListProps) => transaction.transactionType === type
          )
          .map((transaction: DataListProps) =>
            new Date(transaction.date).getTime()
          )
      )
    );
    return `${lastTransactionExpensive.getDate()} de ${lastTransactionExpensive.toLocaleString(
      "pt-BR",
      {
        month: "long",
      }
    )}`;
  }

  //TODO: Calcula os valores totais (Entrada, Saída, montante)
  function calculateTotals(data: []) {
    let entriesTotal = 0;
    let expensiveTotal = 0;
    let total = entriesTotal - expensiveTotal;

    data.map((item: DataListProps) => {
      if (item.transactionType === "up") {
        entriesTotal = entriesTotal + Number(item.amount);
      } else {
        expensiveTotal = expensiveTotal + Number(item.amount);
      }
      total = entriesTotal - expensiveTotal;
    });

    setHighLightData({
      entries: {
        total: entriesTotal.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        }),
        date: `Última entrada  dia ${getLatDateTransaction(data, "up")}`,
      },
      expensive: {
        total: expensiveTotal.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        }),
        date: `Última saída dia ${getLatDateTransaction(data, "down")}`,
      },
      total: {
        total: total.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        }),
        date: `01 a ${getLatDateTransaction(data, "down")}`,
      },
    });
  }

  useEffect(() => {
    loadTransactions();
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      loadTransactions();
    }, [])
  );

  return (
    <Container>
      {isLoading ? (
        <LoadingContainer>
          <ActivityIndicator color={theme.colors.primary} size="large" />
        </LoadingContainer>
      ) : (
        <>
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
              amount={highLightData.entries.total}
              lastTransaction={highLightData.entries.date}
            />
            <Card
              type="down"
              title="Saída"
              amount={highLightData.expensive.total}
              lastTransaction={highLightData.expensive.date}
            />
            <Card
              type="total"
              title="Total"
              amount={String(highLightData.total.total)}
              lastTransaction={highLightData.total.date}
            />
          </ListCards>

          <ListTransactions>
            <TitleTransaction>Listagem</TitleTransaction>

            <TransactionList
              data={transacitons}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => <CardsTransaction data={item} />}
            />
          </ListTransactions>
        </>
      )}
    </Container>
  );
}
