import { ROUTES } from '../routes';
import { Link } from 'react-router-dom'; // Import Link from React Router if you're using it for routing

const NavBar = () => {
  return (
    <nav className='fixed top-0 flex'>
      <ul className='flex space-x-4'>
        {ROUTES.map((route, index) => (
          <li key={index}>
            <Link
              to={route.path}
              className='text-white scroll-m-20 text-4xl font-bold tracking-tight no-underline hover:text-gray-300   transition duration-300'
            >
              {route.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
