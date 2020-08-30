import React from "react"
import styled from "styled-components"
import Logo from "../../images/logo.svg"

const Navbar = () => {
  return (
    <NavWrapper>
      <div className="masthead flex-container">
        <img src={Logo} alt="StablePay logo" />
      </div>
    </NavWrapper>
  )
}

const NavWrapper = styled.nav`
  position: fixed;
  z-index: 10;
  top: 0;
  width: 100%;
  left: 0;
  right: 0;
  display: flex;
  padding: 1rem;
  box-sizing: border-box;

  .masthead {
    z-index: 3;
    width: 100%;
    justify-content: space-between;

    img {
      width: 90px;

      @media (min-width: 768px) {
        width: 100px;
      }

      @media (min-width: 1200px) {
        width: 120px;
      }
    }
  }
`

export default Navbar
