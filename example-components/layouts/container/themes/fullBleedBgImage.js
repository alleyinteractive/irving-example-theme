import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Wrapper as FullBleedWrapper } from './fullBleed';

const FullBleedBgImageContainer = styled(FullBleedWrapper)`
  background-image: ${(props) => `url(${props.bgImage})`};
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Wrapper = (props) => {
  const {
    bgImage,
    children,
    tag,
  } = props;

  return (
    <FullBleedBgImageContainer as={tag} bgImage={bgImage}>
      {children}
    </FullBleedBgImageContainer>
  );
};
/* eslint-enable */

Wrapper.propTypes = {
  /**
   * Background image for the container.
   */
  bgImage: PropTypes.string.isRequired,
  /**
   * Contents of the container.
   */
  children: PropTypes.node.isRequired,
  /**
   * Tag to use when rendering this container.
   */
  tag: PropTypes.oneOfType([
    PropTypes.oneOf(['article', 'div', 'section']),
    PropTypes.object,
  ]).isRequired,
};
