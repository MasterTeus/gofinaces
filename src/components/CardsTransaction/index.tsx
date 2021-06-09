import moment from "moment";
import React from "react";
import { categories } from "../../utils/categories";
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
export interface TransactionCardProps {
  transactionType: "up" | "down";
  name: string;
  amount: string;
  category: string;
  date: string;
}

interface Props {
  data: TransactionCardProps;
}
export function CardsTransaction({ data }: Props) {
  const categorys = categories.filter((i) => i.key === data.category)[0];

  const amount = Number(data?.amount).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <Container>
      <Title>{data?.name}</Title>
      <Amounted type={data.transactionType}>
        {data?.transactionType === "down" && "- "}
        {amount}
      </Amounted>

      <Footer>
        <TypeTransaction>
          <Icon name={categorys.icon} />
          <TransactionType>{categorys.name}</TransactionType>
        </TypeTransaction>

        <Date>{moment(data?.date).format("DD/MM/YYYY")}</Date>
      </Footer>
    </Container>
  );
}
