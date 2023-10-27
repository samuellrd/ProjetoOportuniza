import Explicando from "./Explicandoi";
import Vantagens from "./Vantagens";
import imgOne from "../../assets/images/globo.png";
import imgTwo from "../../assets/images/twoHands.png";
import imgThree from "../../assets/images/hand.png";
import imgFour from "../../assets/images/loading.png";
import imgFive from "../../assets/images/premios.jpg";
import imgSix from "../../assets/images/extracurriculando.jpg";
import imgSeven from "../../assets/images/oportunidadesGeral.jpg";
import * as S from "./mainStyles";

export default function Main() {
  return (
    <main>
      <S.Section>
        <Explicando />
        <S.Vantagens>
          <Vantagens
            imagemSrc={imgOne}
            imagemAlt=""
            titulo="Inclusão"
            texto="Acreditamos que todas as crianças e jovens têm o direito de acesso a oportunidades educacionais enriquecedoras, independentemente de seu contexto."
          />
          <Vantagens
            imagemSrc={imgTwo}
            imagemAlt=""
            titulo="Colaboração"
            texto="Valorizamos a parceria com escolas, voluntários, famílias e a comunidade em geral para criar um ambiente de aprendizado enriquecido."
          />
          <Vantagens
            imagemSrc={imgThree}
            imagemAlt=""
            titulo="Empoderamento"
            texto="Buscamos capacitar os jovens a explorar seu potencial máximo por meio de atividades extracurriculares que ampliam seus horizontes.."
          />
          <Vantagens
            imagemSrc={imgFour}
            imagemAlt=""
            titulo="Redução das desigualdades"
            texto="través do aceso a oportunidades buscamos diminuir as desigualdades e alcançar um mundo ais equilitario."
          />
        </S.Vantagens>
      </S.Section>
      <S.Section backColor="blue" justify="center" flexDirection="column">
        <S.TitleTwo>Escolha o seu!</S.TitleTwo>
        <S.Caixa>
          <Vantagens
            backgroundColor="#FFF"
            alignItems="center"
            width="20vw"
            height="55vh"
            flexDirection="column"
            fontSize="1.2rem"
            imgWidth="18vw"
            imgHeight="25vh"
            borderRadius="10px"
            imagemSrc={imgFive}
            imagemAlt=""
            titulo="PRÊMIOS"
            texto="Vem ver os prêmios que você pode concorrer!"
            textWidth="10vw"
          />
          <Vantagens
            backgroundColor="#FFF"
            alignItems="center"
            width="20vw"
            height="55vh"
            flexDirection="column"
            fontSize="1.2rem"
            imgWidth="18vw"
            imgHeight="25vh"
            borderRadius="10px"
            imagemSrc={imgSix}
            imagemAlt=""
            titulo="EXTRACURRICULARES"
            texto="Para dar um boost no seu currículo!"
            textWidth="10vw"
          />
          <Vantagens
            backgroundColor="#FFF"
            alignItems="center"
            width="20vw"
            height="55vh"
            flexDirection="column"
            fontSize="1.2rem"
            imgWidth="18vw"
            imgHeight="25vh"
            borderRadius="10px"
            imagemSrc={imgSeven}
            imagemAlt=""
            titulo="OPORTUNIDADES NO GERAL"
            texto="De Summer Programs à bolsas de estudo!"
            textWidth="10vw"
          />
        </S.Caixa>
      </S.Section>
    </main>
  );
}
