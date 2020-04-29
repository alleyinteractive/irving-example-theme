import styled from 'styled-components';
import { rem } from '@irvingjs/styled/utils';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  > * {
    margin-bottom: ${(props) => rem(props.margin)};

    image-invalid {
      margin-bottom: 0;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
`;
