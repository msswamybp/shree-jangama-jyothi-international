import { useTranslation } from 'react-i18next';
function Home() {
    const { t } = useTranslation();

  return (
    <div>
      <section className="banner">
       <h1>{t('homepage.welcome')}</h1>
        <p>{t('homepage.description')}</p>
      </section>
    </div>
  );
}

export default Home;
