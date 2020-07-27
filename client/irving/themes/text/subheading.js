/* eslint max-len: 0 */
import styled from 'styled-components';
import get from 'lodash/get';

// eslint-disable import/prefer-default-export.
export const TextWrapper = styled.div`
  color: ${(props) => get(props, 'theme.colors.text.secondary')};
  font-size: 1.25rem;
  line-height: 1.5rem;
  margin-bottom: .7rem;
`;
// eslint-enable.
