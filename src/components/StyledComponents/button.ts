import styled, { css } from 'styled-components';


interface StyledButtonProps {
  color?: string;
  primary?: boolean;
  rounded?: boolean;
  secondary?: boolean;
}

const StyledButton = styled.button`
  & {
    padding: 8px;
    border: none;
    box-shadow: 0px 0px 4px gray;
    color: ${(props: StyledButtonProps) => props.color || '#ffffff'};
  }

  ${(props: StyledButtonProps) => {
    if (props.primary) {
      return css`
        & {
          background: #0000FF;
          color: #ffffff;
        }
      `;
    } else if (props.secondary) {
      return css`
        & {
          background: #DD0000;
          color: #ffffff;
        }
      `;
    }
  }}

  ${(props: StyledButtonProps) => props.rounded && css`
    & {
      border-radius: 6px;
    }
  `}
`;

export const ComposedStyledButton = styled(StyledButton)`
  & {
    width: 50%;
  }
`;

export default StyledButton;
