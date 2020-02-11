import styled from 'styled-components';

export const StyledField = styled.div`
  margin: 0 0 1em;
  > label {
    display: block;
    margin: 0 0 .3rem 0;
    font-size: .93em;
    font-weight: 700;
    text-transform: none;
    color: rgba(0,0,0,.87);
  }
  > input {
    margin: 0;
    padding: .7em 1em;
    border-radius: .3rem;
    background: #fff;
    outline: 0;
    font-size: 1em;
    line-height: 1.2em;
    border: 1px solid rgba(34,36,38,.15);
    color: rgba(0,0,0,.87);
    transition: color .1s ease,border-color .1s ease;
    -webkit-appearance: none;
    box-shadow: 0 0 0 0 transparent inset;
  }
`;