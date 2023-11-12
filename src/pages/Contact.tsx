import { Link } from 'react-router-dom';

type ContactPageProps = {};
const ContactPage: React.FC<ContactPageProps> = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Contact us</h1>
      <Link to="/about">About us</Link>
      <Link to="/">Home</Link>
    </div>
  );
};
export default ContactPage;
