import styled from 'styled-components';
import { rem } from '@irvingjs/styled/utils';
import { fonts } from 'styles/variables';
import mapPin from 'assets/encoded/map-pin.svg';

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  font-family: ${fonts.montserrat};
  font-size: ${rem(22)};
  font-weight: 600;
  justify-content: center;
  padding: ${rem(0, 10)};

  &::before {
    background-image: url(${mapPin});
    background-repeat: no-repeat;
    background-size: contain;
    content: '';
    display: block;
    height: ${rem(22)};
    width: ${rem(22)};
  }
`;
