/* eslint max-len: 0 */
import styled from 'styled-components';
import { rem, siteTheme } from '@irvingjs/styled/utils';

// eslint-disable import/prefer-default-export.
export const TextWrapper = styled.div`
  color: ${siteTheme('variants.irving/text.heading.color')};
  font-family: ${siteTheme('variants.irving/text.heading.fontFamily')};
  font-size: ${(props) => rem(siteTheme('variants.irving/text.heading.fontSize')(props))};
  margin-bottom: 1rem;
  padding-bottom: 1rem;
`;
// eslint-enable.
