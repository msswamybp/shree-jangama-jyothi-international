import { useTranslation } from "react-i18next";
import { homrpageProduct } from "../constants/constant";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Home() {
  const { t } = useTranslation();

  return (
    <>
    <div style={{ margin: "20px" }}>
      <section className="banner" style={{marginBottom:'40px'}}>
        <h1>{t("homepage.welcome")}</h1>
        <p>{t("homepage.description")}</p>
      </section>
      <div>
        <h2>{t("products.ourProducts")}</h2>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            overflowX: "auto", // Enables horizontal scroll
            whiteSpace: "nowrap", // Prevents wrapping
            maxWidth: "100%", // Keeps it within the container
          }}
        >
          {homrpageProduct.map((item, index) => (
            <div style={{ margin: "10px" }}>
              <img
                src={item?.images}
                alt={`product-${index}`}
                style={{ width: "259px", height: "200px",    objectFit: 'contain',  borderRadius: '8px', backgroundColor: '#f0f0f0'}}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}

export default Home;
