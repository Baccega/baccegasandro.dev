import React from "react"
import { createUseStyles } from "react-jss"
import "../styles/bulma.scss"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Icon } from "./Icon"
import { useStaticQuery, graphql } from "gatsby"

const useStyles = createUseStyles(theme => ({
  root: {
    backgroundColor: theme.colorTertiary,
  },
  textContainer: {
    maxWidth: "500px",
  },
}))

const ContactMe = () => {
  const styles = useStyles()
  const staticData = useStaticQuery(graphql`
    query {
      allMdx(filter: { frontmatter: { position: { eq: "contactMe" } } }) {
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
    <section id="contactMe" className={`hero is-fullheight ${styles.root}`}>
      <div className={`hero-body`}>
        <div className={`container`}>
          <div className={styles.textContainer}>
            <MDXProvider
              components={{
                ul: props => <div {...props} className={styles.list} />,
                h1: props => (
                  <div className={styles.mainHeading}>
                    <h1 {...props} className={`title has-text-white`}>
                      {props.children}
                    </h1>
                  </div>
                ),
                h2: props => (
                  <div>
                    <h2 {...props} className={`subtitle has-text-light`}>
                      {props.children}
                    </h2>
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
    </section>
  )
}

export default ContactMe
