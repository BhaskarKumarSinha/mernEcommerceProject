import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../../images/logo.png";
import { FaUserAlt } from "react-icons/fa";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";

const Header = () => {
  return (
    <ReactNavbar
      burgerColorHover="hsl(250, 100%, 75%)"
      logo={logo}
      logoWidth="20vmax"
      navColor1="white"
      logoHoverSize="10px"
      logoHoverColor="#eb4034"
      link1Text="Home"
      link2Text="Products"
      link3Text="Contact"
      link4Text="About"
      link1Url="/"
      link2Url="/products"
      link3Url="/contact"
      link4Url="/about"
      link1Size="1.3vmax"
      link1Color="rgba(35, 35, 35,0.8)"
      nav1justifyContent="flex-end"
      nav2justifyContent="flex-end"
      nav3justifyContent="flex-start"
      nav4justifyContent="flex-start"
      link1ColorHover="#eb4034"
      link1Margin="1vmax"
      profileIconUrl="/login"
      profileIcon={true}
      ProfileIconElement={FaUserAlt}
      profileIconColor="rgba(35, 35, 35,0.8)"
      searchIcon={true}
      SearchIconElement={AiOutlineSearch}
      searchIconColor="rgba(35, 35, 35,0.8)"
      cartIconColor="rgba(35, 35, 35,0.8)"
      profileIconColorHover="#eb4034"
      searchIconColorHover="#eb4034"
      cartIcon={true}
      cartIconColorHover="#eb4034"
      cartIconMargin="1vmax"
      CartIconElement={AiOutlineShoppingCart}
    />
  );
};

export default Header;
