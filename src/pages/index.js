import React from "react"
import { createUseStyles } from "react-jss"
import "../styles/bulma.scss"
import GridLayout from "../layouts/GridLayout"
import GridListLayout from "../layouts/GridListLayout"
import WhoAmI from "../components/WhoAmI"
import ExperiencesList from "../containers/ExperiencesList"
import Divider from "../components/Divider"
import ContactMe from "../components/ContactMe"

const useStyles = createUseStyles(theme => ({
  whoAmI: {
    gridArea: "whoAmI",
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
  contactMe: {
    gridArea: "contactMe",
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
        <ExperiencesList className={styles.work} listContent="work" />
        <Divider className={styles.divider} />
        <ExperiencesList className={styles.personal} listContent="personal" />
      </GridListLayout>
      <ContactMe className={styles.contactMe} />
    </GridLayout>
  )
}

export default Homepage
