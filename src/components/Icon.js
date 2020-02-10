import React from "react"
import { createUseStyles } from "react-jss"
import MyIcons from "../assets/MyIcons"

const useStyles = createUseStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 50,
    backgroundColor: theme.colorPrimary,
    borderRadius: "100%",
  },
  svg: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
}))

export const Icon = props => {
  const { dynamicWidth } = props
  return <MyIcons {...props} width={dynamicWidth} height={dynamicWidth} />
}

const RoundedIcon = props => {
  const styles = useStyles()

  const dynamicWidth = props.is_large
    ? "100px"
    : props.is_medium
    ? "70px"
    : props.is_small
    ? "30px"
    : "20px"

  const dynamicDimensions = {
    width: `calc(15px + ${dynamicWidth})`,
    height: `calc(15px + ${dynamicWidth})`,
  }

  return (
    <div style={dynamicDimensions} className={styles.root}>
      <Icon dynamicWidth={dynamicWidth} {...props} />
    </div>
  )
}

export default RoundedIcon
