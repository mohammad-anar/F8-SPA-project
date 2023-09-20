import { createBrowserRouter } from 'react-router-dom';
import Post from '../Pages/Posts/Posts';
import About from '../Pages/About/About';
import Contact from '../Pages/Contact/Contact';
import Home from '../Pages/Home/Home';
import PostDetails from '../Components/PostDetails/PostDetails';
import RouteError from '../Components/RouteError/RouteError';
import Inbox from '../Pages/Inbox/Inbox';
import MainComponent from '../Components/Main/MainComponent';

const router = createBrowserRouter([
  
    {
      path: '/',
      element: <MainComponent></MainComponent>,
      errorElement: <RouteError></RouteError>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/posts',
          loader: () => fetch('https://jsonplaceholder.typicode.com/posts'),
          element: <Post></Post>
        },
        {
          path: '/post/:id',
          loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`),
          element: <PostDetails/>
        },
        {
          path: '/about',
          element: <About></About>
        },
        {
          path: '/contact',
          element: <Contact></Contact>
        },
        {
          path: '/inbox',
          element: <Inbox></Inbox>
        }
      ]
    }
  ]);

  export default  router;