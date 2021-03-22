import Button from 'components/Button';

import { Container } from 'components/Container/styles';
import * as Styled from './styles';

const onClick = () => alert('Hello World');

const SectionHero = () => {
  return (
    <Styled.Wrapper>
      <Container>
        <Styled.Content>
          <Styled.TextBlock>
            <Styled.Title>React Avançado</Styled.Title>
            <Styled.Description>
              Crie aplicações reais com NextJS, Strapi, GraphQL e mais!
            </Styled.Description>

            <Button
              href="https://www.udemy.com/course/react-avancado/?couponCode=PROMOMAR21"
              onClick={onClick}
              wide
            >
              Comprar
            </Button>
          </Styled.TextBlock>

          <Styled.Image
            src="./img/hero-illustration.svg"
            alt="Dev olhando para uma tela com código"
          />
        </Styled.Content>
      </Container>
    </Styled.Wrapper>
  );
};

export default SectionHero;
