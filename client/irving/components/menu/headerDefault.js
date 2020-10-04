import styled from 'styled-components';
import { siteTheme } from '@irvingjs/styled/utils';

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  font-family: ${siteTheme('variants.irving/menu.headerDefault.fontFamily')};
  justify-content: flex-end;
  width: 100%;
`;

// Wrapper around the menu name.
export const NameWrapper = styled.h3`
  display: none;
`;

export const Inner = styled.ol`
  display: flex;
  list-style: none;
`;

export const ItemWrapper = styled.li`
  flex: 1 0 auto;
  padding: 0 1.625rem;

  a {
    color: white;
    font-size: 1rem;
    font-weight: normal;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;

export const Dropdown = styled.ol`
  display: none;
`;
