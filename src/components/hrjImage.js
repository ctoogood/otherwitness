import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from 'styled-components'


const Header = styled.header `
  max-width:1000px;
  margin:auto;
`


const HeaderImage = () => (
  <StaticQuery
  query={graphql`
  query {
    placeholderImage: file(relativePath: { eq: "hrjlinks.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`}
render={data => 
<Header>
  <Img fluid={data.placeholderImage.childImageSharp.fluid} />
</Header>
}
/>
)
export default HeaderImage
