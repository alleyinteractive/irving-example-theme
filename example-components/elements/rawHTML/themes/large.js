import styled from 'styled-components';
import { rem } from '@irvingjs/styled/utils';
import { Wrapper as StandardWrapper } from './standard';

export const Wrapper = styled(StandardWrapper)`
  font-size: ${rem(20)};
`;
