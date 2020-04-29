import styled from 'styled-components';
import { buttonReset, rem } from '@irvingjs/styled/utils';
import { colors, fonts } from 'styles/variables';

export const Wrapper = styled.div`
  ${buttonReset}
  align-items: center;
  background-color: ${colors.yellow};
  color: ${colors.black};
  cursor: pointer;
  display: inline-flex;
  font-family: ${fonts.montserrat};
  font-size: ${rem(14)};
  font-weight: 600;
  justify-content: center;
  letter-spacing: ${rem(1.5)};
  min-width: ${rem(185)};
  padding: ${rem(15)};
  text-decoration: none;
  text-transform: uppercase;
`;
