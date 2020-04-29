import styled from 'styled-components';
import { rem } from '@irvingjs/styled/utils';
import { colors, fonts } from 'styles/variables';

export const Wrapper = styled.p`
  color: ${colors.grayDark};
  font-family: ${fonts.montserrat};
  font-size: 1rem;
  line-height: 1.4;
  margin-bottom: ${rem(30)};
`;
