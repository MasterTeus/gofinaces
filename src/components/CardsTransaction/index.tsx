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

interface CategoryProps {
  value: string;
  icon: "coffee" | "pay" | "home";
}

export interface TransactionCardProps {
  type: "positive" | "negative";
  title: string;
  amount: string;
  category: CategoryProps;
  date: string;
}

interface Props {
  data: TransactionCardProps;
}
export function CardsTransaction({ data }: Props) {
  const icons = {
    coffee: "coffee",
    pay: "dollar-sign",
    home: "home",
  };

  return (
    <Container>
      <Title>{data?.title}</Title>
      <Amounted type={data.type}>
        {data?.type === "negative" && "- "}
        {data?.amount}
      </Amounted>

      <Footer>
        <TypeTransaction>
          <Icon name={icons[data?.category.icon]} />
          <TransactionType>{data?.category?.value}</TransactionType>
        </TypeTransaction>

        <Date>{data?.date}</Date>
      </Footer>
    </Container>
  );
}
