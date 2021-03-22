import styled from 'styled-components';
import * as C from 'styles/Contants';

import Container from 'components/Container';

export const ContainerWrapper = styled(Container)`
  padding-bottom: 0;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  @media (max-width: ${C.MD}) {
    justify-content: center;
    text-align: center;
  }
`;

export const Logo = styled.img`
  max-width: 100%;
  width: min(240px, 250px);
`;
