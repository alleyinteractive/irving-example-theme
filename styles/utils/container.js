import { css } from 'styled-components';
import { layout } from 'styles/variables';

const container = (width, gutter = layout.gutter) => css`
  margin-left: auto;
  margin-right: auto;
  max-width: ${width};
  padding: 0 ${gutter};
  width: 100%;
`;

export default container;
