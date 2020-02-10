import React from "react"
import { createUseStyles } from "react-jss"
import "../styles/bulma.scss"
import GridLayout from "../layouts/GridLayout"
import GridListLayout from "../layouts/GridListLayout"
import WhoAmI from "../components/WhoAmI"
import ExperiencesList from "../containers/ExperiencesList"
import Divider from "../components/Divider"

const useStyles = createUseStyles(theme => ({
  whoAmI: {
    gridArea: "center",
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
  divider: {
    gridArea: "divider",
  },
}))

const Homepage = () => {
  const styles = useStyles()

  return (
    <GridLayout>
      <div className={styles.whoAmI}>
        <WhoAmI />
      </div>
      <GridListLayout className={styles.list}>
        <ExperiencesList className={styles.work} headerLocation="left" />
        <Divider className={styles.divider} />
        <ExperiencesList className={styles.peronal} headerLocation="right" />
      </GridListLayout>
    </GridLayout>
  )
}

export default Homepage
