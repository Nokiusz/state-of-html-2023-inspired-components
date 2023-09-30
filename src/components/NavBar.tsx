import { ROUTES } from '../routes';
import { Link } from 'react-router-dom'; // Import Link from React Router if you're using it for routing

const NavBar = () => {
  return (
    <nav className='fixed top-0 flex justify-center w-full'>
      <ul className='flex space-x-4'>
        {ROUTES.map((route, index) => (
          <li key={index}>
            <Link
              to={route.path}
              className='text-4xl font-bold tracking-tight text-white no-underline capitalize transition duration-300 scroll-m-20 hover:text-gray-300'
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
