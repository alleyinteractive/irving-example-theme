import styled from 'styled-components';
import { colors } from 'styles/variables';

export const Wrapper = styled.span
  .attrs((props) => {
    const { aspectRatio } = props;

    return aspectRatio ? {
      style: {
        paddingBottom: `${aspectRatio * 100}%`,
      },
    } : {};
  })`
  display: block;
  height: ${(props) => (props.aspectRatio ? 0 : 'auto')};
  overflow: hidden;
  position: ${(props) => (props.aspectRatio ? 'relative' : 'static')};

  &.placeholderImg {
    background-color: ${colors.blueDark};
    height: 100%;
    padding: 0;
  }

  &.contentItem {
    position: static;
  }
`;
