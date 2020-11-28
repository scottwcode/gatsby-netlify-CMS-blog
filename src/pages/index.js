import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Scott's Blog with Recipes"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <img
          style={{ margin: 0 }}
          // src="./GatsbyScene.svg"
          // src="./scott-face2.png"
          src="./santa-cam.png"
          alt="Santa Camera"
        />
        <h1>
          Hello{" "}
          <span role="img" aria-label="wave emoji">
            👋
          </span>
        </h1>
        <p>Welcome to one of Scott's blogs. Not much to this one at the moment...</p>
        <p>
          This was created using Gatsbyjs with Netlify CMS to manage content and deployment.
        </p>
        <p>Feel free to look around! Everything should be ⚡️ fast. </p>
        <p>Click the button below to see some good and simple recipes </p>
        <Link to="/blog/">
          <Button marginTop="35px">Go to Recipes</Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage
