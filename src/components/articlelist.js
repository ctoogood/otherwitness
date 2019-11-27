import React from "react"
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import Layout from "./layout";
import SEO from "./seo"




const Main = styled.main `
padding-top:1rem;


  
  hr {
    display: block;
    height: 1px;
    border: 0;
    border-top: 3px solid #707070;
    margin: 2em 2rem;
    padding: 0;
  }

  h2 {
    font-size:2rem;
    font-weight:bold;
    color:#5A5A5A;
    max-width:1000px;
    margin:auto;
   
  }

  h2 {
    overflow: hidden;
    text-align: center;
    padding-bottom:3rem;
    padding-top:1rem;

}
h2:before,
h2:after {
    background-color: #707070;
    content: "";
    display: inline-block;
    height: 1px;
    position: relative;
    vertical-align: middle;
    width: 50%;
}
h2:before {
    right: 0.5em;
    margin-left: -50%;
}
h2:after {
    left: 0.5em;
    margin-right: -50%;
}

 
`

const Post = styled.article`
        border-radius:3px;
        text-align:center;
        position:relative;
        overflow:hidden;
        transition:all .2s ease-in-out;
        margin-bottom:2rem;



        @media only screen and (min-width:720px) {
          margin-bottom:0;
        }

        &:first-child {
          grid-area:image1;
        }

        &:nth-child(2) {
          grid-area:image2;
        }

        &:nth-child(3) {
          grid-area:image3;
        }

        &:nth-child(4) {
          grid-area:image4;
        }

        &:nth-child(5) {
          grid-area:image5;
        }

        &:nth-child(6) {
          grid-area:image6;
        }

        &:nth-child(7) {
          grid-area:image7;
        }

        &:nth-child(8) {
          grid-area:image8;
        }

        &:nth-child(9) {
          grid-area:image9;
        }

        
        a {
            color:white;
            text-decoration:none;
        }
        h2 {
            margin-bottom:2px;
            font-weight:normal;
        }

        h3 {
          margin-bottom:5px;
          font-size:.9rem;
          font-weight:400;
          padding-top:.2rem;
        }

        h4 {
            font-weight:normal;
            font-family: Enjoying Life Alternates;
            margin-bottom:10px;
            font-size:2rem;
            line-height:1.5;
        }

        h5 {
          font-family:Third Storey;
          font-weight:normal;
        }

        p {
            font-size:0.8rem;
        }

        .post-image {
          height:300px;
          transition:all 2s linear;
          filter:opacity(0.9);
          
        }

        .image-container {
          overflow:hidden;
          width:100%;
          background-color:black;

          &:hover .post-image {
            transform:scale(1.02);
      
            }
        }

        .title-container {
          position:absolute;
          top:50%;
          left:50%;
          transform:translate(-50%, -50%);
          width:100%;
          border-radius:7px 7px 0px 0px;
          color:white;
          padding:.5rem;
        }
        
        
`

const PostsList = styled.div`
        max-width:1000px;
        margin:auto;

        @media only screen and (min-width:720px) {
            display:grid;
            grid-gap:1rem;
          }

        @media only screen and (min-width:720px) {
          grid-template-columns:1fr 1fr 1fr 1fr 1fr 1fr;
          grid-template-areas:
          "image1 image1 image1 image2 image2 image2"
          "image3 image3 image4 image4 image5 image5"
          "image6 image6 image6 image7 image7 image7"
          "image8 image8 image8 image9 image9 image9";
          
      }

     
`
const NavContainer = styled.div `
        position:relative;
        width:100%;
        height:4rem;
        padding-top:1rem;
        
`

const NextPage = styled(Link) `
        color:#6d6b79;
        text-decoration:none;
        position:absolute;
        right:0;
        margin-right:1rem;
`
const PrevPage = styled(Link) `
       color:#6d6b79;  
       text-decoration:none;
        position:absolute;
        left:0;
        margin-left:1rem;
`
const PageNum = styled.div `
        position:absolute;
        right:50%;

        li {
          list-style-type:none;
          display:inline;
        }

        .page-numbers {
          color:#6d6b79;
          text-decoration:none;
          padding:.5rem;
        }
`


class ArticleList extends React.Component {

  
  render( ) {

    const posts = this.props.data.allMarkdownRemark.edges
    const { currentPage, numPages } = this.props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? "/" : (currentPage - 1).toString()
    const nextPage = (currentPage + 1).toString()

    return (
      <Layout>
     <SEO title="Home" />
        <Main>
        <h2>ALL ARTICLES</h2>
        <PostsList>
          
        {posts.map(({ node }) => {
          return (
          <Post key={node.frontmatter.slug} >
          <Link to={`/posts${node.frontmatter.slug}`}>

          <div className="image-container">
              <Img className="post-image" fluid={node.frontmatter.featuredImage.childImageSharp.fluid} />
          </div>
          
          
          </Link>
      </Post>
          )
        })}
        </PostsList>
        <NavContainer>
        <PageNum>
        {Array.from({ length: numPages }, (_, i) => (
            <li
              key={`pagination-number${i + 1}`}
              style={{
                margin: 0,
              }}
            >
              <Link className='page-numbers'
                to={`/${i === 0 ? '' : i + 1}`}
                style={{
                  textDecoration: i + 1 === currentPage ? 'underline' : '',

                }}
              >
                {i + 1}
              </Link>
</li>
      ))}
      </PageNum>
        {!isFirst && (
        <PrevPage to={prevPage} rel="prev">
          ← Previous Page
        </PrevPage>
      )}
      {!isLast && (
        <NextPage to={nextPage} rel="next">
          Next Page →
        </NextPage>
      )}
      </NavContainer>
  </Main>
  </Layout>

    )}}

export default ArticleList


export const pageQuery = graphql`
  query ListingQuery ($skip: Int!, $limit: Int!) {
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/articles/"}},
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            slug
            featuredImage {
              childImageSharp {
                fluid(maxWidth:1600) {
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

