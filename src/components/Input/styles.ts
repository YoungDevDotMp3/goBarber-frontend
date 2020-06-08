import styled, { css } from 'styled-components';
import {
  darkBrown,
  almostWhite,
  mainOrange,
  alertRed,
} from '../../styles/colors';
import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: ${darkBrown};
  border-radius: 10px;
  padding: 16px;
  width: 100%;
  height: 48px;

  color: #666360;
  border: 1.3px solid ${darkBrown};

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  ${(props) =>
    props.isErrored &&
    css`
      border-color: ${alertRed};
    `}

  ${(props) =>
    props.isFocused &&
    css`
      color: ${mainOrange};
      border-color: ${mainOrange};
    `}

  ${(props) =>
    props.isFilled &&
    css`
      color: ${mainOrange};
    `}

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: ${almostWhite};

    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  svg {
    margin: 0;
    margin-left: 10px;
  }
  span {
    background: ${alertRed};
    color: ${almostWhite};
    &::before {
      border-color: ${alertRed} transparent;
    }
  }
`;
