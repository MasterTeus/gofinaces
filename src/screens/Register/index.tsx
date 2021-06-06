import React, { useState } from "react";
import {
  Container,
  Header,
  Title,
  FormWapper,
  Fields,
  TransactionTypeGroup,
} from "./styles";
import { Input } from "../../components/Form/Input";
import { Button } from "../../components/Form/Button";
import { TransactionTypeButton } from "../../components/Form/TransactionTypeButton";
import { CategorySelect } from "../../components/Form/CategorySelect";

export function Register() {
  const [transactionType, setTransactionType] = useState("");

  function handleTransactionsTypeSelect(type: "up" | "down") {
    setTransactionType(type);
  }

  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>

      <FormWapper>
        <Fields>
          <Input placeholder="Nome" />
          <Input placeholder="Preço" />

          <TransactionTypeGroup>
            <TransactionTypeButton
              title="Entrada"
              type="up"
              onPress={() => handleTransactionsTypeSelect("up")}
              isActive={Boolean(transactionType === "up")}
            />
            <TransactionTypeButton
              title="Saída"
              type="down"
              onPress={() => handleTransactionsTypeSelect("down")}
              isActive={Boolean(transactionType === "down")}
            />
          </TransactionTypeGroup>

          <CategorySelect title="Categoria" />
        </Fields>
        <Button title="Enviar" />
      </FormWapper>
    </Container>
  );
}
