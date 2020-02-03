import React from "react"
import { Link } from "gatsby"

const Header = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="work-experiences">Work Experiences</Link>
      </li>
      <li>
        <Link to="personal-experiences">Personal Experiences</Link>
      </li>
    </ul>
  </nav>
)

export default Header
