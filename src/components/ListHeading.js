import React from "react"
import { createUseStyles } from "react-jss"
import "../styles/bulma.scss"
import { useStaticQuery } from "gatsby"

const useStyles = createUseStyles(theme => ({
  root: {
    color: theme.color,
    marginBottom: "0.5rem",
    paddingLeft: "1.5rem",
  },
}))

const ListHeading = ({ headerLocation }) => {
  const staticData = useStaticQuery(graphql`
    query {
      allMdx(filter: { frontmatter: { type: { eq: "general" } } }) {
        edges {
          node {
            frontmatter {
              type
              right_list_heading
              left_list_heading
            }
          }
        }
      }
    }
  `)
  const styles = useStyles()
  const heading = staticData.allMdx.edges[0].node.frontmatter
  return (
    <h1 className={`${styles.root} title`}>
      {headerLocation === "right"
        ? heading.right_list_heading
        : heading.left_list_heading}
    </h1>
  )
}

export default ListHeading
