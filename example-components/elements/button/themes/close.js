import styled from 'styled-components';
import { buttonReset, screenreaderOnly, rem } from '@irvingjs/styled/utils';
import { colors } from 'styles/variables';

export const Wrapper = styled.div`
  ${buttonReset}
  align-items: center;
  cursor: pointer;
  display: flex;
  justify-content: center;
  width: ${rem(60)};

  span {
    ${screenreaderOnly}
  }
`;

export const IconWrapper = styled.div`

  svg {
    height: ${rem(20)};
    width: ${rem(20)};

    path {
      fill: ${colors.grayExtraLight};
      stroke: ${colors.grayExtraLight};
    }

  }
`;
