// core pages
import Home from '../content/home';
import About from '../content/about';

// main sections
import List from '../content/list';


// note: nav, order, and true are optional and add a link to the default header
export const ROUTES = {
  HOME: {
    Component: Home,
    path: '/',
    linkTo: () => '/',
    default: true,
    nav: true,
    order: 1,
    label: 'Home',
  },
  ABOUT: {
    Component: About,
    path: '/about',
    linkTo: () => '/about',
    nav: true,
    order: 2,
    label: 'About',
  },
  LIST: {
    Component: List,
    path: '/list',
    linkTo: () => '/list',
    nav: true,
    order: 3,
    label: 'List',
  },
};
