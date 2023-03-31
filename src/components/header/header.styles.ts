import styled from "styled-components";

export const MainNav=styled.nav`



 {
  /* Drop Down */
  /* Deep Drop Down */
}

,
 * {
  margin: 0;
  padding: 0;
  list-style: none;
}

 > ul > li {
  position: relative;
  white-space: nowrap;
  float: left;
}

 a {
  display: block;
  position: relative;
  color: #004289;
  padding: 10px 15px;
  transition: 0.3s;
  font-size: 14px;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
}

 a:hover,
 .active > a,
 li:hover > a {
  color: #007bff;
  text-decoration: none;
}

 .drop-down ul {
  display: block;
  position: absolute;
  left: 0;
  top: calc(100% + 30px);
  z-index: 99;
  opacity: 0;
  visibility: hidden;
  padding: 10px 0;
  background: #fff;
  box-shadow: 0px 0px 30px rgba(127, 137, 161, 0.25);
  transition: ease all 0.3s;
}

 .drop-down:hover > ul {
  opacity: 1;
  top: 100%;
  visibility: visible;
}

 .drop-down li {
  min-width: 180px;
  position: relative;
}

 .drop-down ul a {
  padding: 10px 20px;
  font-size: 13px;
  color: #004289;
}

 .drop-down ul a:hover,
 .drop-down ul .active > a,
 .drop-down ul li:hover > a {
  color: #007bff;
}

 .drop-down > a:after {
  content: "\f107";
  font-family: FontAwesome;
  padding-left: 10px;
}

 .drop-down .drop-down ul {
  top: 0;
  left: calc(100% - 30px);
}

 .drop-down .drop-down:hover > ul {
  opacity: 1;
  top: 0;
  left: 100%;
}

 .drop-down .drop-down > a {
  padding-right: 35px;
}

 .drop-down .drop-down > a:after {
  content: "\f105";
  position: absolute;
  right: 15px;
}

`

export const HeaderSection =styled.header`

    height: 80px;
    transition: all 0.5s;
    z-index: 997;
    transition: all 0.5s;
    padding: 20px 0;
    background: #fff;
    box-shadow: 0px 0px 30px rgba(127, 137, 161, 0.3);
  
  
  .header-scrolled,
  .header-pages {
    height: 60px;
    padding: 10px 0;
  }
  
   .logo h1 {
    font-size: 36px;
    margin: 0;
    padding: 0;
    line-height: 1;
    font-weight: 400;
    letter-spacing: 3px;
    text-transform: uppercase;
  }
  
   .logo h1 a,
   .logo h1 a:hover {
    color: #00366f;
    text-decoration: none;
  }
  
   .logo img {
    padding: 0;
    margin: 7px 0;
    max-height: 26px;
  }


  
`