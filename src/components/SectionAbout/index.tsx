import Container from 'components/Container';

import * as Styled from './styles';

const SectionAbout = () => (
  <Styled.Wrapper>
    <Container>
      <Styled.Content>
        <Styled.Image src="/img/about.png" alt="Imagem ilustrativa do Site" />

        <Styled.TextBlock>
          <Styled.Title>Hello World</Styled.Title>

          <Styled.Text>
          <p>
              Iremos criar um e-commerce de jogos, incluindo toda a parte de
              pagamentos e área do cliente. Os clientes poderão fazer buscas,
              filtrar, adicionar ao carrinho e comprar seus jogos favoritos.
            </p>

            <p>
              Teremos também um <strong>CMS completamente customizado</strong>{' '}
              para que os administradores possam adicionar produtos, categorias,
              plataformas, criar promoções, editar partes do site, além de
              emails automatizados para às vendas de cada produto.
            </p>

            <p>
              Para criar tudo isso, iremos utilizar ferramentas muito famosas no
              mercado de trabalho, como ReactJS, Next, Apollo e outras coisas
              mais. Sempre prezando pela qualidade do código, ou seja, teremos{' '}
              <strong>testes em tudo!</strong>
            </p>
          </Styled.Text>
        </Styled.TextBlock>
      </Styled.Content>
    </Container>
  </Styled.Wrapper>
);

export default SectionAbout;
