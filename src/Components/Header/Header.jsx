import * as S from "./HeaderStyle";

export default function Header() {
  return (
    <S.Header>
      <nav>
        <S.Pages>
          <li>Curso Speaking</li>
          <li>Oportuiza</li>
        </S.Pages>
      </nav>
      <S.Container>
        <S.Title>Oportuniza</S.Title>
        <p>A oportunidade que você procura está aqui!</p>
        <S.Button >SOBRE</S.Button>
      </S.Container>
    </S.Header>
  );
}
