import React from "react"
import { createUseStyles } from "react-jss"
import { FaRegCopyright } from "react-icons/fa"

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
  copyrightIcon: {
    margin: {
      left: "0.5em",
      right: "0.5em",
    },
  },
}))

const Footer = props => {
  const styles = useStyles()
  return (
    <div className={styles.footer}>
      Created by Sandro Baccega{" "}
      <FaRegCopyright className={styles.copyrightIcon} /> 2020
    </div>
  )
}

export default Footer
