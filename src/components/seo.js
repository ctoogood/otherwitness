import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

function SEO({ description, lang, meta, image, keywords, title, pathname }) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const seoImage = `${data.site.siteMetadata.siteUrl}${image}`;
        const metaDescription = description || data.site.siteMetadata.description
        const pageUrl = `${data.site.siteMetadata.siteUrl}/${pathname || "/"}`

        return (
          <Helmet
            htmlAttributes={{
              lang,
            }}
            title={title}
            titleTemplate={`%s | ${data.site.siteMetadata.title}`}
            meta={[
              {
                name: `description`,
                content: metaDescription,
              },
              {
                property:`og:url`,
                content:pageUrl,
              },
              {
                property: `og:title`,
                content: title,
              },
              {
                property: `og:description`,
                content: metaDescription,
              },
              {
                property:`og:image`,
                content:seoImage,
              },
              {
                property:`og:image:width`,
                content:"1200"
              },
              {
                property:`og:image:height`,
                content:"630"
              },
              {
                property: `og:type`,
                content: `website`,
              },
              {
                name: `twitter:card`,
                content: `summary_large_image`,
              },
              {
                name: `twitter:creator`,
                content: data.site.siteMetadata.author,
              },
              {
                name: `twitter:title`,
                content: title,
              },
              {
                name: `twitter:description`,
                content: metaDescription,
              },
              {
                name: `twitter:image`,
                content: seoImage,
              },
            ]
              .concat(
                keywords.length > 0
                  ? {
                      name: `keywords`,
                      content: keywords.join(`, `),
                    }
                  : []
              )
              .concat(meta)}
          />
        )
      }}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: ["human rights", "news", "blog", "journalism", "links"],
  pathname: null,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  image: PropTypes.string,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
  pathname: PropTypes.string,
}

export default SEO

const detailsQuery = graphql`
query DefaultSEOQuery {
  site {
    siteMetadata {
      title
      description
      author
      image
      siteUrl
    }
  }
  file(relativePath: { eq: "owlogo.png" }) {
    childImageSharp {
      fluid(maxWidth: 2400) {
        src
      }
    }
  }
}
`