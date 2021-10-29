import React, { useState } from "react";
import Toast from "react-native-root-toast";
import { Keyboard } from "react-native";
import {
  ButtonText,
  ClearButton,
  Container,
  Input,
  AddButton,
  ButtonsContainers,
} from "./AddProductComponents";

const AddProduct = (props) => {
  const { setProducts } = props.route.params;

  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setProducts((products) => [
      ...products,
      {
        id: (Math.floor(Math.random() * 10000) + 1).toString(),
        productName: inputValue,
      },
    ]);

    Keyboard.dismiss();

    setInputValue("");

    Toast.show("Product was successfully added!", {
      duration: Toast.durations.SHORT,
      position: Toast.positions.BOTTOM,
    });
  };

  const handleCleanInput = () => {
    setInputValue("");
  };

  return (
    <>
      <Container>
        <Input
          type="text"
          placeholder="Product name"
          value={inputValue}
          onChangeText={(text) => setInputValue(text)}
        />
        <ButtonsContainers>
          <ClearButton onPress={handleCleanInput}>
            <ButtonText>Clear</ButtonText>
          </ClearButton>
          <AddButton onPress={handleSubmit} disabled={inputValue.length < 1}>
            <ButtonText>Add</ButtonText>
          </AddButton>
        </ButtonsContainers>
      </Container>
    </>
  );
};

export default AddProduct;
