import React from 'react';
import PropTypes from 'prop-types';
import parseUrl from '@irvingjs/core/utils/getRelativeUrl';
import history from '@irvingjs/core/utils/history';
import omit from 'lodash/fp/omit';
import withThemes from '@irvingjs/styled/components/withThemes';
import themeMap from './themes/themeMap';

const Link = (props) => {
  const {
    to,
    icon,
    blank,
    onClick,
    children,
    theme,
  } = props;
  const relativeUrl = parseUrl(to);
  const defaultOnClick = (event) => {
    if (relativeUrl) {
      event.preventDefault();
      history.push(relativeUrl);
    }
  };

  const {
    Wrapper,
  } = theme;

  return (
    <Wrapper
      {...omit([
        'blank',
        'to',
        'componentGroups',
        'componentName',
      ], props)}
      href={relativeUrl || to}
      icon={icon}
      onClick={onClick || defaultOnClick}
      target={blank ? '_blank' : null}
      rel={blank ? 'noopener' : null}
    >
      {children}
    </Wrapper>
  );
};

Link.defaultProps = {
  blank: false,
  icon: '',
  onClick: false,
  theme: {},
};

Link.propTypes = {
  /**
   * Destination for anchor tag (`href` attribute)
   */
  to: PropTypes.string.isRequired,
  /**
   * Should this link open in a new page/tab?
   */
  blank: PropTypes.bool,
  /**
   * Child nodes
   */
  children: PropTypes.node.isRequired,
  /**
   * The icon for the link
   */
  icon: PropTypes.string,
  /**
   * OnClick function. NOTE: if provided, this will override
   * history push handling, so use with care.
   */
  onClick: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.bool,
  ]),
  /**
   * Theme for the component.
   */
  theme: PropTypes.object,
};

export default withThemes(themeMap)(Link);
