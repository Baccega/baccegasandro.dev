import React from "react"
import { createUseStyles } from "react-jss"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Icon from "./Icon"
import { TiArrowRightThick } from "react-icons/ti"
import "../styles/bulma.scss"

const useStyles = createUseStyles(theme => ({
  root: {
    margin: {
      bottom: 20,
    },
  },
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
  periodContainer: {
    display: "flex",
    alignItems: "center",
  },
  periodIcon: {
    margin: {
      right: 6,
      left: 6,
    },
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

const BodyLayout = ({ children }) => {
  const styles = useStyles()
  return (
    <main className={styles.iconContainer}>
      <MDXProvider
        components={{
          h1: () => null,
          p: () => null,
          li: props => <IconContainer {...props} />,
          img: props => <Icon {...props} />,
        }}
      >
        <MDXRenderer>{children}</MDXRenderer>
      </MDXProvider>
    </main>
  )
}

const WorkFrontmatterLayout = ({ company, role, from, to }) => {
  const styles = useStyles()
  return (
    <header>
      <p className="title">{company}</p>
      <p className="subtitle">{role}</p>
      <div className="subtitle">
        <div className={styles.periodContainer}>
          {from}
          <TiArrowRightThick className={styles.periodIcon} />
          {to}
        </div>
      </div>
    </header>
  )
}

const PersonalFrontmatterLayout = ({ project, role, period }) => {
  // const styles = useStyles()
  return (
    <header>
      <p className="title">{project}</p>
      <p className="subtitle">{role}</p>
      <p className="subtitle">{period}</p>
    </header>
  )
}

const ExperienceCard = ({ children, body }) => {
  const styles = useStyles()
  return (
    <div className={`card ${styles.root}`}>
      <div className={`card-content ${styles.contentContainer}`}>
        {children}
        <BodyLayout>{body}</BodyLayout>
      </div>
    </div>
  )
}

export const WorkExperienceCard = ({ frontmatter, body }) => (
  <ExperienceCard body={body}>
    <WorkFrontmatterLayout {...frontmatter} />
  </ExperienceCard>
)

export const PersonalExperienceCard = ({ frontmatter, body }) => (
  <ExperienceCard body={body}>
    <PersonalFrontmatterLayout {...frontmatter} />
  </ExperienceCard>
)
