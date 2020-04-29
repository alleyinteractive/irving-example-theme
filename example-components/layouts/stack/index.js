import React from 'react';
import PropTypes from 'prop-types';
import withThemes from '@irvingjs/styled/components/withThemes';
import themeMap from './themes/themeMap';

export const Stack = (props) => {
  const {
    margin,
    theme,
    children,
  } = props;

  const {
    Wrapper,
  } = theme;

  return (
    <Wrapper margin={margin}>
      {children}
    </Wrapper>
  );
};

Stack.propTypes = {
  margin: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  theme: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
};

Stack.defaultProps = {
  margin: '20',
};

export default withThemes(themeMap)(Stack);
