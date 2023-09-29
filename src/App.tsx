import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import { ROUTES } from './routes';
import { NavBar } from './components';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          {ROUTES.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </Router>
    </>
  );
}

export default App;
