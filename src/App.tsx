import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { ROUTES } from './routes';

function App() {
  return (
    <>
      <Router>
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
