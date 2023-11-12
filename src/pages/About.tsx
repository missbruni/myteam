import { Link } from 'react-router-dom';

type AboutPageProps = {};
const AboutPage: React.FC<AboutPageProps> = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold">About us</h1>
      <Link to="/contact">Contact us</Link>
    </div>
  );
};
export default AboutPage;
