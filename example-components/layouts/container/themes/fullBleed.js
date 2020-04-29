import React from 'react';
import PropTypes from 'prop-types';
import { container } from '@irvingjs/styled/utils';
import styled from 'styled-components';

const FullBleedContainer = styled.div`
  ${container('100%', '0')}
`;

/* eslint-disable import/prefer-default-export */
export const Wrapper = (props) => {
  const {
    children,
    tag,
  } = props;

  return (
    <FullBleedContainer as={tag}>
      {children}
    </FullBleedContainer>
  );
};
/* eslint-enable */

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
