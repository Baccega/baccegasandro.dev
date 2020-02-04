import React from "react"
import { createUseStyles } from "react-jss"
import GridLayout from "../layouts/GridLayout"
import MaterialUiIcon from "../assets/icons/MaterialUiIcon"
import "../styles/bulma.scss"

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
  return (
    <GridLayout>
      <div className={styles.whoAmI}>WHO AM I</div>
      <div className={styles.work}>
        <MaterialUiIcon width="100" height="100" />
      </div>
      <div className={styles.personal}>PERSONAL</div>
    </GridLayout>
  )
}

export default Homepage
