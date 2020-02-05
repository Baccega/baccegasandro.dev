import React from "react"
import { createUseStyles } from "react-jss"
import "../styles/bulma.scss"
import GridLayout from "../layouts/GridLayout"
import MaterialUiIcon from "../assets/icons/MaterialUiIcon"
import WorkCard from "../components/WorkCard"
import { useStaticQuery } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

const useStyles = createUseStyles(theme => ({
  whoAmI: {
    gridArea: "center",
    backgroundColor: theme.colorTertiary,
  },
  work: {
    gridArea: "left",
    backgroundColor: theme.colorPrimary,
  },
  personal: {
    gridArea: "right",
    backgroundColor: theme.colorSecondary,
  },
}))

const Homepage = () => {
  const styles = useStyles()

  const data = useStaticQuery(graphql`
    query {
      allMdx {
        nodes {
          frontmatter {
            company
            test
          }
          body
        }
      }
    }
  `)
  console.log(data)

  return (
    <GridLayout>
      <div className={styles.whoAmI}>WHO AM I</div>
      <div className={styles.work}>
        <WorkCard />
      </div>
      <div className={styles.personal}>
        <h1>{data.allMdx.nodes[0].frontmatter.company}</h1>
        <h1>{data.allMdx.nodes[0].frontmatter.test[0]}</h1>
        <MDXRenderer>{data.allMdx.nodes[0].body}</MDXRenderer>
      </div>
    </GridLayout>
  )
}

export default Homepage
