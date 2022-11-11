import logo from "../assets/logo-cube.png";
import styled from "styled-components";
import menuMobile from "../assets/menu-home-mobile.png";
import { useState } from "react";
import MenuModal from "../components/MenuModal.jsx";

const Header = () => {
  const [estadoModal, cambiarEstadoModal] = useState(false);
  return (
    <div className="mt-3 mb-3 ">
      <header className="d-flex justify-content-between">
        <Logo>
          <img className="align-baseline" src={logo} alt="logo" />
          <div className="d-inline-block align-top mt-1 ps-1 ">
            <p className="mb-0 ">XZ</p>
            <p className="mb-0">Studio</p>
          </div>
        </Logo>
        <MenuHeaderMobile className="">
          <img onClick={cambiarEstadoModal} src={menuMobile} alt="" />
        </MenuHeaderMobile>
        <MenuModal estado={estadoModal} cambiarEstado={cambiarEstadoModal} />
      </header>
    </div>
  );
};

export default Header;

const Logo = styled.div`
  font-family: rubik;
  font-weight: 600;
  margin: 5px 30px;

  div {
    line-height: 14px;
  }
`;

const MenuHeaderMobile = styled.div`
  margin: 5px 30px;
  z-index: 100;
`;
