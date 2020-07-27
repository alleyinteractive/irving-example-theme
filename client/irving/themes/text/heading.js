/* eslint max-len: 0 */
import styled from 'styled-components';
import get from 'lodash/get';

// eslint-disable import/prefer-default-export.
export const TextWrapper = styled.div`
  border-bottom: 3px solid ${(props) => get(props, 'theme.colors.primary.main')};
  color: ${(props) => get(props, 'theme.colors.text.primary')};
  font-size: 2.25rem;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
`;
// eslint-enable.
