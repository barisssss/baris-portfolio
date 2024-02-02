import * as React from 'react'
import { HeroSection, InterestsSection, Page, ProjectsSection, Seo } from 'gatsby-theme-portfolio-minimal'

const IndexPage = () => {
  return (
    <Page>
      <HeroSection sectionId="hero" />
      <InterestsSection sectionId="interests" heading="Skills & Interests"/>
      <ProjectsSection sectionId="projects" heading="Projects"/>
    </Page>
  )
}

export const Head = () => <Seo title="Home" />

export default IndexPage