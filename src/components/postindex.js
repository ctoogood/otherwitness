import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import styled from 'styled-components'
import Img from "gatsby-image"

const ArchiveList = styled.main `
  margin-top:2rem;
  font-family:montserrat;
  
  @media only screen and (min-width:1400px) {
    margin-left:-2rem;
  }

  .featured-grid {
    list-style-type:none;
    margin-left:0;
    width:100%;
    max-width:1400px;
    margin:auto;
  

  @media only screen and (min-width:640px) {
    display:grid;
    grid-template-columns: 5% 1fr 1fr;
    position:relative;

    p {
      font-size:1.2rem;
    }

    div {
      width:100%;
    }

    

  }
  

  h3, h4, h5, h6 {
    color:#707070;
    font-weight:normal;
    margin:0;
    margin-left:.5rem;
    margin-top:.5rem;
  }

  h3 {
    color:black;
    font-size:2rem;
  }

  h4 {
    color:#AC6D6D;
    margin-top:.2rem;
  }

  hr {
    display: block;
    height: 1px;
    border: 0;
    border-top: 1px solid #ccc;
    margin: 1rem 1rem;
    padding: 0;
  }

  .archive__list-item {
    padding:1rem;
  }

  .text-container {

    color:#707070;

   

  }

  .post-image {
    position:relative;
    width:100%;
    height:40vh;
    transition: transform 10s cubic-bezier(.35,.9,.5,1);

  }

  .image-container {
    width:100%;
    height:100%;
    overflow:hidden;
    border-radius:4px;

    }

  p {
    color:#AC6D6D;
    padding-top:1rem;
    padding-left:1rem;
    margin-bottom:0;

      @media only screen and (min-width:640px) {
        writing-mode: vertical-rl;
        text-orientation:sideways;
      }
      
      
  }

  .post-link {
    text-decoration:none;

    &:hover .post-image {
      transform:scale(1.1);
    }
  }
`

const Button = styled.section `
    width:100%;
    text-align:center;
    margin-top:2rem;

    button {
      border: 1px solid #AC6D6D;
      padding: .1rem 1rem;
      margin-top: 1rem;
      color:#AC6D6D;
      text-decoration: none;
      background: none;
      font-size: 1rem;
      cursor: pointer;
      text-align: center;
      box-shadow: 0px 2px 2px rgba(0,0,0,0.1);
      margin-bottom:1rem;
      transition:all 0.5s ease-in-out;

      &:hover {
        color:white;
        background-color: #AC6D6D;
      }
    }
      
`

const FeaturedPost = () => (
  <StaticQuery
    query={FEATURED_POSTS_QUERY}
    render={({allMarkdownRemark}) => (
      <>
        <ArchiveList>
        <section className="featured-grid">
          <p>Featured Posts</p>
        {allMarkdownRemark.edges.map(edges => (
          
          <Link className="post-link" to={`/${edges.node.frontmatter.slug}`}>
          <section className="archive__list-item">
            <div className="image-container">
              <Img className="post-image" fluid={edges.node.frontmatter.featuredImage.childImageSharp.fluid} />
            </div>
          <section className="text-container">
            <h3>{edges.node.frontmatter.title}</h3>
            <h4>{edges.node.frontmatter.subheading}</h4>
            <h5>{edges.node.frontmatter.date}</h5>
            <h6>{edges.node.excerpt}</h6>
          </section>
          
          
          </section>
          </Link>

          
        ))}
                  </section>

                  <Button><Link classname="button-container" to="/articles"><button>View All</button></Link></Button>

        </ArchiveList>
      </>
    )}
  />
)


export default FeaturedPost

const FEATURED_POSTS_QUERY = graphql`
query postsquery {
  allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/articles/"}},
    limit:2 
    sort:{
    order: DESC,
    fields:[frontmatter___date]
  }) {
    edges {
      node {
        excerpt(pruneLength: 380)
        frontmatter {
          title
          subheading
          date(formatString: "MMMM DD, YYYY" )
          slug
          featuredImage {
            childImageSharp {
              fluid(maxWidth:900) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
}
`
