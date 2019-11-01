import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"
import SEO from "./seo"

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
    max-height:75vh;
    background-color:#F1F1F1;
    border-bottom:0.5rem solid #AC6D6D;

  }

  .image {
    width:100%;
    max-height:75vh;
    margin:auto;
    border-bottom:0.5rem solid #AC6D6D;
  }

  .markdown {
    max-width:900px;
    margin:auto;
    padding:1rem;
  }

  blockquote {
    font-style:italic;
  }

`



export default ({data}) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <SEO title={post.frontmatter.title + post.frontmatter.subheading} />
    <PostContent>

      <section className="markdown">
        <h1>{post.frontmatter.title}</h1>
        <h2><span><em>{post.frontmatter.subheading}</em></span></h2>
        <h3>{post.frontmatter.date}</h3>
        <div dangerouslySetInnerHTML={{__html: post.html }} />
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
      }
    }
  }
`