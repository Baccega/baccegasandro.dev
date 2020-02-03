import React from "react"
import Header from "../components/Header"
import { createUseStyles } from "react-jss"

const useStyles = createUseStyles(theme => ({
  container: {
    display: "grid",
    width: "100vw",
    gridTemplateColumns: "1fr 1fr",
    gridTemplateRows: "auto",
    gridTemplateAreas: "'header header' 'work personal' 'footer footer'",
    fontFamily: theme.fontFamily,
    fontSize: theme.fontSize,
  },
  work: {
    gridArea: "work",
    backgroundColor: theme.colorPrimary,
  },
  personal: {
    gridArea: "personal",
    backgroundColor: theme.colorSecondary,
  },
  footer: {
    gridArea: "footer",
    backgroundColor: theme.colorTertiary,
  },
}))

const Homepage = () => {
  const styles = useStyles()
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.work}>WORK</div>
      <div className={styles.personal}>PERSONAL</div>
      <div className={styles.footer}>FOOTER</div>
    </div>
  )
}

export default Homepage
