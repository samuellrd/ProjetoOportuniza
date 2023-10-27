import styled from "styled-components";

export const Section = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: ${(props) => props.flexDirection || "row"};
  align-items: center;
  justify-content: ${(props) => props.justify};
  background-color: ${props => props.backColor || '#FFF'};
`;

export const Container = styled.div`
  padding: 0 0 10vh 10vw;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  align-self: center;
  gap: 4vh;

  p {
    width: 29vw;
    font-size: 1.3rem;
  }
`;

export const Title = styled.h6`
  /* font-size: 3rem; */
  font-weight: ${(props) => props.fontWeight};
  font-size: ${(props) => props.fontSize || "1.8rem"};
  text-align: center;
`;

export const Button = styled.button`
  background-color: #004aad;
  color: #fff;
  font-weight: 600;
  width: fit-content;
  padding: 2vh 4vw;
  font-size: 18px;
  border-radius: 25px;
  border: none;
  margin-top: 5vh;
`;

/////////////////////////////////////////////////

export const Vantagens = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4vh;
  padding: 15vh 0 0 5vw;
`;

export const Caixa = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  display: flex;
  flex-direction: ${(props) => props.flexDirection || "row"};
  align-items: center;
  gap: 5px;
  background-color: ${props => props.backgroundColor || 'transparent'};
`;

export const Img = styled.img`
  width: ${(props) => props.imgWidth || "7.69vw"};
  height: ${(props) => props.imgHeight || "15.17vh"};
  border-radius: ${(props) => props.borderRadius || "50px"};
  background-color: #004aad;
`;

export const Box = styled.div`
  display: flex;
  height: 12vh;
  flex-direction: column;
  align-items: ${(props) => props.alignItems || "left"};
  justify-content: center;
`;

export const Text = styled.p`
  width: ${(props) => props.textWidth || '30vw'};
  font-size: 0.9rem;
  text-align: center;
`;

export const TitleTwo = styled.p `
  font-size: 3rem;
  color: #FFF;
  font-weight: bold;
`
