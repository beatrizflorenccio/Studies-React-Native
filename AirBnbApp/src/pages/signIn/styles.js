import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: #F5F5F5;
`;

const Logo = styled.Image`
  height: 30%;
  margin-bottom: 40px;
`;

const Input = styled.TextInput`
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 15px;
  padding-bottom: 15px;
  border-radius: 5px;
  background: #FFF;
  align-self: stretch;
  margin-bottom: 15px;
  margin-left: 20px;
  margin-right: 20px;
  font-size: 16px;
  
`;

export { Container, Logo, Input, ErrorMessage, Button, ButtonText, SignUpLink, SignUpLinkText };