import styled from 'styled-components';
import { colors, fonts } from 'styles/variables';
import { rem } from '@irvingjs/styled/utils';

export const Wrapper = styled.a`
  border-bottom: solid 4px ${colors.yellow};
  margin-bottom: 0;
  padding: ${rem(20)} ${rem(10)};
  text-decoration: none;

  &:hover {
    background-color: ${colors.grayExtraLight};
  }

  .title {
    display: block;
    font-family: ${fonts.montserrat};
  }

  .type {
    font-size: ${rem(24)};
    font-weight: 600;
    margin-bottom: ${rem(10)};
  }

  .name {
    color: ${colors.grayMed};
    font-size: ${rem(20)};
    font-weight: 700;
    text-decoration: underline;
  }
`;
