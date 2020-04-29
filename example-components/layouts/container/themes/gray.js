import React from 'react';
import PropTypes from 'prop-types';
import { colors } from 'styles/variables';
import { rem } from '@irvingjs/styled/utils';
import styled from 'styled-components';

const GrayContainer = styled.div`
  background-color: ${colors.grayExtraLight};
  margin-bottom: ${rem(10)};
  padding: ${rem(30)};
`;

export const Wrapper = (props) => {
  const {
    children,
    tag,
  } = props;

  return (
    <GrayContainer as={tag}>
      {children}
    </GrayContainer>
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
