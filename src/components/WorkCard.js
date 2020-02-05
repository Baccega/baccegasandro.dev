import React from "react"
import { createUseStyles } from "react-jss"
import { Link } from "gatsby"

const useStyles = createUseStyles(theme => ({
  date: { display: "flex", justifyContent: "flex-end" },
  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
    padding: {
      left: 10,
      right: 10,
      top: 5,
      bottom: 5,
    },
  },
}))

const WorkCard = props => {
  const styles = useStyles()
  return (
    <div className="card">
      <header className={`card-header ${styles.cardHeader}`}>
        <h1 className=" is-4 has-text-weight-bold has-text-black">Component</h1>
        <p
          className={` is-5 has-text-weight-light has-text-gray ${styles.date}`}
        >
          Date
        </p>
      </header>
      <div className="card-content">
        <p className="title">
          “There are two hard things in computer science: cache invalidation,
          naming things, and off-by-one errors.”
        </p>
        <p className="subtitle">Jeff Atwood</p>
      </div>
      <footer className="card-footer">
        <Link to="#" className="card-footer-item">
          View details
        </Link>
      </footer>
    </div>
  )
}

export default WorkCard
