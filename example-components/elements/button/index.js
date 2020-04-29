import React from 'react';
import PropTypes from 'prop-types';
import close from 'assets/icons/close-circle.svg';
import Link from '@irvingjs/core/components/helpers/link';
import withThemes from '@irvingjs/styled/components/withThemes';
import themeMap from './themes/themeMap';

const Button = (props) => {
  const {
    children,
    className,
    icon,
    link,
    onClick,
    theme,
    type,
  } = props;

  const icons = {
    close,
  };

  const { Wrapper, IconWrapper } = theme;
  const Icon = icons[icon];
  const Component = link ? Link : 'button';
  const buttonType = link ? null : type;
  const destination = link || null;

  return (
    <Wrapper
      as={Component}
      to={destination}
      type={buttonType}
      onClick={onClick}
      className={className}
    >
      {children}
      {icon && (
        <IconWrapper>
          <Icon />
        </IconWrapper>
      )}
    </Wrapper>
  );
};

Button.propTypes = {
  /**
   * Contents of button.
   */
  children: PropTypes.node.isRequired,
  /**
   * className prop so we can use style this with styled components
   */
  className: PropTypes.string,
  /**
   * Icon for the button
   */
  icon: PropTypes.string,
  /**
   * Where should this button link to?
   */
  link: PropTypes.string,
  /**
   * Add an onClick handler to this button.
   */
  onClick: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.oneOf([null]),
  ]),
  /**
   * Theme name for this component.
   */
  theme: PropTypes.object.isRequired,
  /**
   * Type attribute to use for this component.
   */
  type: PropTypes.string,
};

Button.defaultProps = {
  className: '',
  icon: '',
  link: '',
  onClick: null,
  type: 'button',
};

export default withThemes(themeMap)(Button);
