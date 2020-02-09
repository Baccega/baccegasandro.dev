import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { createUseStyles } from "react-jss"

const useStyles = createUseStyles(theme => ({
  container: {
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
  listContainer: {
    display: "grid",
    color: theme.color,
    width: "100vw",
    gridTemplateColumns: "1fr 10px 1fr",
    gridTemplateRows: "auto",
    gridTemplateAreas: "'left divider right'",
    fontFamily: theme.fontFamily,
    fontSize: theme.fontSize,
  },
  "@media (max-width: 1024px)": {
    listContainer: {
      gridTemplateColumns: "1fr",
      gridTemplateRows: "auto auto",
      gridTemplateAreas: "'left' 'right'",
    },
  },
}))

export const GridLayout = props => {
  const styles = useStyles()
  return (
    <div className={styles.container}>
      {props.children}
      <Footer />
    </div>
  )
}

export const GridListLayout = props => {
  const styles = useStyles()
  return <div className={styles.listContainer}>{props.children}</div>
}
