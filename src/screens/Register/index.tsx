import React, { useState } from "react";
import {
  Container,
  Header,
  Title,
  FormWapper,
  Fields,
  TransactionTypeGroup,
} from "./styles";
import { Button } from "../../components/Form/Button";
import { TransactionTypeButton } from "../../components/Form/TransactionTypeButton";
import { CategorySelect } from "../../components/Form/CategorySelect";
import { Keyboard, Modal, TouchableWithoutFeedback } from "react-native";
import { CategorySelectModal } from "../CategorySelectModal";
import { InputForm } from "../../components/Form/InputForm";
import { useForm } from "react-hook-form";

interface FormData {
  name: string;
  amount: string;
}

export function Register() {
  const [transactionType, setTransactionType] = useState("");
  const [category, setCategory] = useState({
    key: "category",
    name: "Categoria",
    color: "#969cb2",
    icon: "",
  });
  const [modal, setModal] = useState(false);

  function handleTransactionsTypeSelect(type: "up" | "down") {
    setTransactionType(type);
  }

  function handleRegister(form: FormData) {
    const data = {
      name: form.name,
      amount: form.amount,
      transactionType,
      category: category.key,
    };
    console.log("====================================");
    console.log(data);
    console.log("====================================");
  }

  const { control, handleSubmit } = useForm();
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Header>
          <Title>Cadastro</Title>
        </Header>

        <FormWapper>
          <Fields>
            <InputForm
              name="name"
              control={control}
              placeholder="Nome"
              autoCapitalize="sentences"
              autoCorrect={false}
            />
            <InputForm
              placeholder="Preço"
              name="amount"
              control={control}
              keyboardType="numeric"
            />

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

            <CategorySelect
              onPress={() => setModal(true)}
              title={category.name}
              buttonProps={category}
            />
            <Modal
              animationType="slide"
              statusBarTranslucent
              hardwareAccelerated
              visible={modal}
            >
              <CategorySelectModal
                category={category}
                setCategory={setCategory}
                closeSelectCategory={() => setModal(false)}
              />
            </Modal>
          </Fields>
          <Button title="Enviar" onPress={handleSubmit(handleRegister)} />
        </FormWapper>
      </Container>
    </TouchableWithoutFeedback>
  );
}
