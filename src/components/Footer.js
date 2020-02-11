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
      allMdx(filter: { frontmatter: { position: { eq: "footer" } } }) {
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
      <div className={styles.footerContainer} {...props}>
        <MDXProvider
          components={{
            p: props => <p {...props} />,
            img: props => (
              <div className={styles.icon}>
                <Icon {...props} />
              </div>
            ),
          }}
        >
          <MDXRenderer>{body}</MDXRenderer>
        </MDXProvider>
      </div>
    </footer>
  )
}

export default Footer
