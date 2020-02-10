import React from "react"
import Footer from "../components/Footer"
import { createUseStyles } from "react-jss"

const useStyles = createUseStyles(theme => ({
  root: {
    display: "grid",
    color: theme.color,
    width: "100vw",
    minHeight: "100vh",
    gridTemplateColumns: "1fr",
    gridTemplateRows: "auto auto 50px",
    gridTemplateAreas: "'center' 'list' 'footer'",
    fontFamily: theme.fontFamily,
    fontSize: theme.fontSize,
  },
}))

const GridLayout = props => {
  const styles = useStyles()
  return (
    <div className={styles.root}>
      {props.children}
      <Footer />
    </div>
  )
}

export default GridLayout
