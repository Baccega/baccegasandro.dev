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
  list: {
    display: "grid",
    gridTemplateColumns: "auto auto",
    gridTemplateRows: "auto",
    alignItems: "center",
    gridRowGap: "15px",
    gridColumnGap: "15px",
  },
  mainHeading: {
    paddingLeft: "30px",
    paddingBottom: "20px",
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
                ul: props => <div {...props} className={styles.list} />,
                h1: props => (
                  <div className={styles.mainHeading}>
                    <h1 {...props} className={`title has-text-white`} />
                  </div>
                ),
                h2: props => (
                  <div>
                    <h2 {...props} className={`subtitle has-text-light`} />
                  </div>
                ),
                p: props => <p {...props} />,
                img: props => (
                  <div>
                    <Icon {...props} />
                  </div>
                ),
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
