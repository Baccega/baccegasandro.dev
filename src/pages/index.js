import React from "react"
import { createUseStyles } from "react-jss"
import "../styles/bulma.scss"
import GridLayout from "../layouts/GridLayout"
import MaterialUiIcon from "../assets/icons/MaterialUiIcon"
import WorkCard from "../components/WorkCard"

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
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `)

  return (
    <GridLayout>
      <div className={styles.whoAmI}>WHO AM I</div>
      <div className={styles.work}>
        <MaterialUiIcon width="100" height="100" />
        <WorkCard />
      </div>
      <div className={styles.personal}>PERSONAL</div>
    </GridLayout>
  )
}

export default Homepage
