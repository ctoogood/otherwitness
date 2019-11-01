import React, { Component } from 'react'
import styled from "styled-components"

const AboutMain = styled.section `
    font-family:Raleway;
    max-width:1200px;
    margin:auto;
    margin-top:3rem;
    margin-bottom:5rem;
    font-size:2rem;
    line-height:1.5;
    text-align:center;
    color:#253A46;

    @media only screen and (min-width:640px) {
        font-size:2.5rem;
    }

    p {
        padding:1.5rem;
        font-weight:lighter;
    }

    hr {
        display: block;
        height: 1px;
        border: 0;
        border-top: 1px solid #ccc;
        margin: 1rem 1rem;
        padding: 0;
    }
`

export default class About extends Component {
    render() {
        return (
            <AboutMain>
                <hr />
                    <p><b>Other Witness</b> is a collection of links to great & insightful human rights journalism from across the web.  The site also features writings based around the theme of international human rights.  </p>
                <hr />
            </AboutMain>
        )
    }
}
