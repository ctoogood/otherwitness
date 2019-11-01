import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import styled from 'styled-components'

const ArchiveList = styled.main `
  margin-top:2rem;
  margin-bottom:5rem;

  @media only screen and (min-width:1400px) {
    margin-left:-2rem;
  }


  .featured-grid {
    list-style-type:none;
    width:100%;
    font-family:Raleway;
    max-width:1400px;
    margin:auto;
  

  @media only screen and (min-width:640px) {
    display:grid;
    grid-template-columns: 5% 1fr 1fr 1fr;
    position:relative;
    left:-1rem;

    div {
      width:100%;
    }
    

    

  }

  

  h3, h4, h5 {
    font-family:Raleway;
    color:#707070;
    font-weight:normal;
    margin:0;
    margin-left:.5rem;
    margin-top:.5rem;
  }

  h3 {
    font-weight:bold;
    color:black;
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
    height:60vh;
    transition: transform 10s cubic-bezier(.35,.9,.5,1);

  }

  .image-container {
    width:100%;
    height:100%;
    overflow:hidden;
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

    .button-container {
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
      font-family:montserrat;
      margin-bottom:1rem;
      transition:all 0.3s ease-in-out;
    }
      
`

const BlogIndex = () => (
  <StaticQuery
    query={BLOG_POSTS_QUERY}
    render={({allMarkdownRemark}) => (
      <>
        <ArchiveList>
        <section className="featured-grid">
          <p>All Stories</p>
        {allMarkdownRemark.edges.map(edges => (
          
          <Link className="post-link" to={`/${edges.node.frontmatter.slug}`}>
          <section className="archive__list-item">
          <section className="text-container">
            <h3>{edges.node.frontmatter.title}</h3>
            <h4>{edges.node.frontmatter.subheading}</h4>
            <h5>{edges.node.frontmatter.date}</h5>
          </section>
          
          
          </section>
          </Link>

          
        ))}

                  </section>
                  {/*<Button><Link classname="button-container" to="/posts"><button>View All</button></Link></Button>*/}

        </ArchiveList>
      </>
    )}
  />
)


export default BlogIndex

const BLOG_POSTS_QUERY = graphql`
query blogquery {
	allMarkdownRemark(sort:{
    order: DESC,
    fields:[frontmatter___date]
  }) {
    edges {
      node {
        excerpt(pruneLength: 280)
        frontmatter {
          title
          subheading
          date(formatString: "MMMM DD, YYYY" )
          slug
        }
      }
    }
  }
}
`
