import Banner from '../../components/Banner/Banner';
import FollowOnIG from '../../components/FollowOnIG/FollowOnIG';
import OurPopularProducts from '../../components/OurPopularProducts/OurPopularProducts';
import SubBanner from '../../components/SubBanner/SubBanner';

const Home = () => {
  return (
    <div>
      <Banner />
      <SubBanner />
      <OurPopularProducts />
      <FollowOnIG />
    </div>
  );
};

export default Home;
