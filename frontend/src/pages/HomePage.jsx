import Header from "../components/Header.jsx";
import manchaTop from "../assets/mancha-top.png";
import manchaRight from "../assets/mancha-right.png";
import rayasMobile from "../assets/rayas-mobile.png";
import flechasDown from "../assets/flechas-down.png";
import imgLogoMain from "../assets/img-logo-main.png";
import styled from "styled-components";

const HomePage = () => {
  return (
    <HomePageDiv>
      <Header />
      <Main>
        <div className="position-relative">
          <p className="position-absolute ps-4 pb-4 pt-3">
            ¿Querés tener tu propio sitio web?
          </p>
          <img id="rayasMobile" src={rayasMobile} alt="rayasMobile" />
          <img
            id="flechasdown"
            className="position-absolute"
            src={flechasDown}
            alt=""
          />
        </div>
      </Main>
      <img
        id="manchatop"
        className="position-absolute"
        src={manchaTop}
        alt="manchatop"
      />
      <img
        id="mancharight"
        className="position-absolute"
        src={manchaRight}
        alt="mancharight"
      />
    </HomePageDiv>
  );
};

export default HomePage;

const HomePageDiv = styled.div`
  #manchatop {
    top: -60px;
    left: 138px;
    z-index: 1;
  }

  #mancharight {
    right: 0px;
    top: 120px;
    z-index: 1;
  }
`;

const Main = styled.div`
  margin-top: 1.5rem;
  p {
    font-family: Roboto;
    font-size: 28px;
    font-weight: 900;
    z-index: 3;
    width: 55%;
    text-align: center;
    color: black;
    line-height: 32px;
  }

  #rayasMobile {
    z-index: 0;
  }

  #flechasdown {
    top: 110px;
    left: 55px;
  }
`;
