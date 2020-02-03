import React from "react"
import Header from "../components/Header"
import { createUseStyles } from "react-jss"

const useStyles = createUseStyles(theme => ({
  container: {
    fontFamily: theme.fontFamily,
    fontSize: theme.fontSize,
  },
}))

const WorkExp = () => {
  const styles = useStyles()
  return (
    <div className={styles.container}>
      <Header />
    </div>
  )
}

export default WorkExp
