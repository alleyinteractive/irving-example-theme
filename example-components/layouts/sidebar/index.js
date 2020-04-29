import React from 'react';
import PropTypes from 'prop-types';
import withThemes from '@irvingjs/styled/components/withThemes';
import themeMap from './themes/themeMap';

export const SidebarTemplate = (props) => {
  const {
    theme,
    children,
  } = props;
  const { Container } = theme;

  return (
    <Container {...props}>
      {children}
    </Container>
  );
};

SidebarTemplate.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  theme: PropTypes.object.isRequired,
  componentGroups: PropTypes.shape({
    content: PropTypes.arrayOf(PropTypes.element),
    sidebar: PropTypes.arrayOf(PropTypes.element),
  }).isRequired,
};

export default withThemes(themeMap)(SidebarTemplate);
