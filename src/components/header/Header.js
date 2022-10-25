import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Image from '../../assets/Home/Image';
import MainRoutes from '../../routes/Routes';
import { useDispatch } from 'react-redux';
import { getLogOut } from '../../Features/UserSlice';
import './header.scss';

function Header() {
    const dispatch = useDispatch();
    const action = getLogOut();
    const user = useSelector((state) => {
        return state.user.user;
    });
    const Navigate = useNavigate();
    function delete_cookie(name) {
        document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }
    const handleSignOut = () => {
        dispatch(action);
        delete_cookie('token');
        setTimeout(() => {
            Navigate('/login');
        }, 1000);
    };
    const productList = useSelector((state) => state.cart);
    const qtyCart = productList.reduce((current, item) => current + item.qty, 0);
    const [headerActive, setHeaderActive] = useState('');
    useEffect(() => {
        const handleScroll = () => {
            window.scrollY >= 150 ? setHeaderActive('setBg') : setHeaderActive('');
        };
        window.addEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={` headerWrap ${headerActive}`}>
            <div className="navbar">
                <div className="navbar-left">
                    <Link to={MainRoutes.HOME.path} style={{ height: '100%' }}>
                        <img className="logo" src={Image.logo} alt="img" />
                    </Link>
                    <ul className="menu">
                        <Link to={MainRoutes.HOME.path} className="menu--home">
                            <i class="fa-solid fa-house-user"></i>HOME
                        </Link>
                        <li>
                            <a href="#to--delivery">
                                <i class="fa-solid fa-truck"></i>DELIVERY
                            </a>
                        </li>
                        <li>
                            <a href="#to--notify">
                                <i class="fa-solid fa-comment"></i>NOTIFY
                            </a>
                        </li>
                        <li className="menu-shop">
                            <Link to={MainRoutes.SHOP.path}>
                                <i class="fa-solid fa-store"></i>STORE
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="option">
                    <Link className="cart" to="/cart">
                        <i class="fa-solid fa-cart-shopping"></i>
                        <span className="amount">{qtyCart}</span>
                    </Link>

                    <div className="login">
                        {user ? (
                            <div className="login__avatar">
                                <img className="avatar" src="" alt="img"></img>
                                <span>{user}</span>
                                <ul className="login__avatar__popup">
                                    <li className="login__avatar__popup--option">
                                        <i className="fa-solid fa-truck-fast"></i>Your Order
                                    </li>
                                    <li className="login__avatar__popup--option" onClick={handleSignOut}>
                                        <i className="fa-solid fa-right-from-bracket"></i>Log Out
                                    </li>
                                </ul>
                            </div>
                        ) : (
                            <div>
                                <Link to="/login" style={{ color: 'white', height: '100%' }}>
                                    <i class="fa-solid fa-user"></i>Sign in
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
