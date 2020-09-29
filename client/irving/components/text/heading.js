/* eslint max-len: 0 */
import styled from 'styled-components';
import { siteTheme } from '@irvingjs/styled/utils';

// eslint-disable import/prefer-default-export.
export const TextWrapper = styled.div`
  border-bottom: 3px solid ${siteTheme('article.heading.borderBottom')};
  color: ${siteTheme('article.heading.color')};
  font-size: 2.25rem;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
`;
// eslint-enable.
