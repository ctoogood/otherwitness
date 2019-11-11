import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import title from'../images/other-witness-title.svg'
import { Link } from "gatsby";

const PageTitle = styled.div `
  height:5rem;
  margin-left:.5rem;


  .home-link {
    text-decoration:none;
    color:#775151;
  }
  .home-link:hover {
    opacity:.7;
  }
  .first-letter {
    font-size:3rem;
  }

  @media only screen and (min-width:720px) {
  }

  img {
    height:100%;
    margin:auto;
    padding-top:.5rem;
    margin-bottom:0;
  }

  @media only screen and (max-width:640px) {
    text-align:center;
    width:100%;
  }
`

const HeaderMain = styled.section `
  width: 100%;
  box-shadow: 0px 2px 2px rgba(0,0,0,0.1);
  padding:.5rem;
  padding-top:0;
  border-top:1rem solid #AC6D6D;
  display:flex;
  position:sticky;
  top:0;
  z-index:1;
  background-color:white;

  .title-links {
    display:inline;
    text-align:right;
    width:100%;
    height:100%;
    position:relative;
    top:3rem;
    li {
      display:inline;
      margin-right:2.5rem;
      font-family:raleway;
      font-weight:lighter;
    }

    @media only screen and (max-width:640px) {
      display:none;
    }
`

const Header = ({ siteTitle }) => (
  <HeaderMain>
    <PageTitle>
      <Link to="/">
        <img src={title} alt='Other Witness'/>
      </Link>
    </PageTitle>
    {/*<ul className="title-links">
      <li>Stories</li>
      <li>About</li>
      <li>Contact</li>
</ul>*/}
  </HeaderMain>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
