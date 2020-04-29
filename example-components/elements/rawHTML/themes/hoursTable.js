import styled from 'styled-components';
import { rem } from '@irvingjs/styled/utils';
import { colors, fonts } from 'styles/variables';

export const Wrapper = styled.div`
  color: ${colors.grayDark};
  font-family: ${fonts.montserrat};
  font-size: 1rem;
  margin-bottom: ${rem(30)};

  table {
    width: 100%;
  }

  td {
    padding: ${rem(8, 0)};

    &.day {
      width: 33%;
    }

    &.hours {
      text-align: right;
    }
  }
`;
