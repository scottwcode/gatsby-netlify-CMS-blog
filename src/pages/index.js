import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Scott's Personal Blog"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <img style={{ margin: 0 }} src="./GatsbyScene.svg" alt="Gatsby Scene" />
        <h1>
          Hey people{" "}
          <span role="img" aria-label="wave emoji">
            👋
          </span>
        </h1>
        <p>Welcome to my personal blog. Not much to it yet...</p>
        <p>
          This was created using Gatsbyjs with Netlify CMS to manage content.
          Thanks to Marin for the sssss...svg pic above!
        </p>
        <p>Feel free to look around! Everything should be ⚡️ fast </p>
        <Link to="/blog/">
          <Button marginTop="35px">Go to Recipe Blog</Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage
