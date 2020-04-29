import styled, { css } from 'styled-components';
import { rem } from '@irvingjs/styled/utils';
import { fonts, colors } from 'styles/variables';

const getLazyloadDisplay = (props, invert = false) => {
  const { lazyload, loaded } = props;

  if (lazyload && loaded) {
    return invert ? 'none' : 'block';
  }

  if (lazyload && ! loaded) {
    return invert ? 'block' : 'none';
  }

  return 'initial';
};

const getAspectRatioStyles = (props) => {
  const { aspectRatio } = props;

  if (aspectRatio) {
    return css`
      height: auto;
      left: 0;
      position: absolute;
      top: 0;
      width: 100%;
    `;
  }

  return '';
};

export const Caption = styled.figcaption`
  color: ${colors.grayDark};
  font-family: ${fonts.graphik};
  font-size: ${rem(14)};
  line-height: ${rem(20)};
`;

export const Placeholder = styled.img`
  display: ${(props) => getLazyloadDisplay(props, true)};
  height: ${(props) => (props.aspectRatio ? '100%' : 'auto')};
`;

export const Image = styled.img`
  display: ${(props) => getLazyloadDisplay(props)};
  ${(props) => getAspectRatioStyles(props)};
  max-width: 100%;

  /* Styles for the SVG placeholder image when no image is set. */
  .placeholderImg & {
    left: 50%;
    max-height: 80%;
    opacity: 0.5;
    top: 50%;
    transform: translate(-50%, -50%);
    width: auto;
  }

  /* For content item images we want the image */
  .contentItem & {
    height: 100%;
    object-fit: cover;
    width: 100%;
  }
`;

export const Picture = styled.picture`
  display: ${(props) => getLazyloadDisplay(props)};
  ${(props) => getAspectRatioStyles(props)};
`;
