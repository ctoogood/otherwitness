const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
exports.onCreateNode = ({ node, getNode, actions }) => {  
    const { createNodeField } = actions  
    if (node.internal.type === `MarkdownRemark`) {
        const slug = createFilePath({ node, getNode, basePath: `pages` })    
        createNodeField({      
            node,      
            name: `slug`,      
            value: slug,    
        })  
    }
}

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions
    return graphql(`
        {      
            allMarkdownRemark {
                edges {          
                    node {            
                        fields {              
                            slug            
                        }          
                    }       
                }      
            }    
        }  `
        ).then(result => {    
            result.data.allMarkdownRemark.edges.forEach(({ node }) => {      
                createPage({        
                    path: node.fields.slug,        
                    component: path.resolve(`./src/components/postLayout.js`),        
                    context: {                    
                        slug: node.fields.slug,        
                    },      
                }) 
                
                const posts = result.data.allMarkdownRemark.edges
                const postsPerPage = 9;
                const numPages = Math.ceil(posts.length / postsPerPage);

                Array.from({ length: numPages }).forEach((_, i) => {
                createPage({
                    path: i === 0 ? `/articles` : `/${i + 1}`,
                    component: path.resolve("./src/components/articlelist.js"),
                    context: {     
                        limit: postsPerPage,      
                        skip: i * postsPerPage,
                        numPages,      
                        currentPage: i + 1    }  });
                });

                Array.from({ length: numPages }).forEach((_, i) => {
                    createPage({
                        path: i === 0 ? `/hrjlinks` : `/${i + 1}`,
                        component: path.resolve("./src/components/linkslist.js"),
                        context: {     
                            limit: postsPerPage,      
                            skip: i * postsPerPage,
                            numPages,      
                            currentPage: i + 1    }  });
                    });
            }) 
        })
    }