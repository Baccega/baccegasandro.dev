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

function calculateDimensions(props) {
  return props.is_large
    ? "100px"
    : props.is_medium
    ? "70px"
    : props.is_small
    ? "30px"
    : "20px"
}

export const Icon = props => {
  const { dynamicWidth } = props

  const width = dynamicWidth ? dynamicWidth : calculateDimensions(props)

  return <MyIcons {...props} width={width} height={width} />
}

const RoundedIcon = props => {
  const styles = useStyles()

  const dynamicWidth = calculateDimensions(props)

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
