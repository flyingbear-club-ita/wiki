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
    title: translate({id: 'discord.header', message:'Seguici su Discord'}),
    imageUrl: 'img/discordLogoNew.svg',
    description: (
      translate({
        id: 'discord.message',
        message: "Il nostro punto di riferimento, tutti i contenuti partono da li'"
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
    <div className={clsx('colonna-social', styles.feature)}>
      {imgUrl && (
        <div className="text--center"><img className={styles.featureImage} src={imgUrl} alt={title} />
          <Link to={link}>
            <h3>{title}</h3>
          </Link>
        </div>
      )}
      
      <p>{description}</p>
    </div>
  );
}

export default function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  const title = translate({id:"pageTitle", message:"Benvenuto nella community sulla Flyingbear Ghost"})
  const description = translate({id:"description", message:`
  La wiki della community italiana sulla Flyingbear Ghost
  Punto di ritrovo per gli appassionati di stampanti 3d e non solo
  Guide per la calibrazione, ottimizzazione, modding ed altro, tutte incentrate su Flyingbear Ghost 4s e 5
`})
  const visualstyle = {
    background: "url(/assets/images/ghost5-208f6d108b5110412665cb7044290043.jpg) center center",
    backgroundSize: "contain",
    height: "38vh",
  };
  return (
    <Layout
      title={title}
      description={description}vccvcv
      keywords='flyingbear, flyingbear ghost, flyingbear ghost 5, flyingbear ghost 4s, ghost, ghost 5, ghost 4s, 3d printing, wiki, calibration, guide, setup'>
      {/*
        Leaving modal here, we'll reactivate for some other surveys
        <SurveyModal/>
      */}
      
      <header className={clsx('hero hero--primary', styles.heroBanner)} 
              style={visualstyle}>
        
      </header>
      
      <div className="container text-visual-home">
          <h1 className="">{title}</h1>
                      
        </div>
        
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
      <div className="sezione-wiki">
      <h2 className="section-title">Wiki Flyingbear Ghost</h2>
      <p>
              <Translate
                id="homepage.sezione-wiki.par-one"
                description="homepage sezione-wiki.par-one">
                Hai Appena comprato la stampante 3d Flying Bear Ghost? 
              </Translate>
            </p>
      <p>
              <Translate
                id="homepage.sezione-wiki.par-two"
                description="homepage sezione-wiki.par-two">
                Vuoi regolare la tua Ghost perchè stampi perfettamente?
              </Translate>
            </p>
            <p>
              <Translate
                id="homepage.sezione-wiki.par-three"
                description="homepage sezione-wiki.par-three">
                Inizia da qui, setup, calibrazioni, upgrade e molto altro ti aspettano
              </Translate>
            </p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Vai alla Wiki
            </Link>
          </div>
	  </div>
      <div className="sezione-upgrades-ricambi">
		  <div className="sezione-upgrades">
		  <h2 className="section-title">Upgrades Flyingbear Ghost</h2>
		  <p>
				  <Translate
					id="homepage.sezione-wiki.par-one"
					description="homepage sezione-wiki.par-one">
					Scopri tutti gli upgrades consigliati per la stampante 3d Flying Bear Ghost, e se desideri approfondire
					ti basta entrare nel nostro Discord ufficiale 
				  </Translate>
				</p>
		  
			  <div className={styles.buttons}>
				<Link
				  className={clsx(
					'button button--outline button--secondary button--lg',
					styles.getStarted,
				  )}
				  to={useBaseUrl('upgrades')}>
				  Upgrades Ghost
				</Link>
			  </div>
		  </div>
		  <div className="sezione-ricambi">
		  <h2 className="section-title">Ricambi Flyingbear Ghost</h2>
		  
		  <p>
				  <Translate
					id="homepage.sezione-wiki.par-one"
					description="homepage sezione-wiki.par-one">
					Scopri tutti i ricambi originali e non per la stampante 3d Flying Bear Ghost, e se 
					vuoi maggiori informazioni riguardo un pezzo di ricambio da chi lo ha già provato
					ti basta entrare nel nostro Discord ufficiale 
				  </Translate>
				</p>
				
			  <div className={styles.buttons}>
				<Link
				  className={clsx(
					'button button--outline button--secondary button--lg',
					styles.getStarted,
				  )}
				  to={useBaseUrl('ricambi')}>
				  Ricambi Ghost
				</Link>
			  </div>
		  </div>
	  </div>
        
      </main>
    </Layout>
  );
}
