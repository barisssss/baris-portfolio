import * as React from "react";
import { Page, Section, Seo } from "gatsby-theme-portfolio-minimal";

const ImprintPage = () => {
  return (
    <Page>
      <Section sectionId="imprint" heading="Imprint">
        <p>
          <strong>Baris Altun</strong>
        </p>
        <p>
          60329 Frankfurt
          <br />
          Germany
        </p>
        <br />
        <p>
          <strong>Contact</strong>
        </p>
        <a href="mailto:barisaltun96@gmail.com">barisaltun96@gmail.com</a>
        <br />
        <a href="tel:017641580808">017641580808</a>
      </Section>
    </Page>
  );
};

export const Head = () => <Seo title="Imprint" />;

export default ImprintPage;
