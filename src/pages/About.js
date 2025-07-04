import { useTranslation } from 'react-i18next';

function About() {
      const { t } = useTranslation();

  return (
    <div className="page" style={{margin:'10px'}}>
      <h2>{t('aboutPage.about')}</h2>
<p>{t('aboutPage.description')}</p>
    </div>
  );
}

export default About;
