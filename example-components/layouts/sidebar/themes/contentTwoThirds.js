import React from 'react';
import PropTypes from 'prop-types';
import { rem } from '@irvingjs/styled/utils';
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
    <GridContainer
      gridColumns={1}
      responsiveStyles={[
        {
          breakpoint: 'lgMin',
          gridColumns: `1fr 1fr minmax(${rem(300)}, 1fr)`,
        },
      ]}
    >
      <GridCell
        columns={[1, 2]}
        responsiveStyles={[
          {
            breakpoint: 'lgMin',
            columns: [1, 3],
          },
        ]}
      >
        {content}
      </GridCell>
      <GridCell
        columns={[1, 2]}
        responsiveStyles={[
          {
            breakpoint: 'lgMin',
            columns: [3, 4],
          },
        ]}
      >
        {sidebar}
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
