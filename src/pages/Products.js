
import { useTranslation } from 'react-i18next';

function Products() {
      const { t } = useTranslation();

  return (
    <div className="page">
       <h2>{t('products.ourProducts')}</h2>
      <ul>
        <li>Fertilizers</li>
        <li>Seeds</li>
        <li>Pesticides</li>
        <li>Machinery Parts</li>
      </ul>
    </div>
  );
}

export default Products;
