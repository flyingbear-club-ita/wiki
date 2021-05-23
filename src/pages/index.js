import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Iscriviti alla community su Discord',
    imageUrl: 'img/discordLogoNew.svg',
    description: (
      <>
      La community su Discord e' il nostro punto di riferimento, tutti i contenuti partono da li'
      </>
    ),
    link: "https://discord.gg/p2gtrKm",
  },
  {
    title: 'Seguici su Instagram',
    imageUrl: 'img/instagramLogo.svg',
    description: (
      <>
      Le piu' belle stampe della community, manda quelle di cui vai piu' orgoglioso
      </>
      ),
      link: "https://instagram.com/flyingbear_ghost?igshid=12aaaycdo2k6y"
  },
  {
    title: 'Seguici su Facebook',
    imageUrl: 'img/facebookLogo.svg',
    description: (
      <>
        La nostra pagina su Facebook
      </>
    ),
    link: "https://www.facebook.com/groups/600126627631693/"
  },
];

function Feature({imageUrl, title, description, link}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <Link to={link}>
            <img className={styles.featureImage} src={imgUrl} alt={title} />
          </Link>
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}
