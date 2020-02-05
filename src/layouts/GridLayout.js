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
    gridTemplateColumns: "1fr 1fr",
    gridTemplateRows: "50px auto auto auto 50px",
    gridTemplateAreas:
      "'header header' 'center center' 'left right' 'left right' 'footer footer'",
    fontFamily: theme.fontFamily,
    fontSize: theme.fontSize,
  },
  "@media (max-width: 1024px)": {
    container: {
      gridTemplateAreas:
        "'header header' 'center center' 'left left' 'right right' 'footer footer'",
    },
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
