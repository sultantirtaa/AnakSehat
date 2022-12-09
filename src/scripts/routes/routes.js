import AboutUs from '../views/pages/about-us';
import Recipe from '../views/pages/recipe';
import Home from '../views/pages/home';
import Detail from '../views/pages/detail';
import Bookmark from '../views/pages/bookmark';
import Nutrition from '../views/pages/nutrition';

const routes = {
  '/': Home,
  '/home': Home,
  '/nutrition': Nutrition,
  '/about-us': AboutUs,
  '/recipe': Recipe,
  '/detail/:id': Detail,
  '/bookmark': Bookmark,
};

export default routes;
