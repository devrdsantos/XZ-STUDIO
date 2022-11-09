import styled from "styled-components";
import Cancel from "../assets/cancel.png";
import rayasMoradas from "../assets/rayas-moradas.png";
const MenuModal = ({ estado, cambiarEstado }) => {
  return (
    <>
      {estado && (
        <Overlay>
          <ContenedorMenuMobile>
            <DivCancel>
              <img onClick={() => cambiarEstado(false)} src={Cancel} alt="" />
            </DivCancel>
            <ContenedorUlMobile>
              <p>Home</p>
              <ul>
                <li>¿Quienes somos?</li>
                <li>Nuestros Servicios</li>
                <li>Proyectos Realizados</li>
                <li>Contacto</li>
              </ul>
            </ContenedorUlMobile>
            <RayasMoradas src={rayasMoradas} alt="rayasmoradas" />
          </ContenedorMenuMobile>
        </Overlay>
      )}
    </>
  );
};

export default MenuModal;

const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 105;
`;

const ContenedorMenuMobile = styled.div`
  width: 60%;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  background: rgba(0, 0, 0);
`;

const DivCancel = styled.div`
  width: 100%;
  position: relative;

  img {
    position: absolute;
    top: 30px;
    right: 30px;
    color: white;
  }
`;

const ContenedorUlMobile = styled.div`
  p {
    color: #ce65ff;
    margin-top: 6rem;
    margin-bottom: 5rem;
    border-bottom: 2px solid #ce65ff;
    display: inline-block;
    margin-left: 2.2rem;
  }

  li {
    color: white;
    list-style: none;
    font-size: 16px;
    margin-bottom: 4rem;
  }
`;

const RayasMoradas = styled.img`
  position: absolute;
  bottom: 0;
  width: 100%;
`;
