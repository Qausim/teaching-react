import React from 'react';
import styled from 'styled-components';


const Input = styled.input`
  & {
    padding: 4px;
    border-radius: 4px;
  }
`;

type InputProps = {
  [key: string]: any
}

const BaseInput = (props: InputProps) => {
  return (
    <Input {...props}/>
  )
};

export default BaseInput;
