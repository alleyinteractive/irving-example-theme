import React from 'react';
import PropTypes from 'prop-types';
import withThemes from '@irvingjs/styled/components/withThemes';
import themeMap from './themes/themeMap';

const Container = (props) => {
  const {
    bgImage,
    children,
    className,
    tag,
    theme,
  } = props;

  const { Wrapper } = theme;

  return (
    <Wrapper tag={tag} className={className} bgImage={bgImage}>
      {children}
    </Wrapper>
  );
};

Container.defaultProps = {
  bgImage: '',
  tag: 'div',
  children: {},
  className: '',
};

Container.propTypes = {
  /**
   * The URL of the background image
   */
  bgImage: PropTypes.string,
  /**
   * Children of the component
   */
  children: PropTypes.node,
  /**
   * Classname for the container.
   */
  className: PropTypes.string,
  /**
   * Tag to use when rendering this heading.
   */
  tag: PropTypes.oneOfType([
    PropTypes.oneOf(['article', 'div', 'section']),
    PropTypes.object,
  ]),
  /**
   * Theme (styles) to apply to the component.
   */
  theme: PropTypes.object.isRequired,
};

export default withThemes(themeMap)(Container);
