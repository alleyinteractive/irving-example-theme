import styled from 'styled-components';
import { rem } from '@irvingjs/styled/utils';
import { colors, fonts } from 'styles/variables';

export const Wrapper = styled.p`
  color: ${colors.grayDark};
  font-family: ${fonts.lato};
  font-size: ${rem(18)};
  font-weight: 300;
  line-height: ${28 / 18};
  margin-bottom: ${rem(30)};

  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 700;
    margin-bottom: ${rem(30)};
  }

  h2 {
    font-size: ${rem(34)};
    line-height: 1.3;
  }

  h3 {
    font-size: ${rem(28)};
  }

  h4 {
    font-size: ${rem(23)};
  }

  h5 {
    font-size: ${rem(19)};
  }

  p {
    margin-bottom: ${rem(30)};
  }

  a {
    color: ${colors.blue};

    &:hover {
      color: ${colors.blueDark};
    }

    &:visited {
      color: ${colors.purple};
    }
  }

  img {
    max-width: 100%;

    &.alignleft {
      float: left;
      margin-bottom: ${rem(30)};
      margin-right: ${rem(30)};
    }

    &.alignright {
      float: right;
      margin-bottom: ${rem(30)};
      margin-left: ${rem(30)};
    }

    &.aligncenter {
      display: block;
      margin: 0 auto ${rem(30)};
    }
  }

  blockquote {
    background: ${colors.grayExtraLight};
    border-left: solid 5px ${colors.grayLight};
    margin-bottom: ${rem(30)};
    padding: ${rem(20, 40)};
  }

  ol,
  ul {
    line-height: 1.8;
    margin: 0 0 ${rem(30)} ${rem(40)};
  }

  ul {
    list-style: disc;
  }

  ol {
    list-style: decimal;
  }

  em {
    font-style: italic;
  }

  strong {
    font-weight: 700;
  }
`;
