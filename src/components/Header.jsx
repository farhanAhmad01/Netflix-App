import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  HeaderStyled,
  IconSide,
  LogoImg,
  NavSide,
  NavStyled,
} from "./styles/Header.styled";
import { FaSearch, FaGift, FaBell, FaBars } from "react-icons/fa";

const Header = () => {
  const [active, setActive] = useState(false);

  return (
    <>
      <HeaderStyled>
        <NavSide>
          <LogoImg src="/images/logo.png" alt="" />
          <NavStyled className={active ? "active" : null}>
            <NavLink
              className="navLink"
              exact
              activeClassName="activeNav"
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className="navLink"
              exact
              activeClassName="activeNav"
              to="/movies"
            >
              Movies
            </NavLink>
            <NavLink
              className="navLink"
              exact
              activeClassName="activeNav"
              to="/trending"
            >
              Trending
            </NavLink>
            <NavLink
              className="navLink"
              exact
              activeClassName="activeNav"
              to="/newpopular"
            >
              New & Popular
            </NavLink>
            <NavLink
              className="navLink"
              exact
              activeClassName="activeNav"
              to="/mylist"
            >
              MyList
            </NavLink>
          </NavStyled>
        </NavSide>
        <IconSide>
          <FaSearch />
          <p>DVD</p>
          <FaGift />
          <FaBell />
          <FaBars onClick={() => setActive((preVal) => !preVal)} />
        </IconSide>
      </HeaderStyled>
    </>
  );
};

export default Header;
