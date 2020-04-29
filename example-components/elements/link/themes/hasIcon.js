import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { rem } from '@irvingjs/styled/utils';
import { colors, fonts } from 'styles/variables';
// svg icons
import email from 'assets/icons/email.svg';
import globe from 'assets/icons/globe.svg';
import mapPin from 'assets/icons/map-pin.svg';
import phone from 'assets/icons/phone.svg';
import user from 'assets/icons/user.svg';

const icons = {
  email,
  globe,
  mapPin,
  phone,
  user,
};

const StyledLink = styled.a`
  align-items: center;
  color: ${colors.grayDark};
  display: flex;
  font-family: ${fonts.montserrat};
  font-size: ${rem(14)};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  svg {
    margin-right: ${rem(20)};
    width: ${rem(16)};
    width: ${rem(16)};

    path {
      fill: ${colors.gray};
      stroke: ${colors.gray};
    }
  }
`;

export const Wrapper = (props) => {
  const {
    icon,
    children,
  } = props;

  const Icon = icons[icon];

  return (
    <StyledLink
      {...props}
    >
      <Icon />
      {children}
    </StyledLink>
  );
};

Wrapper.propTypes = {
  /**
   * Child nodes
   */
  children: PropTypes.node.isRequired,
  /**
   * The icon for the link
   */
  icon: PropTypes.string.isRequired,
};
