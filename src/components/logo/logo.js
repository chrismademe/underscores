import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import "./logo.css"

const Logo = ({ color, floating }) => {
    let isFloating = floating && `is-floating`
    return (
        <Link className={`logo logo-${color} ${isFloating}`} to="/">CG</Link>
    )
}

Logo.defaultProps = {
    color: `brand`,
    floating: true
}

Logo.propTypes = {
    color: PropTypes.string,
    floating: PropTypes.bool
}

export default Logo