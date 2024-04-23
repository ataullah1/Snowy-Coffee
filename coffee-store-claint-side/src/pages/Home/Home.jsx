import { useLoaderData } from 'react-router-dom';
import Banner from '../../components/Banner/Banner';
import FollowOnIG from '../../components/FollowOnIG/FollowOnIG';
import OurPopularProducts from '../../components/OurPopularProducts/OurPopularProducts';
import SubBanner from '../../components/SubBanner/SubBanner';

const Home = () => {
  const data = useLoaderData();

  return (
    <div>
      <Banner />
      <SubBanner />
      <OurPopularProducts data={data} />
      <FollowOnIG />
    </div>
  );
};

export default Home;
