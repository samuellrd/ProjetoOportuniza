import styled from "styled-components";
import ImgRocket from "../../assets/images/imgs_touch.jpeg";

export const Header = styled.header`
  height: 100vh;
  background-image: url(${ImgRocket});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  color: #fff;
`;

export const Pages = styled.ul`
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 5vh 4vw;
  font-size: 1.5rem;
  gap: 30px;
`;

export const Container = styled.div`
  padding: 25vh 5vw;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  align-self: center;

  p {
    width: 20vw;
    font-size: 22px;
  }
`;

export const Title = styled.h2 `
  font-size: 4.2rem;
`

export const Button = styled.button `
 background-color: #004AAD;
 color: #FFF;
 font-weight: 600;
 width: fit-content;
 padding: 2vh 4vw;
 font-size: 18px;
 border-radius: 25px;
 border: none;
 margin-top: 5vh;
`
