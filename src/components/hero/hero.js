import React from "react"
import PropTypes from "prop-types"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import "./hero.css"

const Hero = ({ title, subTitle }) => {
    const data = useStaticQuery(graphql`
        query {
            file(relativePath: { eq: "boilerplate-code.png" }) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

    return (
        <section className="hero">
            <div className="hero-image">
                <Img fluid={data.file.childImageSharp.fluid} />
            </div>

            <div className="hero-content">
                <h1 className="hero-title">{title}</h1>
                <p className="hero-subTitle">{subTitle}</p>
            </div>
        </section>
    )
}

export default Hero

Hero.propTypes = {
    title: PropTypes.string,
    subTitle: PropTypes.string
}