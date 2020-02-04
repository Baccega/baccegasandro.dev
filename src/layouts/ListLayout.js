import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { createUseStyles } from "react-jss"

const useStyles = createUseStyles(theme => ({
  container: {
    display: "grid",
    color: theme.color,
    width: "100vw",
    gridTemplateColumns: "1fr",
    gridTemplateRows: "50px auto 50px",
    gridTemplateAreas: "'header' 'center' 'footer'",
    minHeight: "100vh",
    fontFamily: theme.fontFamily,
    fontSize: theme.fontSize,
  },
}))

const ListLayout = props => {
  const styles = useStyles()
  return (
    <div className={styles.container}>
      <Header />
      {props.children}
      <Footer />
    </div>
  )
}

export default ListLayout
