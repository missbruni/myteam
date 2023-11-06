import { Link } from 'react-router-dom';

type ContactPageProps = {};
const ContactPage: React.FC<ContactPageProps> = (props) => {
  return (
    <div>
      <h1>Contact us</h1>
      <Link to="/about">About us</Link>
      <Link to="/">Home</Link>
    </div>
  );
};
export default ContactPage;
