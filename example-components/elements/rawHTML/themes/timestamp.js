import styled from 'styled-components';
import { rem } from '@irvingjs/styled/utils';
import { colors, fonts } from 'styles/variables';

export const Wrapper = styled.span`
  color: ${colors.grayDark};
  font-family: ${fonts.lato};
  font-size: ${rem(13)};
  text-transform: uppercase;
`;
