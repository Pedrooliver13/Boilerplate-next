import styled, { css } from 'styled-components';

export const Wrapper = styled.main`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
  `}

  transform: skewY(3deg);
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 4rem ;
  padding-bottom: 4rem ;

  transform: skewY(-3deg);
`;

export const Image = styled.img`
  padding-right: 4rem;
`

export const TextBlock = styled.div`
  display: flex;
  flex-direction: column;

  ${({ theme }) => css`
    color: ${theme.colors.texts};
  `}
`;

export const Title = styled.h2`
  border-left: 7px solid rgb(60, 211, 193);
  padding-left: 1rem;
`;

export const Text = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.medium};

    p {
      color: ${theme.colors.texts};
      margin-bottom: ${theme.spacings.small};
    }

    strong {
      border-bottom: 2px solid ${theme.colors.primary};
    }
  `}
`

