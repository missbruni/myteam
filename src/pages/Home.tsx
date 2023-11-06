import { Link } from 'react-router-dom';

type HomePageProps = {};
const HomePage: React.FC<HomePageProps> = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="about">About us</Link>
    </div>
  );
};
export default HomePage;
