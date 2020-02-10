import React from "react"
import { createUseStyles } from "react-jss"
import "../styles/bulma.scss"
import { GridLayout, GridListLayout } from "../layouts/GridLayout"
import { useStaticQuery } from "gatsby"
import WhoAmI from "../components/WhoAmI"
import {
  WorkExperienceCard,
  PersonalExperienceCard,
} from "../components/ExperienceCard"

const useStyles = createUseStyles(theme => ({
  whoAmI: {
    gridArea: "center",
    backgroundColor: theme.colorSecondary,
  },
  list: {
    gridArea: "list",
  },
  work: {
    gridArea: "left",
  },
  personal: {
    gridArea: "right",
  },
  experienceList: {
    padding: {
      top: 20,
      left: 20,
      right: 20,
      bottom: 0,
    },
    display: "grid",
    gridTemplateRow: "auto",
    gridTemplateColumns: "1fr",
    gridRowGap: 20,
  },

  divider: {
    gridArea: "divider",
    position: "relative",
    height: "100%",
    paddingLeft: 5,
    paddingRight: 5,
    display: "flex",
    alignItems: "center",
  },
  bar: {
    borderRadius: 10,
    top: 20,
    border: `1px solid ${theme.color}`,
    height: "calc(100% - 20px)",
    position: "absolute",
  },
  listHeadingTitle: {
    color: theme.color,
    marginBottom: "0.5rem",
    paddingLeft: "1.5rem",
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
      allMdx {
        edges {
          node {
            frontmatter {
              type
              company
              role
              from
              to
              tags
            }
            body
          }
          node {
            frontmatter {
              type
              project
              period
              role
              tags
            }
            body
          }
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
  const workData = staticData.allMdx.edges.filter(
    ({ node }) => node.frontmatter.type === "work"
  )
  const personalData = staticData.allMdx.edges.filter(
    ({ node }) => node.frontmatter.type === "personal"
  )
  const generalData = staticData.allMdx.edges.filter(
    ({ node }) => node.frontmatter.type === "general"
  )[0].node

  console.log(generalData)

  return (
    <GridLayout>
      <div className={styles.whoAmI}>
        <WhoAmI />
      </div>
      <GridListLayout className={styles.list}>
        <div className={`${styles.work} ${styles.experienceList}`}>
          <h1 className={`${styles.listHeadingTitle} title`}>
            {generalData.frontmatter.left_list_heading}
          </h1>
          {workData.map(({ node }) => (
            <WorkExperienceCard key={node.id} {...node} />
          ))}
        </div>
        <Divider />
        <div className={`${styles.personal} ${styles.experienceList}`}>
          <h1 className={`${styles.listHeadingTitle} title`}>
            {generalData.frontmatter.right_list_heading}
          </h1>

          {personalData.map(({ node }) => (
            <PersonalExperienceCard key={node.id} {...node} />
          ))}
        </div>
      </GridListLayout>
    </GridLayout>
  )
}

export default Homepage
