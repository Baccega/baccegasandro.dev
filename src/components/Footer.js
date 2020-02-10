import React from "react"
import { createUseStyles } from "react-jss"
import { useStaticQuery, graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Icon } from "./Icon"

const useStyles = createUseStyles(theme => ({
  footer: {
    gridArea: "footer",
    display: "flex",
    justifyContent: "center",
    fontSize: "0.9rem",
    color: theme.color,
    backgroundColor: theme.colorSecondary,
  },
  copyrightIcon: {
    margin: {
      left: "0.5em",
      right: "0.5em",
    },
  },
  footerContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "0.5em",
    marginRight: "0.5em",
  },
}))

const Footer = props => {
  const styles = useStyles()
  const staticData = useStaticQuery(graphql`
    query {
      allMdx(filter: { frontmatter: { type: { eq: "general" } } }) {
        edges {
          node {
            body
          }
        }
      }
    }
  `)
  const body = staticData.allMdx.edges[0].node.body

  return (
    <footer className={styles.footer}>
      <MDXProvider
        components={{
          table: props => null,
          p: props => <p {...props} />,
          hr: props => <div className={styles.footerContainer} {...props} />,
          img: props => (
            <div className={styles.icon}>
              <Icon {...props} />
            </div>
          ),
          h1: props => <h1 {...props} className={`title has-text-white`} />,
          h2: props => <h2 {...props} className={`subtitle has-text-light`} />,
        }}
      >
        <MDXRenderer>{body}</MDXRenderer>
      </MDXProvider>
    </footer>
  )
}

export default Footer
