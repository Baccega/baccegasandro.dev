import React from "react"
import { createUseStyles } from "react-jss"

const useStyles = createUseStyles(theme => ({
  footer: {
    gridArea: "footer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "0.9rem",
    color: theme.color,
    // backgroundColor: theme.colorTertiary,
    backgroundColor: theme.colorSecondary,
  },
}))

const Footer = props => {
  const styles = useStyles()
  return <div className={styles.footer}>Created by Sandro Baccega © 2020</div>
}

export default Footer
