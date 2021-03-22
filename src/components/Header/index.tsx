import * as Styled from './styles';

const Header = () => {
  return (
    <header>
      <Styled.ContainerWrapper>
        <Styled.Content>
          <Styled.Logo
            src="./img/logo.svg"
            alt="Imagem de um átomo, com React Avançado escrito ao lado"
          />
        </Styled.Content>
      </Styled.ContainerWrapper>
    </header>
  );
};

export default Header;
