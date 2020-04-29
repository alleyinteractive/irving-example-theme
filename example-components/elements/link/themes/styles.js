import styled from 'styled-components';
import { colors } from 'styles/variables';

// The nature of this component is that is starts with no styling, but we need something
// here for the default theme.
export const Wrapper = styled.a`
  color: ${colors.black};
  font-family: inherit;
`;
