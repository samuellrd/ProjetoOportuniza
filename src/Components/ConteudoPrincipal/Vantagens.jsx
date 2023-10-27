import * as S from "./mainStyles";

export default function Vantagens({
  width,
  height,
  flexDirection,
  imgWidth,
  imgHeight,
  borderRadius,
  alignItems,
  fontSize,
  fontWeight,
  textWidth,
  backgroundColor,
  ...props
}) {
  return (
    <S.Caixa backgroundColor={backgroundColor} width={width} height={height} flexDirection={flexDirection}>
      <S.Img
        imgWidth={imgWidth}
        imgHeight={imgHeight}
        borderRadius={borderRadius}
        src={props.imagemSrc}
        alt={props.imagemAlt}
      />
      <S.Box alignItems={alignItems}>
        <S.Title fontSize={fontSize} fontWeight={fontWeight}>
          {props.titulo}
        </S.Title>
        <S.Text textWidth={textWidth}>{props.texto}</S.Text>
      </S.Box>
    </S.Caixa>
  );
}
