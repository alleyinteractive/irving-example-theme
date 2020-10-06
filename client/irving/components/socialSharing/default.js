import styled from 'styled-components';
import { siteTheme } from '@irvingjs/styled/utils';

export const SocialSharingWrapper = styled.div``;
export const SocialSharingList = styled.ul``;

export const SocialSharingItemWrapper = styled.li`
  background: red;
  border-radius: 50%;
  display: inline-block;
  margin-right: .5rem;
  padding: .8rem;
  height: 48px;
  width: 48px;

  &.facebook {
    background: ${siteTheme('colors.social.facebook')};
  }

  &.twitter {
    background: ${siteTheme('colors.social.twitter')};
  }

  &.email {
    background: ${siteTheme('colors.social.email')};
  }
`;

export const IconWrapper = styled.span`
  a {
    align-items: center;
    display: flex;
    justify-items: center;
  }

  svg {
    color: white;
    height: 1.2rem;
    width: 1.2rem;
  }
`;
