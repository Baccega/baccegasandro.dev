import React from "react"
import { createUseStyles } from "react-jss"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import ReactIcon from "../assets/icons/ReactIcon"
import Icon from "../assets/icons/Icon"

const useStyles = createUseStyles(theme => ({
  contentContainer: {
    display: "grid",
    gridTemplateColumns: "3fr 2fr",
    alignItems: "center",
    width: "100%",
  },
  iconContainer: {
    display: "flex",
    justifyContent: "space-evenly",
    width: "100%",
  },
  iconBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  "@media (max-width: 1024px)": {
    contentContainer: {
      gridTemplateColumns: "1fr",
      gridTemplateRows: "1fr 1fr",
    },
    iconContainer: {
      justifyContent: "flex-start",
    },
  },
}))

const IconContainer = ({ children }) => {
  const styles = useStyles()

  return <div className={styles.iconBox}>{children}</div>
}

const FrontmatterLayout = ({ company, from, to, tags }) => {
  const styles = useStyles()
  return (
    <header>
      <p className="title">{company}</p>
      <p className="subtitle">
        {from} -> {to}
      </p>
    </header>
  )
}

const BodyLayout = ({ children }) => {
  const styles = useStyles()
  return (
    <main className={styles.iconContainer}>
      <MDXProvider
        components={{
          // Map HTML element tag to React component
          // h1: DesignSystem.H1,
          // h2: DesignSystem.H2,
          // h3: DesignSystem.H3,
          // Or define component inline
          h1: () => null,
          p: () => null,
          li: props => <IconContainer {...props} />,
          img: props => <Icon {...props} />,
          // p: props => <p {...props} style={{ color: "red" }} />,
        }}
      >
        <MDXRenderer>{children}</MDXRenderer>
      </MDXProvider>
    </main>
  )
}

const ExperienceCard = ({ frontmatter, body }) => {
  const styles = useStyles()
  return (
    <div className="card">
      <div className={`card-content ${styles.contentContainer}`}>
        <FrontmatterLayout {...frontmatter}></FrontmatterLayout>
        <BodyLayout>{body}</BodyLayout>
      </div>
    </div>
  )
}

export default ExperienceCard
