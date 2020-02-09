import React from "react"
import { createUseStyles } from "react-jss"
import "../styles/bulma.scss"
import { GridLayout, GridListLayout } from "../layouts/GridLayout"
import MaterialUiIcon from "../assets/icons/MaterialUiIcon"
import WorkCard from "../components/WorkCard"
import { useStaticQuery } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import WhoAmI from "../components/WhoAmI"
import ExperienceCard from "../components/ExperienceCard"

const useStyles = createUseStyles(theme => ({
  whoAmI: {
    gridArea: "center",
    backgroundColor: theme.colorSecondary,
  },
  list: {
    gridArea: "list",
    backgroundColor: theme.colorSecondary,
  },
  work: {
    gridArea: "left",
    backgroundColor: theme.colorPrimary,
    padding: 20,
  },
  personal: {
    gridArea: "right",
    padding: 20,
    backgroundColor: theme.colorPrimary,
  },
  divider: {
    gridArea: "divider",
    position: "relative",
    backgroundColor: theme.colorPrimary,
    height: "100%",
    paddingLeft: 5,
    paddingRight: 5,
    display: "flex",
    alignItems: "center",
  },
  bar: {
    borderRadius: 10,
    border: `1px solid ${theme.color}`,
    height: "calc(100% - 40px)",
    position: "absolute",
  },
}))

const Divider = () => {
  const styles = useStyles()

  return (
    <div className={styles.divider}>
      <div className={styles.bar} />
    </div>
  )
}

const Homepage = () => {
  const styles = useStyles()

  const staticData = useStaticQuery(graphql`
    query {
      allFile {
        nodes {
          sourceInstanceName
          childMdx {
            frontmatter {
              company
              from
              to
              tags
            }
            body
          }
        }
      }
    }
  `)
  const workData = staticData.allFile.nodes.filter(
    el => el.sourceInstanceName === "work-experience"
  )
  const personalData = staticData.allFile.nodes.filter(
    el => el.sourceInstanceName === "personal-experience"
  )

  console.log(staticData)
  console.log(workData)
  console.log(personalData)

  return (
    <GridLayout>
      <div className={styles.whoAmI}>
        <WhoAmI />
      </div>
      <GridListLayout className={styles.list}>
        <div className={styles.work}>
          {workData.map(({ childMdx }) => (
            <ExperienceCard key={childMdx.id} {...childMdx} />
          ))}
        </div>
        <Divider />
        <div className={styles.personal}>
          {personalData.map(({ childMdx }) => (
            <ExperienceCard key={childMdx.id} {...childMdx} />
          ))}
        </div>
      </GridListLayout>
    </GridLayout>
  )
}

export default Homepage
