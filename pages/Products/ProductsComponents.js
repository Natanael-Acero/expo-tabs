import styled from "styled-components";
import { colores } from '../../styles/colores.styles';

const Container = styled.View`
  flex: 1;
  background-color: ${colores.background};
  align-items: center;
`;
const ProductName = styled.TouchableOpacity`
  border-radius: 50px;
  padding: 5px;
  margin: 10px;
  background-color: ${colores.primary};
  width: auto;
  align-items: center;
  box-shadow: 1px 5px 5px gray;
    
`;

const NotProductsContainer = styled.View`
  flex: 1;
  background-color: ${colores.background};
  align-items: center;
  justify-content: center;
`;


const NotProductsText = styled.Text`
  font-size: 15px;
  color: ${colores.black_text};
  font-weight: bold;
`;


const ButtonText = styled.Text`
  font-size: 30px;
  color: ${colores.white_text};
  padding-right: 20px;
  padding-left: 20px;
`;

export { Container, ProductName, ButtonText, NotProductsContainer, NotProductsText }