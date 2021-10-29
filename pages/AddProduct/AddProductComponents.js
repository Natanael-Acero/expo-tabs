import styled from "styled-components";
import { colores } from '../../styles/colores.styles';

const Container = styled.View`
  flex: 1;
  background-color: ${colores.background};
  align-items: center;
  justify-content: center;
`;

const Input = styled.TextInput`
    border-radius: 50px;
    height: 8%;
    width: 65%;
    border-width: 1px;
    padding: 10px;
    font-size: 25px;
  `;

const ButtonsContainers = styled.View`
  flex-direction: row;
  justify-content: space-between;
  box-shadow: 1px 5px 5px gray;
`;

const AddButton = styled.TouchableOpacity`
  border-radius: 50px;
  height: 50px;
  padding: 5px;
  margin: 10px;
  background-color: ${colores.success};
  width: 30%;
  align-items: center;
`;
const ClearButton = styled.TouchableOpacity`
  border-radius: 50px;
  height: 50px;
  padding: 5px;
  margin: 10px;
  background-color: ${colores.red};
  width:30%;
  align-items: center;
`;

const ButtonText = styled.Text`
  font-size: 30px;
  color: ${colores.white_text};
`;

export {
    Input,
    ButtonsContainers,
    AddButton,
    ClearButton,
    ButtonText,
    Container
}