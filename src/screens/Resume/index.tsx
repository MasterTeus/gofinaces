import React, { useEffect, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { VictoryPie } from "victory-native";
import { ActivityIndicator } from "react-native";
import { addMonths, subMonths } from "date-fns";
import { RFValue } from "react-native-responsive-fontsize";

import {
  Container,
  Header,
  Title,
  Content,
  ChartContainer,
  MonthSelect,
  MonthSelectButton,
  SelectIcon,
  Month,
  ContainerLoading,
} from "./styles";
import { HistoryCard } from "../../components/HistoryCard";
import { getTransactions } from "../../services";
import { categories } from "../../utils/categories";
import moment from "moment";
interface TransactionCardProps {
  transactionType: "up" | "down";
  name: string;
  amount: string;
  category: string;
  date: string;
}
interface HistoryCardProps {
  name: string;
  total: string;
  color: string;
  percentFormatted: string;
  percent: string;
}

export function Resume() {
  //! States
  const [isLoading, setIsLoading] = useState(true);
  const [selectedData, setSelectedData] = useState(new Date());
  const [totalByCategory, setTotalByCategory] = useState<HistoryCardProps[]>(
    []
  );

  //! Functions
  function handlDateChage(action: "prev" | "next") {
    setIsLoading(false);
    if (action === "prev") {
      const newDate = subMonths(selectedData, 1);
      setSelectedData(newDate);
      console.log(newDate);
    } else {
      const newDate = addMonths(selectedData, 1);
      setSelectedData(newDate);
      console.log(newDate);
    }
  }

  async function loadData() {
    const response = await getTransactions();

    const expensives = response.filter(
      (expensive: TransactionCardProps) =>
        expensive.transactionType === "down" &&
        new Date(expensive.date).getMonth() === selectedData.getMonth() &&
        new Date(expensive.date).getFullYear() === selectedData.getFullYear()
    );

    const expensivesTotal = expensives.reduce(
      (interator: number, expensive: TransactionCardProps) => {
        return interator + Number(expensive.amount);
      },
      0
    );
    let totalByCategory = [];

    categories.forEach((category) => {
      let categorySum = 0;

      expensives.forEach((expensive: TransactionCardProps) => {
        if (expensive.category === category.key) {
          categorySum = Number(categorySum + expensive.amount);
        }
      });

      if (categorySum > 0) {
        let total = categorySum.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        });

        const percent = (categorySum / expensivesTotal) * 100;
        const percentFormatted = `${percent.toFixed(0)}%`;

        totalByCategory.push({
          name: category.name,
          color: category.color,
          total,
          percent,
          percentFormatted,
        });
      }
    });
    setTotalByCategory(totalByCategory);
    setIsLoading(false);
  }
  //! Effects
  useFocusEffect(
    React.useCallback(() => {
      loadData();
    }, [selectedData])
  );
  // useEffect(() => {
  //   loadData();
  // }, [selectedData]);


  return (
    <Container>
      <Header>
        <Title>Resumo</Title>
      </Header>
      {!isLoading ? (
        <Content>
          <MonthSelect>
            <MonthSelectButton onPress={() => handlDateChage("prev")}>
              <SelectIcon name="chevron-left" />
            </MonthSelectButton>

            <Month>
              {moment(selectedData).locale("pt-br").format("MMMM, Y")}
            </Month>

            <MonthSelectButton onPress={() => handlDateChage("next")}>
              <SelectIcon name="chevron-right" />
            </MonthSelectButton>
          </MonthSelect>

          <ChartContainer>
            <VictoryPie
              data={totalByCategory}
              colorScale={totalByCategory.map((category) => category.color)}
              style={{
                labels: {
                  fontSize: RFValue(18),
                  fontWeight: "bold",
                  fill: "#fff",
                },
              }}
              labelRadius={60}
              x="percentFormatted"
              y="total"
            />
          </ChartContainer>
          {totalByCategory.map((item) => (
            <HistoryCard
              key={item.name}
              title={item.name}
              amount={item.total}
              color={item.color}
            />
          ))}
        </Content>
      ) : (
        <ContainerLoading>
          <ActivityIndicator color="#5636D3" />
        </ContainerLoading>
      )}
    </Container>
  );
}
