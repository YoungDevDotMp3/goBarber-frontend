import styled from 'styled-components';
import { shade } from 'polished';

import { mainOrange, lightBrown } from '../../styles/colors';

export const Container = styled.button`
  background: ${mainOrange};
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  width: 100%;
  height: 48px;
  margin-top: 16px;
  color: ${lightBrown};
  font-weight: 500;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, mainOrange)};
  }
`;
