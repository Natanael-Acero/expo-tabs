import React from "react";
import { FlatList, Text } from "react-native";
import {
  Container,
  ProductName,
  ButtonText,
  NotProductsContainer,
  NotProductsText,
} from "./ProductsComponents";

const Products = ({ products }) => {
  return (
    <>
      <Container>
        {products.length <= 0 ? (
          <NotProductsContainer>
            <NotProductsText>No products found :(</NotProductsText>
          </NotProductsContainer>
        ) : (
          <FlatList
            data={products}
            renderItem={({ item }) => (
              <ProductName key={item.id}>
                <ButtonText>{item.productName}</ButtonText>
              </ProductName>
            )}
          />
        )}
      </Container>
    </>
  );
};

export default Products;
