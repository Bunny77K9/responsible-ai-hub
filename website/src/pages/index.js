import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const callToAction = "Skill Up On Azure AI 👉🏽";
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">Building AI Solutions? Let's Build Responsibly!</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/responsible-ai-hub">
              {callToAction}
          </Link>
        </div>
      </div>
    </header>
  );
}


export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  const partners = [
    {
      title: 'Zindi Africa',
      img: require('@site/static/img/partners/zindi.png'),
      link: 'https://zindi.africa',
      description: (
        <>
          About Zindi
        </>
      ),
    },
    {
      title: 'Microsoft Learn Student Ambassadors',
      img: require('@site/static/img/partners/mlsa.png'),
      link: 'https://learn.microsoft.com',
      description: (
        <>
          About Microsoft Learn Student Ambassadors
        </>
      ),
    },
  ];

  return (
    <Layout
      title={`Skill up on ${siteConfig.title}`}
      description="Go from Principles to Practice with Hands-on Workshops">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
