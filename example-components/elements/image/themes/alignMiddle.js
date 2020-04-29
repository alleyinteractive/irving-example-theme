import styled from 'styled-components';
import { Wrapper as DefaultWrapper } from './default';

export const Wrapper = styled(DefaultWrapper)`

  img {
    vertical-align: middle;
    top: 50%;
    transform: translateY(-50%);
  }
`;
