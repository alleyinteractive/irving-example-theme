import styled from 'styled-components';
import { siteTheme, rem } from '@irvingjs/styled/utils';

/* eslint-disable import/prefer-default-export, max-len */
// eslint-disable-next-line max-len
export const ContainerWrapper = styled.div`
  align-items: flex-end;
  color: ${siteTheme('colors.primary')};
  display: flex;
  flex-direction: row;
  font-family: ${siteTheme('fonts.secondary')};
  font-size: ${(props) => rem(siteTheme('fonts.secondary-typescale.10')(props))};
  font-weight: ${siteTheme('fonts.weight.semiBold')};
  justify-content: flex-start;
  margin: auto;
  margin-bottom: 1rem;
  padding: 0 1rem;

  svg {
    stroke-fill: ${siteTheme('colors.primary')};
    margin-right: .5rem;
    font-size: 1.5rem;
  }
`;
/* eslint-enable */
