import React from 'react';
import PropTypes from 'prop-types';
import { breakpoints } from '@irvingjs/styled/variables';
import { container } from '@irvingjs/styled/utils';
import styled from 'styled-components';

const WideWidthContainer = styled.div`
  ${container(breakpoints.xxlVal, 30)}
`;

export const Wrapper = (props) => {
  const {
    children,
    tag,
  } = props;

  return (
    <WideWidthContainer as={tag}>
      {children}
    </WideWidthContainer>
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
