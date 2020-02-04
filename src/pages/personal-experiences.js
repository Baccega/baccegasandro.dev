import React from "react"
import { createUseStyles } from "react-jss"
import ListLayout from "../layouts/ListLayout"

const useStyles = createUseStyles(theme => ({
  list: {
    gridArea: "center",
    backgroundColor: theme.colorSecondary,
  },
}))

const PersonalExp = () => {
  const styles = useStyles()
  return (
    <ListLayout>
      <div className={styles.list}>LIST</div>
    </ListLayout>
  )
}

export default PersonalExp
