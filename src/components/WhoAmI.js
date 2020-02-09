import React from "react"
import { createUseStyles } from "react-jss"
import "../styles/bulma.scss"
import GridLayout from "../layouts/GridLayout"
import MaterialUiIcon from "../assets/icons/MaterialUiIcon"
import WorkCard from "../components/WorkCard"
import { useStaticQuery } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

const useStyles = createUseStyles(theme => ({
  container: {
    display: "grid",
    color: theme.color,
    width: "100vw",
    minHeight: "100vh",
    gridTemplateColumns: "1fr 10px 1fr",
    gridTemplateRows: "auto auto auto 50px",
    gridTemplateAreas:
      "'center center center' 'left divider right' 'left divider right' 'footer footer footer'",
    fontFamily: theme.fontFamily,
    fontSize: theme.fontSize,
  },
  "@media (max-width: 1024px)": {
    container: {
      gridTemplateAreas:
        "'center center center' 'left left left' 'right right right' 'footer footer footer'",
    },
  },
}))

export default function WhoAmI(props) {
  const classes = useStyles()

  return (
    <section className={`hero is-large`}>
      <div className={`hero-body`}>
        <div className={`container has-text-left`}>
          <h1 className={`title has-text-white`}>Hero title</h1>
          <h2 className={`subtitle has-text-light`}>Hero subtitle</h2>
        </div>
      </div>
    </section>
  )
}
