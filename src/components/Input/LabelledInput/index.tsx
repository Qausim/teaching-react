import React from 'react';
import styled, { css } from 'styled-components';
import BaseInput from '../BaseInput';


interface WrapperProps {
  width?: string | number;
}

const Wrapper = styled.div<WrapperProps>`
  /* & {
    width: ${props => props.width || '100%'};
  } */

  ${(props) => props.width && css`
    & {
      width: ${props.width};
      margin: 0 auto;
    }

    input {
      width: 100%;
    }
  `}

  .helper-text {
    small, span {
      display: block;
    }
  }
`;


interface Props extends React.HTMLProps<HTMLInputElement> {}

export const LabelledInput = ({id, width, label, ...rest}: Props) => {
  return (
    <Wrapper width={width}>
      <label htmlFor={id}>{label}</label>
      <BaseInput {...{id, ...rest}}/>
      <p className='helper-text'>
        <small>Whatever!!!</small>
        <span>Whatever you too. Petty!!!</span>
      </p>
    </Wrapper>
  );
}
