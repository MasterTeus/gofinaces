import React from "react";
import { FlatList } from "react-native";
import { Button } from "../../components/Form/Button";
import { categories } from "../../utils/categories";
import { Container, Header, Title, CategoryCard, Icon, Label, Body } from "./styles";

interface Category {
  key: string;
  name: string;
}

interface Props {
  category: Category;
  setCategory: (category: Category) => void;
  closeSelectCategory: () => void;
}

export function CategorySelectModal({
  category,
  setCategory,
  closeSelectCategory,
}: Props) {
  function handleCategory(category: Category) {
    setCategory(category);
  }
  return (
    <Container>
      <Header>
        <Title>Categoria</Title>
      </Header>

      <Body>
        <FlatList
          data={categories}
          keyExtractor={(item) => item.key}
          renderItem={({ item }) => (
            <CategoryCard
              color={item.color}
              isActive={item.key === category.key}
              activeOpacity={0.7}
              onPress={() => handleCategory(item)}
            >
              <Icon
                isActive={item.key === category.key}
                color={item.color}
                name={item.icon}
              />
              <Label isActive={item.key === category.key} color={item.color}>
                {item.name}
              </Label>
            </CategoryCard>
          )}
        />

        <Button
          title="Selecionar"
          onPress={closeSelectCategory}
        />
      </Body>
    </Container>
  );
}
