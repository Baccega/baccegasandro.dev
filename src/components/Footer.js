import React from "react"
import { createUseStyles } from "react-jss"

const useStyles = createUseStyles(theme => ({
  footer: {
    gridArea: "footer",
    backgroundColor: theme.colorBase,
  },
}))

const Footer = props => {
  const styles = useStyles()
  return <div className={styles.footer}>Footer</div>
}

export default Footer
