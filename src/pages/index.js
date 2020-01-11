import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Logo from "../components/logo/logo"
import Hero from "../components/hero/hero"

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <Logo />
        <Hero title="Boilerplate" subTitle="Client sites, without the faff." />
    </Layout>
)

export default IndexPage
