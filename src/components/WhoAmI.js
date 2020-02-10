import React from "react"
import "../styles/bulma.scss"
import { MDXProvider } from "@mdx-js/react"
import { graphql, useStaticQuery } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { createUseStyles } from "react-jss"
import { Icon } from "./Icon"

const useStyles = createUseStyles(theme => ({
  root: {
    backgroundColor: theme.colorSecondary,
  },
  textContainer: {
    maxWidth: "500px",
  },
}))

export default function WhoAmI(props) {
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
    <header className={`hero is-large ${styles.root}`}>
      <div className={`hero-body`}>
        <div className={`container`}>
          <div className={styles.textContainer}>
            <MDXProvider
              components={{
                table: props => <div {...props} />,
                hr: props => null,
                h1: props => (
                  <h1 {...props} className={`title has-text-white`} />
                ),
                h2: props => (
                  <h2 {...props} className={`subtitle has-text-light`} />
                ),
                p: props => <p {...props} />,
                img: props => <Icon {...props} />,
              }}
            >
              <MDXRenderer>{body}</MDXRenderer>
            </MDXProvider>
          </div>
        </div>
      </div>
    </header>
  )
}
