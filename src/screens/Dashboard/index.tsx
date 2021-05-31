import React from "react";
import Card from "../../components/Card";
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
} from "./styles";

export function Dashboard() {
  return (
    <Container>
      <Header>
        <UserWapper>
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
        <Card />
        <Card />
        <Card />
      </ListCards>
    </Container>
  );
}
