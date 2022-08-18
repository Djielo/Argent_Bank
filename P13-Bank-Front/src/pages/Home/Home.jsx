import HomeFeatureItem from "../../components/HomeFeatureItem/HomeFeatureItem";
import { HomeFeatureItemArray } from "../../datas/HomeFeatureItemArray";
import HomeHero from "../../components/HomeHero/HomeHero";

const Home = () => {
  return (
    <main>
      <HomeHero />
      <section className="features">
        <h2 className="sr-only">Features</h2>
        {HomeFeatureItemArray.map((item, index) => (
          <HomeFeatureItem key={index} {...item} />
        ))}
      </section>
    </main>
  );
};

export default Home;
