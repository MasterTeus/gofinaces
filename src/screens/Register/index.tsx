import React from "react";
import { Container, Header, Title, FormWapper, Fields } from "./styles";
import { Input } from "../../components/Form/Input";
import { Button } from "../../components/Form/Button";

export function Register() {
  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>

      <FormWapper>
        <Fields>
          <Input placeholder="Nome" />
          <Input placeholder="Preço" />
        </Fields>
        <Button title="Enviar" />
      </FormWapper>
    </Container>
  );
}
