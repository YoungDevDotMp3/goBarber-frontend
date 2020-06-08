import styled from 'styled-components';
import { mainOrange, lightBrown } from '../../styles/colors';

export const Container = styled.div`
  position: relative;

  span {
    width: 180px;
    padding: 8px;
    border-radius: 4px;
    background: ${mainOrange};

    font-size: 14px;
    font-weight: 400;
    opacity: 0;
    transition: opacity 0.4s;
    visibility: hidden;

    position: absolute;
    bottom: calc(100% + 12px);
    left: 67%;
    transform: translateX(-50%);

    color: ${lightBrown};

    &::before {
      content: '';
      border-style: solid;
      border-color: ${mainOrange} transparent;
      border-width: 6px 6px 0 6px;
      top: 100%;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`;
