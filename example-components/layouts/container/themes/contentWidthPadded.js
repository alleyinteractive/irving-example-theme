import React from 'react';
import PropTypes from 'prop-types';
import {
  GridContainer,
  GridCell,
} from '@irvingjs/styled/components/grid';
import styled from 'styled-components';
import { rem } from '@irvingjs/styled/utils';
import { breakpoints } from '@irvingjs/styled/variables';

/* keeps our GridContainer aligned with nonGrid containers */
const ContentWidthPaddedContainer = styled(GridContainer)`
  margin: 0 auto;
  max-width: ${breakpoints.xxlVal};
  padding: ${rem(60)} 0 ${rem(120)};
`;

export const Wrapper = (props) => {
  const {
    children,
    className,
    tag,
  } = props;

  return (
    <ContentWidthPaddedContainer
      tag={tag}
      className={className}
    >
      <GridCell
        columns={[2, 12]}
      >
        {children}
      </GridCell>
    </ContentWidthPaddedContainer>
  );
};

Wrapper.defaultProps = {
  className: '',
};

Wrapper.propTypes = {
  /**
   * Contents of the container.
   */
  children: PropTypes.node.isRequired,
  /**
   * Classname for the container. Passing another styled component as the
   * tag for this component doesn't work for adding styles to this,
   * probably because we are already using styled(GridContainer). So we can use
   * an old fashioned className instead.
   */
  className: PropTypes.string,
  /**
   * Tag to use when rendering this container.
   */
  tag: PropTypes.oneOfType([
    PropTypes.oneOf(['article', 'div', 'section']),
    PropTypes.object,
  ]).isRequired,
};
