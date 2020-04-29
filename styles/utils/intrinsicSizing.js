import { css } from 'styled-components';

export const intrinsicContainer = (ratio = 9 / 16) => css`
  height: 0;
  padding-bottom: ${ratio * 100}%;
  position: relative;
`;

export const intrinsicContent = css`
  height: auto;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`;

export const intrinsic = (ratio = 9 / 16) => css`
  ${intrinsicContainer(ratio)};

  > * {
    ${intrinsicContent};
  }
`;
