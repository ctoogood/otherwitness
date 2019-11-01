import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import FeaturedPosts from "../components/postindex"
import About from "../components/about"
import BlogIndex from "../components/blogindex";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <FeaturedPosts />
    <About />
    <BlogIndex />
  </Layout>
)

export default IndexPage
