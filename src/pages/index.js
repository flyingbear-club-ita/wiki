import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import SurveyModal from '../components/SurveyModal';
import Translate, {translate} from '@docusaurus/Translate';

const features = [
  {
    title: translate({id: 'discord.header', message:'Iscriviti alla community su Discord'}),
    imageUrl: 'img/discordLogoNew.svg',
    description: (
      translate({
        id: 'discord.message',
        message: "La community su Discord e' il nostro punto di riferimento, tutti i contenuti partono da li'"
      })
    ),
    link: translate({id: 'discord.link', message:"https://discord.gg/p2gtrKm"}),
  },
  {
    title: translate({id:'instagram.header', message:"Seguici su Instagram"}),
    imageUrl: 'img/instagramLogo.svg',
    description: (
      translate({
        id: 'instagram.message',
        message: "Le piu' belle stampe della community, manda quelle di cui vai piu' orgoglioso"
      })
      ),
      link: translate({id:"instagram.link", message: "https://instagram.com/flyingbear_ghost?igshid=12aaaycdo2k6y"})
  },
  {
    title: translate({id: "facebook.header", message:"Seguici su Facebook"}),
    imageUrl: 'img/facebookLogo.svg',
    description: (
      translate({
        id: "facebook.message",
        message: "La nostra pagina su Facebook"
      })
    ),
    link: translate({id:"facebook.link", message:"https://www.facebook.com/groups/600126627631693/"})
  },
  {
    title: translate({id: "youtube.header", message:"Seguici su Youtube"}),
    imageUrl: 'img/youtube.svg',
    description: (
      translate({
        id: "youtube.message",
        message: "Il nostro canale su Youtube!!!"
      })
    ),
    link: translate({
      id: "youtube.link",
      message:"https://www.youtube.com/channel/UCvYNczNj85zogLFzAr1Hf6Q"
    })
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
  const title = translate({id:"pageTitle", message:"Benvenuto nella wiki sulla Flyingbear Ghost"})
  const description = translate({id:"description", message:"La wiki della community italiana sulla Flyingbear Ghost"})
  return (
    <Layout
      title={title}
      description={description}
      keywords='flyingbear, flyingbear ghost, flyingbear ghost 5, flyingbear ghost 4s, ghost, ghost 5, ghost 4s, 3d printing, wiki, calibration, guide, setup'>
      {/*
        Leaving modal here, we'll reactivate for some other surveys
        <SurveyModal/>
      */}
      
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          
            <p className="hero__subtitle">
              <Translate
                id="homepage.subtitle"
                description="homepage subtitle">
                Setup, calibrazioni, upgrade e molto altro
              </Translate>
            </p>
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
