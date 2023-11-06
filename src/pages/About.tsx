import { Link } from 'react-router-dom';

type AboutPageProps = {};
const AboutPage: React.FC<AboutPageProps> = (props) => {
  return (
    <div>
      <h1>About us</h1>
      <Link to="/contact">Contact us</Link>
    </div>
  );
};
export default AboutPage;
