import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import "./logo.css"

const Logo = ({ color }) => {
    return (
        <Link className={`logo logo-${color}`} to="/">CG</Link>
    )
}

Logo.defaultProps = {
    color: `brand`
}

Logo.propTypes = {
    color: PropTypes.string
}

export default Logo