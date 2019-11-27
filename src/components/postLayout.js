import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"
import SEO from "./seo"
import Img from "gatsby-image"

import twitterIcon from '../images/twitter.svg'
import fbIcon from '../images/facebook.svg'

const PostContent = styled.main `
  font-family:Montserrat;
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
    margin-bottom: 0.2rem;
    
  }

  .content {
    margin-top:3rem;

    h1 {
      margin-bottom:1.5rem;
      color:#707070;
      font-size:2rem;

    }

    p {
      line-height:1.5;
    }
  }

  .HrjLink {
    padding:1rem;
    margin:0;
    margin-bottom:3rem;
    box-shadow: 0px 2px 2px rgba(0,0,0,0.2);
    border-radius:5px;
    border-top:.5rem solid rgba(172,109,109,0.6);


    h2 {
      margin-bottom:0;
      color: #707070;
    }

    .hrjtitle {
      grid-area:header;
    }

    h1 {
      margin:0;
    }

    

    h3 {
      grid-area:subtitle;
      font-style:italic;
      margin-bottom:0.5rem;
    }

    div {
      grid-area:text;
      font-weight:bold;
      font-style:italic;
      margin-top:0rem;
      margin-bottom:2rem;

      span {
        font-weight:normal;
      }
    }

    p {
      grid-area:desc;
    }
    
    img {
      grid-area:img;
      object-fit:cover;
      max-height:100%;
    }

    a {
      text-decoration:none;
    }

    .readMore {
      grid-area:link;
      text-align:right;
    }

    @media only screen and (min-width:640px) {
      @supports(display:grid) {
        display:grid;
        grid-template-areas:
        "header header"
        "subtitle subtitle"
        "img desc"
        "img desc"
        "text text"
        ". link";

        padding:2rem;

        img {
          padding-right:0.5rem;
        }
      }
    }
  }

`

const ShareIcons = styled.section `
    width:100%;
    padding-bottom:2rem;
    
    h3 {
        text-align:center;
        font-family:playfair display;
        font-weight:400;
        font-size:2rem;
    }

    ul {
        margin:auto;
        text-align:center;


    }
    li {
        display:inline;
    }
    img {
        max-width:50px;
        margin-left:2rem;
        margin-right:2rem;
        margin-bottom:2rem;
    }
`
   




export default ({data}) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <SEO 
        title={post.frontmatter.title + ` - ` + post.frontmatter.subheading}
        image={post.frontmatter.featuredImage.childImageSharp.original.src}
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
    <ShareIcons>
        {/*<h3>Share</h3>
        <ul>
            <li>
                <a href={`https://www.facebook.com/sharer/sharer.php?u=https://www.johndory.uk/posts${post.frontmatter.slug}`} target="_blank" rel="noopener noreferrer">
                    <img src={fbIcon} alt="facebook" />
                </a>
            </li>
            <li>
                <a href={`https://twitter.com/intent/tweet/?text=${post.frontmatter.title}&url=https://www.johndory.uk/posts${post.frontmatter.slug}`} target="blank" rel="noopener noreferrer">
                    <img src={twitterIcon} alt="twitter" />
                </a>
            </li>
        </ul>*/}
    </ShareIcons>
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
            original {
              src
            }
            fluid(maxWidth:1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`