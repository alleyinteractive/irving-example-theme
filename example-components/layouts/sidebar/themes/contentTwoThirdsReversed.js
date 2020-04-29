import React from 'react';
import PropTypes from 'prop-types';
import {
  GridContainer,
  GridCell,
} from '@irvingjs/styled/components/grid';

export const Container = (props) => {
  const {
    componentGroups: {
      content,
      sidebar,
    },
  } = props;

  return (
    <GridContainer>
      <GridCell
        columns={[1, 13]}
        responsiveStyles={[
          {
            breakpoint: 'mdMin',
            columns: [1, 5],
          },
        ]}
      >
        {sidebar}
      </GridCell>
      <GridCell
        columns={[1, 13]}
        responsiveStyles={[
          {
            breakpoint: 'mdMin',
            columns: [5, 13],
          },
        ]}
      >
        {content}
      </GridCell>
    </GridContainer>
  );
};

Container.propTypes = {
  componentGroups: PropTypes.shape({
    content: PropTypes.arrayOf(PropTypes.element),
    sidebar: PropTypes.arrayOf(PropTypes.element),
  }).isRequired,
};

export default Container;
