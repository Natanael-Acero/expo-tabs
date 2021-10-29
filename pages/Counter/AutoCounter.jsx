import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect, useRef } from "react";
import {
  Container,
  Counter,
  ButtonsContainers,
  IncreaseButton,
  DecreaseButton,
  ButtonText,
  NameText,
  InfoText,
  GenericButton,
} from "./CounterComponents";

const AutoCounter = () => {
  const counterRef = useRef(0);

  const [counter, setCounter] = useState(0);

  const [automatic, setAutomatic] = useState(false);

  const [showAuthor, setShowAuthor] = useState(false);

  const handleIncreaseCounter = () => {
    setCounter((current) => (counter < 1000 ? current + 1 : current));
    counterRef.current = counter;
  };

  const handleDecreaseCounter = () => {
    setCounter((current) => (counter > 0 ? current - 1 : current));
    counterRef.current = counter;
  };

  const handleAutoIncrease = () => {
    if (counter < 1000) {
      setAutomatic(true);
      handleIncreaseCounter();
    }
  };

  const handleShowAuthor = () => {
    setShowAuthor(true);
    setTimeout(() => {
      setShowAuthor(false);
    }, 5000);
  };

  useEffect(() => {
    counter >= 1000 ? setAutomatic(false) : setAutomatic(automatic);

    if (automatic) {
      setTimeout(() => {
        handleIncreaseCounter();
      }, 1);
    }
  }, [counter]);

  return (
    <>
      <Container>

        <Counter ref={counterRef}>{counter}</Counter>

        {showAuthor == true ? (
          <NameText>Natanael Acero</NameText>
        ) : (
          <InfoText>
            *Press "Show Author" to show Author's name for 5 seconds.*
          </InfoText>
        )}
        
      </Container>

      <Container>
        <ButtonsContainers>
          <DecreaseButton onPress={handleDecreaseCounter} disabled={automatic}>
            <ButtonText>-</ButtonText>
          </DecreaseButton>
          <IncreaseButton onPress={handleIncreaseCounter} disabled={automatic}>
            <ButtonText>+</ButtonText>
          </IncreaseButton>
        </ButtonsContainers>

        <GenericButton onPress={handleAutoIncrease} disabled={automatic}>
          <ButtonText>Auto</ButtonText>
        </GenericButton>

        <GenericButton onPress={handleShowAuthor}>
          <ButtonText>Show Author</ButtonText>
        </GenericButton>
        <StatusBar style="auto" />
        
      </Container>
    </>
  );
};

export default AutoCounter;
