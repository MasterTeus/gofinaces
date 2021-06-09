import React, { useEffect, useState } from "react";
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
import { Alert, Keyboard, Modal, TouchableWithoutFeedback } from "react-native";
import { CategorySelectModal } from "../CategorySelectModal";
import { InputForm } from "../../components/Form/InputForm";

import uuid from "react-native-uuid";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { useForm } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";

interface FormData {
  name: string;
  amount: string;
}

const schema = Yup.object().shape({
  name: Yup.string().required("Nome é obrigatório"),
  amount: Yup.number()
    .typeError("Informe um valor numérico")
    .positive("O valor não pode ser negativo"),
});

export function Register() {
  const dataKey = "@gofinance:transactions";
  const navigation = useNavigation();

  //! States
  const [transactionType, setTransactionType] = useState("");
  const [category, setCategory] = useState({
    key: "category",
    name: "Categoria",
    color: "#969cb2",
    icon: "",
  });
  const [modal, setModal] = useState(false);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  //! Functions
  function handleTransactionsTypeSelect(type: "up" | "down") {
    setTransactionType(type);
  }

  async function handleRegister(form: FormData) {
    if (!transactionType) {
      return Alert.alert("Selecione o tipo da transação");
    }
    if (category.key === "category") {
      return Alert.alert("Selecione a categoria");
    }

    const newData = {
      id: String(uuid.v4()),
      name: form.name,
      amount: form.amount,
      transactionType,
      category: category.key,
      date: new Date().toISOString(),
    };

    try {
      const oldTransacitions = await AsyncStorage.getItem(dataKey);

      const currentTransactions = oldTransacitions
        ? JSON.parse(oldTransacitions)
        : [];

      const dataFormated = [newData, ...currentTransactions];

      console.log(dataFormated);

      await AsyncStorage.setItem(dataKey, JSON.stringify(dataFormated));

      //* Reset Fields Values
      reset();
      setTransactionType("");
      setCategory({
        key: "category",
        name: "Categoria",
        color: "#969cb2",
        icon: "",
      });

      navigation.navigate("Home");
    } catch (error) {
      console.log(error);
      Alert.alert("Não foi possível salvar");
    }
  }

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
              error={errors.name && errors.name.message}
            />
            <InputForm
              placeholder="Preço"
              name="amount"
              control={control}
              keyboardType="numeric"
              error={errors.amount && errors.amount.message}
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
