import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { createUseStyles } from "react-jss"

const useStyles = createUseStyles(theme => ({
  container: {
    display: "grid",
    color: theme.color,
    width: "100vw",
    gridTemplateColumns: "1fr 1fr",
    gridTemplateRows: "50px auto auto 50px",
    gridTemplateAreas:
      "'header header' 'center center' 'left right' 'footer footer'",
    minHeight: "100vh",
    fontFamily: theme.fontFamily,
    fontSize: theme.fontSize,
  },
}))

const GridLayout = props => {
  const styles = useStyles()
  return (
    <div className={styles.container}>
      <Header />
      {props.children}
      <Footer />
    </div>
  )
}

export default GridLayout
