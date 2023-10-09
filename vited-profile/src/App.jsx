import { useState } from 'react';
import Vite from 'vite';

import Footer from './components/Footer';
import Header from './components/Header';
import Contact from './components/Contact';
import About from './components/About';
import Error from './components/Error';
import Project from './components/Project';
import Home from './components/Home';

import './styles.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

function App() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/about',
      element: <About />,
    },
    {
      path: '/projects',
      element: <Project />,
    },
    {
      path: '/contact',
      element: <Contact />,
    },
    {
      path: '*',
      element: <Home />,
    },
  ]);

  return (
    <div>
      <Header />
      <RouterProvider router={routes} />
      <Footer />
    </div>
  );


}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

export default App;