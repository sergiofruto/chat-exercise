import styled from 'styled-components';

export const InputStyled = styled.input`
  width: 100%;
  height: 70px;
  font-size: 16px;
  padding: 0 16px;
  @media (min-width: 1024px) {
    height: 50px;
  }
  &:focus {
    outline: none;
  }
`;