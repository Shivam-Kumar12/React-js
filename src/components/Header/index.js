import React from 'react'
import { PrimaryNav, MenuLink, Menu, Hamburger } from './Navbar'
const Navbar = () => {
  return (
    <>
      <PrimaryNav>
        <Hamburger />
        <Menu>
          <MenuLink to="/home" activeStyle>
            Home
          </MenuLink>
          <MenuLink to="/about" activeStyle>
            About
          </MenuLink>
          <MenuLink to="/Event" activeStyle>
            Event
          </MenuLink>
          <MenuLink to="/Contact" activeStyle>
            Contact
          </MenuLink>
        </Menu>
      </PrimaryNav>
    </>
  )
}
export default Navbar