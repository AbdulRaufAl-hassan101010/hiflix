import Showcase from "../components/Showcase";
import BaseLayout from "../layouts/BaseLayout";
import TrendingMovies from "../components/TrendingMovies";

const Home = () => {
  return (
    <BaseLayout>
      <div className="container mx-auto px-5">
        <Showcase />
        <TrendingMovies />
      </div>
    </BaseLayout>
  );
};

export default Home;
