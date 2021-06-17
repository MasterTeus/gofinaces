import React, { useEffect, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";

import { Container, Header, Title, Content } from "./styles";
import { HistoryCard } from "../../components/HistoryCard";
import { getTransactions } from "../../services";
import { categories } from "../../utils/categories";
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
  const [totalByCategory, setTotalByCategory] = useState<HistoryCardProps[]>(
    []
  );

  async function loadData() {
    const response = await getTransactions();

    const expensives = response.filter(
      (expensive: TransactionCardProps) => expensive.transactionType === "down"
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
        const percentFormatted = `${percent.toFixed(0)}`;

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
  }

  useEffect(() => {
    loadData();
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      loadData();
    }, [])
  );

  return (
    <Container>
      <Header>
        <Title>Resumo</Title>
      </Header>

      <Content>
        {totalByCategory.map((item) => (
          <HistoryCard
            key={item.name}
            title={item.name}
            amount={item.total}
            color={item.color}
          />
        ))}
      </Content>
    </Container>
  );
}
