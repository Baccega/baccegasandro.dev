import React from "react"
import { createUseStyles } from "react-jss"
import "../styles/bulma.scss"

const useStyles = createUseStyles(theme => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
}))

const LinkButton = props => {
  const styles = useStyles()
  return (
    <a {...props} className={`button is-white ${styles.root}`}>
      {props.children}
    </a>
  )
}

export default LinkButton
