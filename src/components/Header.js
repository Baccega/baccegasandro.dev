import React from "react"
import { Link } from "gatsby"
import { createUseStyles } from "react-jss"

const useStyles = createUseStyles(theme => ({
  navbar: {
    gridArea: "header",
    backgroundColor: theme.colorBase,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "#000000",

    padding: {
      top: 0,
      right: 10,
      bottom: 0,
      left: 10,
    },
  },
  linkList: {
    display: "flex",
    listStyle: "none",
    "& li": {
      padding: 0,
      margin: {
        top: 0,
        right: 10,
        bottom: 0,
        left: 0,
      },
    },
  },
  link: {
    color: "#000000",
    textDecoration: "none",
  },
  activeLink: {
    color: theme.colorPrimary,
    textDecoration: "none",
  },
}))

const Header = () => {
  const styles = useStyles()

  return (
    <nav className={styles.navbar}>
      <span>Sandro Baccega</span>
      <ul className={styles.linkList}>
        <li>
          <Link
            className={styles.link}
            activeClassName={styles.activeLink}
            to="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className={styles.link}
            activeClassName={styles.activeLink}
            to="work-experiences"
          >
            Work Experiences
          </Link>
        </li>
        <li>
          <Link
            className={styles.link}
            activeClassName={styles.activeLink}
            to="personal-experiences"
          >
            Personal Experiences
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header
