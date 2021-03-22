import styled from 'styled-components';
import * as C from 'styles/Contants';

export const Wrapper = styled.section`
  margin: 10rem auto;
  & > :first-child {
    padding-top: 1rem;
  }

  @media (max-width: ${C.MD}) {
    margin: initial;

    & > :first-child {
    padding-top: 0;
  }
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-top: 0;

  @media (max-width: ${C.MD}) {
    flex-direction: column;
  }
`;

export const TextBlock = styled.div`
  margin: initial;
  padding-right: 3.2rem;
  line-height: 3.5rem;
  max-width: 60rem;

  @media (max-width: ${C.MD}) {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-right: initial;
    margin-bottom: 4rem;
  }
`;

export const Title = styled.h1`
  font-size: min(5.2rem, 5vw);
  font-weight: 600;

  @media (max-width: ${C.MD}) {
    display: none;
  }
`;

export const Description = styled.h2`
  font-size: min(3.4rem, 3vw);
  font-weight: 400;
  padding-top: 3.2rem;
  margin-bottom: 5rem;

  @media (max-width: ${C.MD}) {
    font-size: 2rem;
    text-align: center;
    justify-content: center;
  }
`;

export const Image = styled.img`
  width: min(45rem, 100%);
  margin: 0px;

  @media (max-width: ${C.MD}) {
    width: 25rem;
  }
`;
