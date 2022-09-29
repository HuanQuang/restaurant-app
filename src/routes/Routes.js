import HomePage from '../Page/home/Home';
import ShopPage from '../Page/shop/Shop';
import CartPage from '../Page/Cart/Cart';
import Login from '../Page/auth/Login';
import Error from '../components/Error/Error';
import Detail from '../Page/detail/Detail';

const MainRoutes = {
    HOME: { id: 1, path: '/', component: HomePage },
    SHOP: { id: 2, path: '/shop', component: ShopPage },
    ERROR: { id: 3, path: '/error', component: Error },
    CART: { id: 4, path: '/cart', component: CartPage },
    PRODUCT: { id: 5, path: '/shop/:idProduct', component: Detail },
    LOGIN: { id: 6, path: '/login', component: Login },
};
export default MainRoutes;
