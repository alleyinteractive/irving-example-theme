import styled from 'styled-components';
import { siteTheme } from '@irvingjs/styled/utils';

/* eslint-disable import/prefer-default-export */
export const Wrapper = styled.div`
  display: flex;
  font-family: ${siteTheme('header.fontFamily')};
  flex-direction: column;
  width: 100%;
`;

// Wrapper around the menu name.
export const NameWrapper = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  padding-bottom: 1rem;
`;

export const Inner = styled.ol`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const ItemWrapper = styled.li`
  flex: 1 0 auto;
  margin-bottom: 0.2rem;
  padding: 0;

  a {
    color: white;
    display: block;
    font-size: 1rem;
    padding: 0 0 0.5rem 0;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;

export const Dropdown = styled.ol`
  display: none;
`;
/* eslint-enable */
