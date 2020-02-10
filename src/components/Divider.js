import React from "react"
import { createUseStyles } from "react-jss"
import "../styles/bulma.scss"
import GridLayout from "../layouts/GridLayout"
import GridListLayout from "../layouts/GridListLayout"
import WhoAmI from "../components/WhoAmI"
import ExperiencesList from "../containers/ExperiencesList"

const useStyles = createUseStyles(theme => ({
  root: {
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
}))

const Divider = () => {
  const styles = useStyles()
  return (
    <div className={styles.root}>
      <div className={styles.bar} />
    </div>
  )
}

export default Divider
