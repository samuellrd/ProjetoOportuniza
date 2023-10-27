import * as S from "./mainStyles";

export default function Explicando({fontSize}) {
  return (
    <S.Container>
      <S.Title fontSize={fontSize = '3rem'}>Sobre o Oportuniza</S.Title>
      <p>
        No Oportuniza, acreditamos que cada jovem é uma fonte infinita de
        possibilidades.
      </p>
      <p>
        Oferecemos oportunidades extracurriculares incríveis para ajudar você a
        crescer, aprender e se destacar. Junte-se a nós e descubra um mundo de
        experiências enriquecedoras que irão prepará-lo para o futuro.
      </p>
      <S.Button>ESCOLHA A SUA</S.Button>
    </S.Container>
  );
}
