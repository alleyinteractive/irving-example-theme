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
          breakpoint: 'xlMin',
          gridColumns: `1fr ${rem(320)}`,
        },
      ]}
    >
      <GridCell
        columns={[1, 2]}
        responsiveStyles={[
          {
            breakpoint: 'xlMin',
            columns: [1, 2],
          },
        ]}
      >
        {content}
      </GridCell>
      <GridCell
        columns={[1, 2]}
        responsiveStyles={[
          {
            breakpoint: 'xlMin',
            columns: [2, 3],
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
