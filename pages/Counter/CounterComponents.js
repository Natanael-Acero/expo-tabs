import styled from "styled-components";
import { colores } from '../../styles/colores.styles';

const Container = styled.View`
  flex: 1;
  background-color: ${colores.background};
  align-items: center;
  justify-content: center;
`;

const Counter = styled.Text`
  font-size: 80px;
  color: ${colores.black_text};
  font-weight: bold;
`;

const ButtonsContainers = styled.View`
  flex-direction: row;
  justify-content: space-between;
  box-shadow: 1px 5px 5px gray;
`;

const IncreaseButton = styled.TouchableOpacity`
  border-radius: 50px;
  height: 50px;
  padding: 5px;
  margin: 10px;
  background-color: ${colores.success};
  width: 90px;
  align-items: center;
`;
const DecreaseButton = styled.TouchableOpacity`
  border-radius: 50px;
  height: 50px;
  padding: 5px;
  margin: 10px;
  background-color: ${colores.red};
  width: 90px;
  align-items: center;
`;

const ButtonText = styled.Text`
  font-size: 30px;
  color: ${colores.white_text};
`;

const NameText = styled.Text`
  font-size: 25px;
  color: ${colores.success};
  font-weight: bold;
`;

const InfoText = styled.Text`
  font-size: 13px;
  color: ${colores.black_text};
  text-align: center;
  padding-top: 15px;
`;

const GenericButton = styled.TouchableOpacity`
  border-radius: 50px;
  padding: 5px;
  margin: 10px;
  background-color: ${colores.primary};
  width: 200px;
  align-items: center;
  box-shadow: 1px 5px 5px gray;
`;

export {
  Container,
  Counter,
  ButtonsContainers,
  IncreaseButton,
  DecreaseButton,
  ButtonText,
  NameText,
  InfoText,
  GenericButton,
};
