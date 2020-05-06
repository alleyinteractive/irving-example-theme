import React from 'react';
import PropTypes from 'prop-types';

const Fragment = (props) => {
  const {
    children,
  } = props;

  return (
    <>
      {children}
    </>
  );
};

Fragment.defaultProps = {
  children: {},
};

Fragment.propTypes = {
  /**
   * Children of the component
   */
  children: PropTypes.node,
};

export default Fragment;
