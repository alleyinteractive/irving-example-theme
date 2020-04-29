import styled from 'styled-components';
import { rem } from '@irvingjs/styled/utils';
import { colors, fonts } from 'styles/variables';
import mapPin from 'assets/encoded/map-pin.svg';

export const Wrapper = styled.div`
  color: ${colors.grayDark};
  font-family: ${fonts.montserrat};
  font-size: 1rem;
  margin-bottom: ${rem(30)};
  padding-left: ${rem(36)};
  position: relative;

  &::before {
    background-image: url(${mapPin});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 70%;
    color: ${colors.gray};
    content: '';
    display: block;
    height: ${rem(16)};
    left: 0;
    position: absolute;
    top: 0;
    width: ${rem(16)};
  }

  span {
    display: block;

    + span {
      margin-top: ${rem(5)};
    }
  }
`;
