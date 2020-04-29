import React from 'react';
import PropTypes from 'prop-types';
import { rem } from '@irvingjs/styled/utils';
import styled from 'styled-components';

const PaddedContainer = styled.div`
  margin-bottom: ${rem(10)};
  padding: ${rem(0, 30)};
`;

export const Wrapper = (props) => {
  const {
    children,
    tag,
  } = props;

  return (
    <PaddedContainer as={tag}>
      {children}
    </PaddedContainer>
  );
};

Wrapper.propTypes = {
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
