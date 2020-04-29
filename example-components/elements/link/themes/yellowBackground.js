import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { rem } from '@irvingjs/styled/utils';
import { colors, fonts } from 'styles/variables';
import Checkmark from 'assets/icons/checkmark.svg';

const StyledLink = styled.a`
  align-items: center;
  background-color: ${colors.yellow};
  color: ${colors.black};
  display: flex;
  font-family: ${fonts.montserrat};
  font-size: 1rem;
  font-weight: 700;
  height: 42px;
  justify-content: center;
  letter-spacing: ${rem(2.04)};
  padding: 0 1rem;
  text-decoration: none;
  text-transform: uppercase;
  transition: 250ms ease-in-out;

  &:hover {
    background-color: ${colors.grayLight};
    color: ${colors.white};

    svg {
      border-color: ${colors.white};
      stroke: ${colors.white};
    }
  }

  svg {
    border-radius: 50%;
    border: 2px solid ${colors.black};
    height: ${rem(10)};
    margin-right: ${rem(10)};
    padding: ${rem(2)};
    stroke: ${colors.black};
    width: ${rem(10)};
  }
`;

export const Wrapper = (props) => {
  const {
    children,
  } = props;

  return (
    <StyledLink
      {...props}
    >
      <Checkmark />
      {children}
    </StyledLink>
  );
};

Wrapper.propTypes = {
  /**
   * Child nodes
   */
  children: PropTypes.node.isRequired,
};
