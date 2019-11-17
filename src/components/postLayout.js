import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"
import SEO from "./seo"
import Img from "gatsby-image"

const PostContent = styled.main `
  font-family:Raleway;
  color:#707070;

  a {
    color:#AC6D6D;
  }

  h1,h2,h3 {
    font-family:inherit;
    color:black;

    span {
      color:#AC6D6D;
    }
  }

  h1 {
    margin-bottom:5px;
    margin-top:2rem;
  }

  h3 {
    color:#707070;
    font-weight:normal;
    margin-left:.2rem;
  }

  .image-container {
    height:100%;
    background-color:#F1F1F1;
  }

  .post-image {
    width:100%;
    max-height:50vh;
    margin:auto;
  }

  .markdown {
    max-width:900px;
    margin:auto;
    padding:1rem;
  }

  blockquote {
    font-style:italic;
  }

  h1 {
    margin-bottom: 3rem;
    text-decoration:underline;
    
  }

  .HrjLink {
    padding:.5rem;
    margin:0;
    margin-bottom:3rem;
    box-shadow: 0px 2px 2px rgba(0,0,0,0.2);
    border-radius:5px;
    border-top:.5rem solid rgba(172,109,109,0.6);


    h2 {
      grid-area:header;
      margin-bottom:0;
      color: #707070;
    }

    

    h3 {
      grid-area:subtitle;
      font-style:italic;
      margin:0rem;
      margin-bottom:0.5rem;
    }

    p {
      grid-area:desc;
    }
    
    img {
      grid-area:img;
      object-fit:cover;
      height:100%;
    }

    a {
      grid-area:link;
      text-align:right;
      font-weight:bold;
    }

    @media only screen and (min-width:640px) {
      @supports(display:grid) {
        display:grid;
        grid-template-areas:
        "header header"
        "subtitle subtitle"
        "text text"
        "img desc"
        "img link";
        padding:2rem;

        img {
          padding-right:0.5rem;
        }
      }
    }
  }

`
   




export default ({data}) => {
  const post = data.markdownRemark
  const ogImagePath = post.frontmatter.featuredImage

  return (
    <Layout>
      <SEO 
        title={post.frontmatter.title + ` - ` + post.frontmatter.subheading}
        image={ogImagePath}
        description={post.frontmatter.description}/>
    <PostContent>

      <section className="markdown">
        <div className="image-container">
          <Img className="post-image" fluid={post.frontmatter.featuredImage.childImageSharp.fluid} />
        </div>
        <h1>{post.frontmatter.title}</h1>
        <h2><span><em>{post.frontmatter.subheading}</em></span></h2>

        <h3>{post.frontmatter.date}</h3>
        <div className="content" dangerouslySetInnerHTML={{__html: post.html }} />
      </section>
    </PostContent>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY" )
        subheading
        description
        featuredImage {
          childImageSharp {
            fluid(maxWidth:1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`