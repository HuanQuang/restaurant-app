import HomePage from '../Page/home/Home';
import ShopPage from '../Page/shop/Shop';
import Error from '../components/Error/Error';
import Detail from '../Page/detail/Detail';
import Register from '../Page/auth/Register';

const MainRoutes = {
    HOME: { id: 1, path: '/', component: HomePage },
    SHOP: { id: 2, path: '/shop', component: ShopPage },
    ERROR: { id: 3, path: '/error', component: Error },
    PRODUCT: { id: 4, path: '/shop/:idProduct', component: Detail },
    REGISTER: { id: 5, path: '/register', component: Register },
};
export default MainRoutes;
